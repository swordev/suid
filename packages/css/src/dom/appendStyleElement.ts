import createStyleElement from "./createStyleElement";
import registerStyleElementUsage from "./registerStyleElementUsage";
import setStyleElementText from "./setStyleElementText";

function appendStyleElement(
  css: string | string[],
  id?: string | false
): {
  element: HTMLStyleElement;
  id: string | false | undefined;
} {
  if (Array.isArray(css)) css = css.join("\n");
  const head = document.head || document.getElementsByTagName("head")[0];
  const prevElement = id && document.getElementById(id);
  if (prevElement && prevElement instanceof HTMLStyleElement) {
    setStyleElementText(prevElement, css);
    registerStyleElementUsage(prevElement);
    return { element: prevElement, id };
  } else {
    if (prevElement) prevElement.remove();
    const element = createStyleElement(css, id);
    registerStyleElementUsage(element);
    head.appendChild(element);
    return { element, id };
  }
}

export default appendStyleElement;
