export * from "./styles";
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PropTypes {
  // keeping the type structure for backwards compat
  // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
  export type Color = "inherit" | "primary" | "secondary" | "default";
}
export {};
