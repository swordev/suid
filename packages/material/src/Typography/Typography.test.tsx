import { useTheme } from "../styles";
import Typography from "./Typography";
import { hexToRgb } from "@suid/system";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Typography", () => {
  it("uses mt system prop", () => {
    const { unmount } = render(() => <Typography data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
    unmount();
  });
  it("uses color system prop", () => {
    const { unmount } = render(() => (
      <Typography data-testid="e" color="primary" />
    ));
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe(
      hexToRgb(useTheme().palette.primary.main)
    );
    unmount();
  });
});

export {};
