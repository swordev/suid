import Paper from "./Paper";
import { screen, render } from "solid-testing-library";
import { describe, it } from "vitest";

describe("Paper", () => {
  it("respects the size property", () => {
    const { unmount } = render(() => (
      <Paper data-testid="e" component="form" />
    ));
    const e = screen.getByTestId("e");
    //expect(e.nodeName).toBe("FORM");
    unmount();
  });
});

export {};
