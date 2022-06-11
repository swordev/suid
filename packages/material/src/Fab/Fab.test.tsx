import Fab from ".";
import { screen, render } from "solid-testing-library";

describe("Fab", () => {
  it("renders button element", () => {
    render(() => <Fab data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("BUTTON");
  });
  it("renders link element", () => {
    render(() => <Fab data-testid="e" href="/" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("A");
  });
});

export {};
