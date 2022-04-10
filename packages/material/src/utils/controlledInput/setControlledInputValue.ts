function setControlledInputValue(options: {
  element: HTMLInputElement | HTMLTextAreaElement;
  valueAndStart: [string, number | undefined];
}) {
  const [value, startIndex] = options.valueAndStart;
  const start = startIndex ?? value.length;
  options.element.value = value;
  options.element.setSelectionRange(start, start);
}

export default setControlledInputValue;
