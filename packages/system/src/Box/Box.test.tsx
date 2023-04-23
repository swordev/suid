/* eslint-disable @typescript-eslint/ban-ts-comment */
import Box from ".";
import styled from "../styled";
import { JSXElement } from "solid-js";
import { screen, render } from "solid-testing-library";
import { describe, expect, it } from "vitest";

describe("Box", () => {
  it("uses mt system prop", () => {
    const { unmount } = render(() => <Box data-testid="e" mt={3} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
    unmount();
  });
  it("uses sx prop", () => {
    const { unmount } = render(() => <Box data-testid="e" sx={{ mt: 3 }} />);
    const e = screen.getByTestId("e");
    expect(window.getComputedStyle(e).marginTop).toBe("24px");
    unmount();
  });
  it("skips internal properties", () => {
    const { unmount } = render(() => (
      <Box data-testid="e" sx={{ color: "red" }} component="a" as="p" />
    ));
    const e = screen.getByTestId("e");
    expect(e.getAttributeNames().join(",")).toBe("class,data-testid");
    unmount();
  });
  it("uses host component", () => {
    const { unmount } = render(() => (
      <Box data-testid="e" sx={{ color: "red" }} component="a" href="/" />
    ));
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("A");
    expect(e.getAttribute("href")).toBe("/");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });
  it("uses function component", () => {
    function Link(props: { href: string; children?: JSXElement }) {
      return <a {...props} />;
    }
    const { unmount } = render(() => (
      <Box data-testid="e" sx={{ color: "red" }} component={Link} href="/" />
    ));
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("A");
    expect(e.getAttributeNames().join(",")).toBe("class,data-testid,href");
    expect(e.getAttribute("href")).toBe("/");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });
  it("uses styled component", () => {
    const Link = styled("a")({ color: "red" });
    const { unmount } = render(() => (
      <Box
        data-testid="ex"
        sx={{ fontWeight: 500 }}
        component={Link}
        href="/"
      />
    ));
    const e = screen.getByTestId("ex");
    expect(e.nodeName).toBe("A");
    expect(e.getAttribute("href")).toBe("/");
    expect(window.getComputedStyle(e).color).toBe("red");
    expect(window.getComputedStyle(e).fontWeight).toBe("500");
    unmount();
  });
  it("uses as property", () => {
    const { unmount } = render(() => (
      // @ts-ignore
      <Box data-testid="e" sx={{ color: "red" }} as="a" href="/" />
    ));
    const e = screen.getByTestId("e");
    expect(e.getAttributeNames().join(",")).toBe("class,data-testid,href");
    expect(e.nodeName).toBe("A");
    expect(e.getAttribute("href")).toBe("/");
    expect(window.getComputedStyle(e).color).toBe("red");
    unmount();
  });
  it("uses as and component property", () => {
    const { unmount } = render(() => (
      <Box data-testid="e" as="a" component="span" />
    ));
    const e = screen.getByTestId("e");
    expect(e.nodeName).toBe("A");
    unmount();
  });
  it("returns class selector", () => {
    expect(`${Box}`).toBe(".MuiBox-root");
  });
  it("creates typed component", () => {
    const Link = styled("a")({});

    const t = (_cb: () => any) => _cb;

    t(() => [
      Box({}),
      // @ts-expect-error
      Box({
        href: "/",
      }),
      Box({
        component: "a",
        href: "/",
      }),
      Box({
        component: Link,
        href: "/",
      }),
      Box<"a">({
        component: "a",
        href: "/",
      }),
    ]);
  });
});

export {};
