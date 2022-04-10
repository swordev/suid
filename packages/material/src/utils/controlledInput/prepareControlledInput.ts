import applyInputTransform from "./applyInputTransform";

function prepareControlledInput(options: {
  element: HTMLInputElement | HTMLTextAreaElement;
  onChange: (event: InputEvent, value: string, start: number) => void;
}) {
  (options.element as HTMLInputElement).addEventListener(
    "beforeinput",
    (event) => {
      const input = event.currentTarget as HTMLInputElement;
      if (event.inputType === "insertLineBreak") return;
      if (typeof input.selectionStart !== "number")
        throw new Error(`'selectionStart' can not be null`);
      if (typeof input.selectionEnd !== "number")
        throw new Error(`'selectionEnd' can not be null`);
      const [value, start] = applyInputTransform(
        input.value,
        event.inputType,
        event.data || "",
        input.selectionStart,
        input.selectionEnd
      );
      options.onChange(event, value, start);
      event.preventDefault();
    }
  );
}
export default prepareControlledInput;
