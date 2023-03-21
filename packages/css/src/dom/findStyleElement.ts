function findStyleElement(
  element: Element,
  classPrefix?: string
): HTMLStyleElement | undefined;
function findStyleElement(id: string): HTMLStyleElement | undefined;
function findStyleElement(
  input: string | Element,
  classPrefix = "css-"
): HTMLStyleElement | undefined {
  if (typeof input === "string")
    return document.getElementById(input) as HTMLStyleElement | undefined;
  const className = [...input.classList].find((name) =>
    name.startsWith(classPrefix)
  );
  if (className)
    return document.getElementById(className.slice(classPrefix.length)) as
      | HTMLStyleElement
      | undefined;
}

export default findStyleElement;
