import Box from "../src/Box";
import styled from "../src/styled";
import useTheme from "../src/useTheme";
import { screen, render } from "solid-testing-library";

describe("styled", () => {
  it("creates host component", () => {
    const Div = styled("div")();
    render(() => <Div data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("DIV");
  });
  it("creates customized host component", () => {
    const Div = styled("div")();
    render(() => <Div data-testid="e" component="span" />);
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("SPAN");
  });
  it("creates styled host component", () => {
    const Div = styled("div")({ color: "red" });
    render(() => <Div data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("red");
  });

  it("overrides styled component", () => {
    const MyComponent1 = styled("div")({
      backgroundColor: "red",
    });
    const MyComponent2 = styled(MyComponent1)({
      color: "blue",
    });

    render(() => <MyComponent2 data-testid="e" />);
    const e = screen.getByTestId("e");
    const styles = window.getComputedStyle(e);
    expect(styles.backgroundColor).toBe("red");
    expect(styles.color).toBe("blue");
  });
  it("creates styled function component", () => {
    function Component(props: any) {
      return <Box {...props} />;
    }
    const CustomComponent = styled(Component)({ color: "red" });
    render(() => <CustomComponent data-testid="e" />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).color).toBe("red");
  });
  it("skips internal properties", () => {
    const Div = styled("div")();
    render(() => (
      <Div
        data-testid="e"
        theme={useTheme()}
        sx={{}}
        ownerState={{ value: 1 }}
      />
    ));
    const e = screen.getByTestId("e");
    expect(e.getAttributeNames().join(",")).toBe("data-testid,class");
  });
  it("passes system properties", () => {
    const Div = styled("div")();
    render(() => <Div data-testid="e" mt={1} />);
    const e = screen.getByTestId("e");
    expect(e.getAttributeNames().join(",")).toBe("data-testid,mt,class");
  });
});

export {};
