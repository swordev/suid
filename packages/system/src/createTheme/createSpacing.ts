export interface Spacing {
  (...values: (number | string)[]): string;
}

export type SpacingOptions = number | Spacing;

export function createSpacing(options?: SpacingOptions): Spacing {
  if (typeof options === "function") return options as Spacing;
  const resolved: Spacing = (...values) => {
    return values
      .map((v) =>
        typeof v === "number" ? `${v * ((options as number) ?? 8)}px` : v
      )
      .join(" ");
  };
  return resolved;
}

export default createSpacing;
