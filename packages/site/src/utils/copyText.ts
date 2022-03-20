export default function copyText(text: string) {
  let element!: HTMLTextAreaElement;
  try {
    element = document.createElement("textarea");
    element.value = text;
    element.style.top = "0";
    element.style.left = "0";
    element.style.position = "fixed";
    document.body.appendChild(element);
    element.focus();
    element.select();
    return document.execCommand("copy");
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    element.remove();
  }
}
