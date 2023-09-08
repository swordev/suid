import { getSSRElementAttr, setSSRElementAttr } from "./ssr";

export type SSRElement = { t: string };

export function isSSRElement(input: unknown): input is SSRElement {
  return (
    !!input &&
    typeof input === "object" &&
    "t" in input &&
    typeof input.t === "string" &&
    /^<[a-z]/i.test(input.t.trimStart())
  );
}

export function isBrowserElement(input: unknown): input is Element {
  return globalThis.Element && input instanceof Element;
}

export function isElement(input: unknown): input is SSRElement | Element {
  return isBrowserElement(input) || isSSRElement(input);
}

export function getElementAttr(
  input: unknown,
  name: string
): string | undefined {
  if (isBrowserElement(input)) {
    return input.getAttribute(name) ?? undefined;
  } else if (isSSRElement(input)) {
    return getSSRElementAttr(input.t, name);
  }
}

export function setElementAttr(input: unknown, name: string, value: string) {
  if (isBrowserElement(input)) {
    input.setAttribute(name, value);
  } else if (isSSRElement(input)) {
    setSSRElementAttr(input, name, value);
  }
}

export function hasElementClass(input: unknown, name: string): boolean {
  return getElementAttr(input, "class")?.split(" ").includes(name) || false;
}

export function addElementClass(input: SSRElement | Element, value: string) {
  if (isBrowserElement(input)) {
    input.classList.add(...value.split(" "));
  } else {
    setSSRElementAttr(input, "class", (prev) =>
      prev
        ? prev.split(" ").includes(value)
          ? value
          : `${prev} ${value}`
        : value
    );
  }
}

export function isSuidElement(
  input: unknown,
  component: Function & { __suid: string }
): boolean {
  return (
    typeof component.__suid === "string" &&
    hasElementClass(input, component.toString().slice(1))
  );
}
