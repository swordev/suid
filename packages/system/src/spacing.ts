import { Theme } from "./createTheme/createTheme";

function getPath(obj: Record<string, any>, path: string | null) {
  if (!path || typeof path !== "string") {
    return null;
  }

  return path
    .split(".")
    .reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}

export function createUnaryUnit(
  theme: Theme,
  themeKey: string,
  defaultValue: any,
  propName: string
): (abs: string | number) => number | string | undefined {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;

  if (typeof themeSpacing === "number") {
    return (abs: string | number) => {
      if (typeof abs === "string") {
        return abs;
      }

      if (process.env.NODE_ENV !== "production") {
        if (typeof abs !== "number") {
          console.error(
            `MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`
          );
        }
      }
      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return (abs: string | number) => {
      if (typeof abs === "string") {
        return abs;
      }

      if (process.env.NODE_ENV !== "production") {
        if (!Number.isInteger(abs)) {
          console.error(
            [
              `MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` +
                `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`,
            ].join("\n")
          );
        } else if (abs > themeSpacing.length - 1) {
          console.error(
            [
              `MUI: The value provided (${abs}) overflows.`,
              `The supported values are: ${JSON.stringify(themeSpacing)}.`,
              `${abs} > ${
                themeSpacing.length - 1
              }, you need to add the missing values.`,
            ].join("\n")
          );
        }
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }

  if (process.env.NODE_ENV !== "production") {
    console.error(
      [
        `MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`,
        "It should be a number, an array or a function.",
      ].join("\n")
    );
  }

  return () => undefined;
}

export function createUnarySpacing(theme: Theme) {
  return createUnaryUnit(theme, "spacing.resolve", 8, "spacing.resolve");
}
