function registerStyleElementUsage(style: HTMLStyleElement) {
  let uses = Number(style.getAttribute("data-uses"));
  uses++;
  style.setAttribute("data-uses", uses.toString());
}

export default registerStyleElementUsage;
