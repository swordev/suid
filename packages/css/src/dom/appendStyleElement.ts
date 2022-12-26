import createStyleElement from "./createStyleElement";
import registerStyleElementUsage from "./registerStyleElementUsage";
import setStyleElementText from "./setStyleElementText";

const placeholderId = "suid-injectFirst";

function appendStyleElement(
  css: string | string[],
  attributes?: Record<string, any>,
  injectFirst?: boolean
) {
  if (Array.isArray(css)) css = css.join("\n");
  const id: string | undefined = attributes?.["id"];
  const head = document.head || document.getElementsByTagName("head")[0];
  const prevElement = id && document.getElementById(id);
  if (prevElement && prevElement instanceof HTMLStyleElement) {
    setStyleElementText(prevElement, css);
    registerStyleElementUsage(prevElement);
    return prevElement;
  } else {
    if (prevElement) prevElement.remove();
    const element = createStyleElement(css, attributes);
    registerStyleElementUsage(element);
    if (injectFirst) {
      let placeholderElement = head.querySelector(`#${placeholderId}`);
      if (!placeholderElement) {
        placeholderElement = document.createElement("style");
        placeholderElement.setAttribute("id", placeholderId);
        head.prepend(placeholderElement);
      }
      head.insertBefore(element, placeholderElement);
    } else {
      head.appendChild(element);
    }
    return element;
  }
}

export default appendStyleElement;
