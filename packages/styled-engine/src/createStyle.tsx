import StyledEngineContext from "./StyledEngineProvider/StyledEngineContext";
import mergeStyleProps from "./mergeStyleProps";
import createStyleObject, {
  StyleObject,
  StyleCache,
} from "@suid/css/createStyleObject";
import appendStyleElement from "@suid/css/dom/appendStyleElement";
import findStyleElement from "@suid/css/dom/findStyleElement";
import registerStyleElementUsage from "@suid/css/dom/registerStyleElementUsage";
import unregisterStyleElementUsage from "@suid/css/dom/unregisterStyleElementUsage";
import { randomString } from "@suid/utils";
import {
  createRenderEffect,
  createSignal,
  createUniqueId,
  onCleanup,
  sharedConfig,
  useContext,
} from "solid-js";
import { isServer, useAssets } from "solid-js/web";

const styleCache = isServer ? undefined : new StyleCache();

type StyleProps =
  | undefined
  | Record<string, any>
  | (Record<string, any> | undefined)[];

function normalizeStyleProps(props: StyleProps): Record<string, any>[] {
  if (!props) {
    return [];
  } else if (Array.isArray(props)) {
    return props.flat(Infinity as 1).filter((v) => !!v);
  } else {
    return [props];
  }
}

function createStyleId() {
  if (!sharedConfig.context) return randomString();
  const id = createUniqueId().replaceAll("-", "");
  const chunkSize = 9;
  const chunks = Math.ceil(id.length / chunkSize);
  const ids = [];
  for (let chunk = 1; chunk <= chunks; ++chunk) {
    const index = (chunk - 1) * chunkSize;
    const number = Number(id.slice(index, index + chunkSize));
    ids.push(number.toString(32));
  }
  return ids.join("-");
}

function createStyle(value: () => StyleProps | undefined) {
  const context = useContext(StyledEngineContext);
  const [name, setName] = createSignal("");
  const componentId = createStyleId();
  let styleElement: HTMLStyleElement | undefined;
  let isGlobalStyleObject = false;

  createRenderEffect<
    { className?: string; styleElement?: HTMLStyleElement } | undefined
  >((prevResult) => {
    const propsValue = value();
    let styleObject: StyleObject | undefined;

    if (propsValue) {
      const props = mergeStyleProps(normalizeStyleProps(propsValue));
      isGlobalStyleObject = "@global" in props;
      styleObject = createStyleObject({
        name: "css",
        props,
        cache: styleCache,
        componentId,
      });

      if (isServer) {
        if (process.env.NODE_ENV !== "production") {
          if (context.injectFirst)
            console.warn(`SUID: 'injectFirst' is not supported in SSR mode.`);
        }
        useAssets(() => (
          <style
            id={styleObject!.id}
            innerHTML={styleObject!.rules}
            nonce={context.cache?.nonce}
          />
        ));
      } else {
        styleElement = findStyleElement(styleObject.id);

        if (styleElement) {
          registerStyleElementUsage(styleElement);
        } else {
          styleElement = appendStyleElement(
            styleObject.rules,
            {
              id: styleObject.id,
              nonce: context.cache?.nonce,
            },
            context.injectFirst
          );
        }

        if (prevResult?.styleElement) {
          unregisterStyleElementUsage(prevResult.styleElement);
        }
      }
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
    if (styleElement)
      unregisterStyleElementUsage(
        styleElement,
        context.cleanupStyles ?? isGlobalStyleObject
      );
  });

  return name;
}

export default createStyle;
