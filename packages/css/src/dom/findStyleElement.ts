function findStyleElement(id: string) {
  return document.getElementById(id) as HTMLStyleElement | undefined;
}

export default findStyleElement;
