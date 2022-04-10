function prepareControlledInput(options: {
  element: HTMLInputElement | HTMLTextAreaElement;
  onChange: (event: Event, value: string, start: number) => void;
}) {
  const input = options.element as HTMLInputElement;
  let prevValue = "";
  let prevSelectionStart = 0;
  input.addEventListener("beforeinput", () => {
    prevValue = input.value;
    prevSelectionStart = input.selectionStart ?? prevValue.length;
  });
  input.addEventListener("input", (event) => {
    const value = input.value;
    const start = input.selectionStart ?? value.length;
    input.value = prevValue;
    input.selectionStart = input.selectionEnd = prevSelectionStart;
    options.onChange(event, value, start);
  });
}

export default prepareControlledInput;
