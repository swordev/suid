function setStyleElementText(element: HTMLStyleElement, text: string) {
  if ("styleSheet" in element) {
    (element as any)["styleSheet"].cssText = text;
  } else {
    element.innerText = "";
    element.appendChild(document.createTextNode(text));
  }
}

export default setStyleElementText;
