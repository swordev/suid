import setStyleElementText from "./setStyleElementText";

function setAttributes(
  element: HTMLStyleElement,
  attributes: Record<string, any>
) {
  for (const name in attributes) {
    const value = attributes[name];
    if (value !== undefined) {
      if (value === null) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value);
      }
    }
  }
}

function createStyleElement(css: string, attributes?: Record<string, any>) {
  const element = document.createElement("style");
  element.type = "text/css";
  if (attributes) setAttributes(element, attributes);
  setStyleElementText(element, css);
  return element;
}

export default createStyleElement;
