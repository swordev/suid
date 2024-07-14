import type { ComponentsTypes } from "./components-types";
import { type Theme } from "./createTheme";
import { default as useTheme } from "./useTheme";
import createStyled, { skipProps } from "@suid/system/createStyled";

export const skipRootProps = [...skipProps, "classes"];

export default createStyled<Theme, ComponentsTypes>({
  onUseTheme: () => useTheme(),
});
