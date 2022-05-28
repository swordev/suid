import mergeSxObjects from "./mergeSxObjects";
import SxProps from "./sxProps";
import createStyleObject, { StyleObject } from "@suid/css/createStyleObject";
import appendStyleElement from "@suid/css/dom/appendStyleElement";
import findStyleElement from "@suid/css/dom/findStyleElement";
import registerStyleElementUsage from "@suid/css/dom/registerStyleElementUsage";
import unregisterStyleElementUsage from "@suid/css/dom/unregisterStyleElementUsage";
import { createRenderEffect, createSignal, onCleanup } from "solid-js";

export const resolvedPropKey = "__resolved";

const cache = new Map<string, StyleObject>();

function createSxClass(value: () => SxProps | undefined) {
  const [name, setName] = createSignal("");
  let styleElement: HTMLStyleElement | undefined;
  createRenderEffect<
    { className?: string; styleElement?: HTMLStyleElement } | undefined
  >((prevResult) => {
    const v = value();
    let styleObject: StyleObject | undefined;
    if (v) {
      const styles = (Array.isArray(v) ? v : [v])
        // https://github.com/microsoft/TypeScript/issues/44408
        .flat(Infinity as 1)
        .filter((v) => !!v) as Record<string, any>[];

      const css = styles.reduce<Record<string, any>>((result, style) => {
        if ("name" in style) result[`--${style.name}`] = "0";
        mergeSxObjects(result, style);
        return result;
      }, {});

      delete css.name;

      styleObject = createStyleObject({
        name: "css",
        props: css,
        cache,
      });

      styleElement = findStyleElement(styleObject.id);

      if (styleElement) {
        registerStyleElementUsage(styleElement);
      } else {
        styleElement = appendStyleElement(
          styleObject.rules,
          styleObject.id
        ).element;
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

export default createSxClass;
