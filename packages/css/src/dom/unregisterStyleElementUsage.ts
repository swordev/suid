function unregisterStyleElementUsage(style: HTMLStyleElement) {
  let uses = Number(style.getAttribute("data-uses"));
  uses--;
  if (uses <= 0) {
    style.remove();
  } else {
    style.setAttribute("data-uses", uses.toString());
  }
}

export default unregisterStyleElementUsage;
