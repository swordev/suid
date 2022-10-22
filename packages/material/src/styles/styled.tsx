import { Theme, useTheme } from ".";
import type { ComponentsTypes } from "./components-types";
import createStyled, { skipProps } from "@suid/system/createStyled";

export const skipRootProps = [...skipProps, "classes"];

export default createStyled<Theme, ComponentsTypes>({
  onUseTheme: () => useTheme(),
});
