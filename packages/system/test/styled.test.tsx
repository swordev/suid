/* eslint-disable @typescript-eslint/ban-ts-comment */
import Box from "../src/Box";
import createTheme from "../src/createTheme";
import styled from "../src/styled";
import useTheme from "../src/useTheme";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("styled", () => {
  it("creates host component", () => {
    const Div = styled("div")();
    const { unmount } = render(() => <Div data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("DIV");
    unmount();
  });
  it("creates customized host component", () => {
    const Div = styled("div")();
    const { unmount } = render(() => <Div data-testid="e" as="span" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("SPAN");
    unmount();
  });
  it("creates styled host component", () => {
    const Div = styled("div")({ color: "red" });
    const { unmount } = render(() => <Div data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });

  it("overrides styled component", () => {
    const MyComponent1 = styled("div")({
      backgroundColor: "red",
    });
    const MyComponent2 = styled(MyComponent1)({
      color: "blue",
      marginTop: 1,
    });

    const { unmount } = render(() => <MyComponent2 data-testid="e" />);
    const e = screen.getByTestId("e");
    const styles = window.getComputedStyle(e);
    expect(styles.backgroundColor).toBe("red");
    expect(styles.color).toBe("blue");
    expect(styles.marginTop).toBe("1px");
    unmount();
  });
  it("creates styled function component", () => {
    function Component(props: any) {
      return <Box {...props} />;
    }
    const CustomComponent = styled(Component)({ color: "red" });
    const { unmount } = render(() => <CustomComponent data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });
  it("skips internal properties", () => {
    const Div = styled("div")();
    const { unmount } = render(() => (
      <Div
        data-testid="e"
        theme={useTheme()}
        sx={{}}
        ownerState={{ value: 1 }}
      />
    ));
    const e = screen.getByTestId("e");
    expect(e.getAttributeNames().sort().join(",")).toBe("class,data-testid");
    unmount();
  });
  it("uses custom theme", () => {
    const Div = styled("div")(({ theme }) => ({
      color: theme.palette.primary.main,
    }));
    const theme = createTheme({
      palette: {
        primary: {
          main: "red",
        },
      },
    });
    const { unmount } = render(() => <Div data-testid="e" theme={theme} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });
  it("passes system properties", () => {
    const Div = styled("div")();
    // @ts-ignore
    const { unmount } = render(() => <Div data-testid="e" mt={1} />);
    const e = screen.getByTestId("e");
    expect(e.getAttributeNames().sort().join(",")).toBe("class,data-testid,mt");
    unmount();
  });
  it("ignores theme values", () => {
    const Div = styled("div")({
      color: "primary.main",
    });
    const theme = createTheme({
      palette: {
        primary: {
          main: "red",
        },
      },
    });
    const { unmount } = render(() => <Div data-testid="e" theme={theme} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("");
    unmount();
  });
  it("parses theme values", () => {
    const Div = styled("div")({});
    const theme = createTheme({
      palette: {
        primary: {
          main: "red",
        },
      },
    });
    const { unmount } = render(() => (
      <Div data-testid="e" theme={theme} sx={{ color: "primary.main" }} />
    ));
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });
  it("merges styles", () => {
    const Div = styled("div")({
      marginLeft: 1,
    });
    const { unmount } = render(() => (
      <Div
        data-testid="e"
        sx={{
          marginRight: 1,
        }}
      />
    ));
    const e = screen.getByTestId("e");
    const css = window.getComputedStyle(e);
    expect(css.marginLeft).toBe("1px");
    expect(css.marginRight).toBe("8px");
    unmount();
  });
  it("uses component selectors", () => {
    const Div1 = styled("div", { name: "Div1" })({});
    const Div2 = styled("div", { name: "Div2" })({});

    const Div = styled("div")({
      [`${Div1}`]: {
        color: "red",
      },
      [`${Div2}`]: {
        color: "blue",
      },
    });
    const { unmount } = render(() => (
      <Div>
        <Div1 data-testid="div1">a</Div1>
        <Div2 data-testid="div2">b</Div2>
      </Div>
    ));

    const div1 = screen.getByTestId("div1");
    const div2 = screen.getByTestId("div2");
    const css1 = window.getComputedStyle(div1);
    const css2 = window.getComputedStyle(div2);

    expect(`${Div1}`).toBe(".Div1-root");
    expect(`${Div2}`).toBe(".Div2-root");
    expect(css1.color).toBe("red");
    expect(css2.color).toBe("blue");
    unmount();
  });
});

export {};
