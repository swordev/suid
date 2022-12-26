import Dynamic from ".";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Dynamic", () => {
  it("renders custom component", () => {
    const { unmount } = render(() => (
      <Dynamic $component="ul" data-testid="main" />
    ));
    expect(screen.getByTestId("main").nodeName).toBe("UL");
    unmount();
  });
  it("skips internal properties", () => {
    const { unmount } = render(() => (
      <Dynamic data-testid="e" $component="ul" component="b" />
    ));
    expect(screen.getByTestId("e").getAttributeNames().join(",")).toBe(
      "data-testid,component"
    );
    unmount();
  });
});

export {};
