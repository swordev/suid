import Fab from ".";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Fab", () => {
  it("renders button element", () => {
    const { unmount } = render(() => <Fab data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("BUTTON");
    unmount();
  });
  it("renders link element", () => {
    const { unmount } = render(() => <Fab data-testid="e" href="/" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("A");
    unmount();
  });
});

export {};
