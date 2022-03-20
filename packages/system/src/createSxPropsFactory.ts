import createStylePropsFactory from "./createStylePropsFactory";
import { Theme } from "./createTheme";
import getThemeValue from "./getThemeValue";
import useTheme from "./useTheme";

export function resolveThemeValue(
  theme: Theme,
  key: keyof Theme,
  value: unknown
) {
  if (typeof value !== "string") return value;
  const names = value.split(".");
  let ref = theme[key];
  for (let i = 0; i < names.length; i++) {
    ref = ref?.[names[i]];
    if (!ref) break;
  }
  return ref ?? value;
}

function createSxPropsFactory(
  options: {
    spacing?: {
      themeSpacing?: boolean;
    };
    border?: {
      themeBorderRadius?: boolean;
    };
  } = {}
) {
  return createStylePropsFactory({
    border: {
      onValue: (name, value) => {
        const theme = useTheme();
        if (name === "borderRadius") {
          if (typeof value === "number") {
            if (options.border?.themeBorderRadius) {
              return `${theme.shape.borderRadius * value}px`;
            } else {
              return `${value}px`;
            }
          }
        }
        if (name.includes("Color"))
          return resolveThemeValue(theme, "palette", value);
        if (typeof value === "number") value = `${value}px solid`;
        return value;
      },
    },
    palette: {
      onValue: (name, value) => {
        const theme = useTheme();
        return resolveThemeValue(theme, "palette", value);
      },
    },
    position: {
      onValue: (name, value) => {
        if (name === "zIndex") {
          const theme = useTheme();
          value = theme.zIndex?.[name] ?? value;
        }
        return value;
      },
    },
    sizing: {
      onValue: (name, value) => {
        if (name === "maxWidth") {
          const theme = useTheme();
          value = theme.breakpoints.values[name as "xs"] ?? value;
        }
        if (typeof value === "number" && value > 0 && value <= 1) {
          return `${value * 100}%`;
        } else {
          return value;
        }
      },
    },
    spacing: {
      onValue: (name, value) => {
        const theme = useTheme();
        return options.spacing?.themeSpacing ? theme.spacing(value) : value;
      },
    },
    typography: {
      onValue: (name, value) => {
        const theme = useTheme();
        if (name === "typography") {
          return getThemeValue(theme, "typography", value);
        } else if (typeof value === "string") {
          return resolveThemeValue(theme, "typography", value);
        }
        return value;
      },
    },
  });
}

export default createSxPropsFactory;
