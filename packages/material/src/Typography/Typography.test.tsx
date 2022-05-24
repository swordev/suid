import { useTheme } from "../styles";
import Typography from "./Typography";
import { hexToRgb } from "@suid/system";
import { screen, render } from "solid-testing-library";

describe("Typography", () => {
  it("uses mt system prop", () => {
    render(() => <Typography data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
  });
  it("uses color system prop", () => {
    render(() => <Typography data-testid="e" color="primary" />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe(
      hexToRgb(useTheme().palette.primary.main)
    );
  });
});

export {};
