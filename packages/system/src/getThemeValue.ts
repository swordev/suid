import { Theme } from "./createTheme";

function getThemeValue(theme: Theme, key: keyof Theme, value: unknown) {
  if (typeof value !== "string") return value;
  const names = value.split(".");
  let ref = theme[key];
  for (let i = 0; i < names.length; i++) {
    ref = ref?.[names[i]];
    if (!ref) break;
  }
  return ref ?? value;
}

export default getThemeValue;
