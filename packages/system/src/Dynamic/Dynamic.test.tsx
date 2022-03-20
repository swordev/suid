import Dynamic from ".";
import { screen, render } from "solid-testing-library";

describe("Dynamic", () => {
  it("renders custom component", () => {
    render(() => <Dynamic component="ul" data-testid="main" />);
    expect(screen.getByTestId("main").nodeName).toBe("UL");
  });
});

export {};
