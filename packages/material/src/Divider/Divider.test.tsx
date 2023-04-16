import Divider from "./Divider";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Divider", () => {
  it("renders hr element", () => {
    const { unmount } = render(() => <Divider data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("HR");
    unmount();
  });
});

export {};
