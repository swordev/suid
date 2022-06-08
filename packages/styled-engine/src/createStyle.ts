import StyledEngineContext from "./StyledEngineProvider/StyledEngineContext";
import mergeStyleProps from "./mergeStyleProps";
import createStyleObject, { StyleObject } from "@suid/css/createStyleObject";
import appendStyleElement from "@suid/css/dom/appendStyleElement";
import findStyleElement from "@suid/css/dom/findStyleElement";
import registerStyleElementUsage from "@suid/css/dom/registerStyleElementUsage";
import unregisterStyleElementUsage from "@suid/css/dom/unregisterStyleElementUsage";
import {
  createRenderEffect,
  createSignal,
  onCleanup,
  useContext,
} from "solid-js";

const styleObjectCache = new Map<string, StyleObject>();

type StyleProps =
  | undefined
  | Record<string, any>
  | (Record<string, any> | undefined)[];

function normalizeStyleProps(props: StyleProps) {
  if (!props) return [];
  return (
    (Array.isArray(props) ? props : [props])
      // https://github.com/microsoft/TypeScript/issues/44408
      .flat(Infinity as 1)
      .filter((v) => !!v) as Record<string, any>[]
  );
}

function createStyle(value: () => StyleProps | undefined) {
  const context = useContext(StyledEngineContext);
  const [name, setName] = createSignal("");
  let styleElement: HTMLStyleElement | undefined;

  createRenderEffect<
    { className?: string; styleElement?: HTMLStyleElement } | undefined
  >((prevResult) => {
    const propsValue = value();
    let styleObject: StyleObject | undefined;

    if (propsValue) {
      styleObject = createStyleObject({
        name: "css",
        props: mergeStyleProps(normalizeStyleProps(propsValue)),
        cache: styleObjectCache,
      });

      styleElement = findStyleElement(styleObject.id);

      if (styleElement) {
        registerStyleElementUsage(styleElement);
      } else {
        styleElement = appendStyleElement(styleObject.rules, {
          id: styleObject.id,
          nonce: context.cache?.nonce,
        });
      }
    }

    if (prevResult?.styleElement) {
      unregisterStyleElementUsage(prevResult.styleElement);
    }

    if (typeof styleObject?.className === "string") {
      setName(styleObject.className);
    } else {
      setName("");
    }

    return {
      className: styleObject?.className,
      styleElement,
    };
  }, undefined);

  onCleanup(() => {
    if (styleElement) unregisterStyleElementUsage(styleElement);
  });

  return name;
}

export default createStyle;
