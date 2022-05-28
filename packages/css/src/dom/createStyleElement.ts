import setStyleElementText from "./setStyleElementText";

function createStyleElement(css: string, id?: string | false) {
  const element = document.createElement("style");
  if (id) element.setAttribute("id", id);
  element.type = "text/css";
  setStyleElementText(element, css);
  return element;
}

export default createStyleElement;
