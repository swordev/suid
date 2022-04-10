function applyInputTransform(
  text: string,
  inputType: InputEvent["inputType"],
  inputText: string,
  start: number,
  end: number
) {
  let newText: string;
  let newStart: number;

  if (start !== end) {
    newText = text.slice(0, start) + (inputText || "") + text.slice(end);
    newStart = start;
    if (inputType.startsWith("insert")) newStart++;
  } else if (inputType.startsWith("insert")) {
    newText = text.slice(0, start) + inputText + text.slice(end);
    newStart = start + inputText.length;
  } else if (inputType === "deleteContentBackward") {
    newStart = Math.max(0, start - 1);
    newText = text.slice(0, newStart) + text.slice(start);
  } else if (inputType === "deleteContentForward") {
    newText = text.slice(0, start) + text.slice(start + 1);
    newStart = start;
  } else {
    newText = text;
    newStart = start;
  }
  return [newText, newStart] as [string, number];
}

export default applyInputTransform;
