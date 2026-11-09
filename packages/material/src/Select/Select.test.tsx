import Select from ".";
import MenuItem from "../MenuItem";
import { createSignal } from "solid-js";
import { fireEvent, render, screen } from "solid-testing-library";
import { describe, expect, it, vi } from "vitest";

describe("Select", () => {
  it("does not select an option after becoming disabled while open", async () => {
    const [disabled, setDisabled] = createSignal(false);
    const onChange = vi.fn();
    const { unmount } = render(() => (
      <Select
        id="fruit"
        defaultValue="Apple"
        disabled={disabled()}
        onChange={onChange}
      >
        <MenuItem value="Apple">Apple</MenuItem>
        <MenuItem value="Orange">Orange</MenuItem>
      </Select>
    ));

    const trigger = screen.getByRole("button");
    fireEvent.mouseDown(trigger, { button: 0 });
    const orange = await screen.findByText("Orange");
    setDisabled(true);
    fireEvent.click(orange);
    expect(onChange).not.toHaveBeenCalled();
    expect(document.getElementById("fruit")?.textContent).toBe("Apple");

    setDisabled(false);
    fireEvent.click(orange);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe("Orange");
    unmount();
  });
});
