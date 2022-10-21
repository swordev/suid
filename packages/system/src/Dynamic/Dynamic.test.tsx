import Dynamic from ".";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Dynamic", () => {
  it("renders custom component", () => {
    const { unmount } = render(() => (
      <Dynamic component="ul" data-testid="main" />
    ));
    expect(screen.getByTestId("main").nodeName).toBe("UL");
    unmount();
  });
});

export {};
