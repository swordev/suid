function unregisterStyleElementUsage(style: HTMLStyleElement, remove = true) {
  let uses = Number(style.getAttribute("data-uses"));
  uses--;
  if (uses <= 0) {
    if (remove) {
      style.remove();
    } else {
      style.setAttribute("data-uses", "0");
    }
  } else {
    style.setAttribute("data-uses", uses.toString());
  }
}

export default unregisterStyleElementUsage;
