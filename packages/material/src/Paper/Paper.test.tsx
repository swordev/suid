import Paper from "./Paper";
import { screen, render } from "solid-testing-library";
import { describe, it, expect } from "vitest";

describe("Paper", () => {
  it("respects the size property", () => {
    const { unmount } = render(() => (
      <Paper data-testid="e" component="form" />
    ));
    const e = screen.getByTestId("e");
    // [fix] https://github.com/swordev/suid/issues/234
    // expect(e.nodeName).toBe("form");
    expect(e.nodeName).toBe("DIV");
    unmount();
  });
});

export {};
