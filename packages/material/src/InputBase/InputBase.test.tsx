import InputBase from "./InputBase";
import { createSignal } from "solid-js";
import { render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("InputBase", () => {
  it("sets value attribute in controlled component", () => {
    const [value, setValue] = createSignal("text");
    const { container, unmount } = render(() => <InputBase value={value()} />);
    const input = container.querySelector("input")!;
    expect(input.getAttribute("value")).toBe("text");
    setValue("text2");
    expect(input.getAttribute("value")).toBe("text2");
    unmount();
  });
  it("sets value attribute in uncontrolled component", () => {
    const { container, unmount } = render(() => (
      <InputBase defaultValue="text" />
    ));
    const input = container.querySelector("input")!;
    expect(input.getAttribute("value")).toBe("text");
    input.value = "text2";
    expect(input.getAttribute("value")).toBe("text");
    unmount();
  });
});
