import { Theme, useTheme } from ".";
import * as ComponentTypes from "./components-types";
import createStyled, { skipProps } from "@suid/system/createStyled";

export const skipRootProps = [...skipProps, "classes"];

export default createStyled<Theme, typeof ComponentTypes>({
  onUseTheme: () => useTheme(),
});
