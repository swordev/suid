import { Theme } from ".";
import * as ComponentTypes from "./components-types";
import getDefaultTheme from "./getDefaultTheme";
import createStyled, { skipProps } from "@suid/system/createStyled";

export const skipRootProps = [...skipProps, "classes"];

export default createStyled<Theme, typeof ComponentTypes>({
  defaultTheme: getDefaultTheme,
});
