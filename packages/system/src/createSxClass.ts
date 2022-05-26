import mergeSxObjects from "./mergeSxObjects";
import SxProps from "./sxProps";
import StyledEngineContext from "./StyledEngineContext";
import createStyle from "@suid/css/createStyle";
import {
  appendStyle,
  findStyle,
  subscribeStyle,
  unsubscribeStyle,
} from "@suid/css/style-element";
import { createRenderEffect, createSignal, onCleanup, useContext } from "solid-js";

function createSxClass(value: () => SxProps | undefined) {
  const [name, setName] = createSignal("");
  let styleElement: HTMLStyleElement | undefined;
  createRenderEffect<
    { className?: string; styleElement?: HTMLStyleElement } | undefined
  >((prevResult) => {
    const v = value();
    let result: ReturnType<typeof createStyle> | undefined;
    if (v) {
      const styles = (Array.isArray(v) ? v : [v])
        // https://github.com/microsoft/TypeScript/issues/44408
        .flat(Infinity as 1)
        .filter((v) => !!v) as Record<string, any>[];

      const css = styles.reduce<Record<string, any>>((result, style) => {
        if ("name" in style) result[`--${style.name}`] = "";
        mergeSxObjects(result, style);
        return result;
      }, {});

      delete css.name;

      result = createStyle({
        name: "css",
        props: css,
      });

      styleElement = findStyle(result.cacheId);

      if (styleElement) {
        subscribeStyle(styleElement);
      } else {
        const { nonce } = useContext(StyledEngineContext);
        styleElement = appendStyle(result.rules, { id: result.cacheId, nonce }).element;
      }
    }

    if (prevResult?.styleElement) {
      unsubscribeStyle(prevResult.styleElement);
    }

    if (typeof result?.className === "string") {
      setName(result.className);
    } else {
      setName("");
    }

    return {
      className: result?.className,
      styleElement,
    };
  }, undefined);
  onCleanup(() => {
    if (styleElement) unsubscribeStyle(styleElement);
  });
  return name;
}

export default createSxClass;
