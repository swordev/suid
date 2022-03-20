import Container from "@suid/material/Container";
import { snakeCase, uncapitalize } from "@suid/utils/string";
import { Route, Routes } from "solid-app-router";
import { lazy } from "solid-js";

export const Pages = Object.assign(
  import.meta.glob(`./pages/**/*Page/index.{ts,tsx}`),
  import.meta.glob(`./pages/**/*Page.{ts,tsx}`)
);

export const PageComponents = Object.keys(Pages).reduce((result, localPath) => {
  const path = toPath(localPath);
  const Component = lazy(Pages[localPath] as any);
  result[path] = Component;
  return result;
}, {} as Record<string, ReturnType<typeof lazy>>);

export function toPath(localPath: string) {
  const parts = localPath.slice(2).split("/").slice(1);
  let basename = parts[parts.length - 1];
  if (/^index\.tsx?$/.test(basename)) {
    parts.pop();
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  basename = parts.pop()!.replace(/(\.tsx?)?$/, "");
  const parentBaseName = parts[parts.length - 1];
  if (basename === parentBaseName) {
    parts.pop();
  }
  basename = uncapitalize(basename.replace(/Page$/, ""));
  return `/${[...parts, basename].map(snakeCase).join("/")}`;
}

export function Routing() {
  const Children = Object.entries(PageComponents).map(([path, Component]) => {
    return (
      <Route
        path={path === "/home" ? "/" : path}
        element={
          <Container maxWidth="lg" sx={{ flexGrow: 1, p: 3 }}>
            <Component />
          </Container>
        }
      />
    );
  });
  return <Routes>{Children}</Routes>;
}
