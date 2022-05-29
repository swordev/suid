import { GlobalStylesTypeMap } from "./GlobalStylesProps";
import createComponentFactory from "@suid/base/createComponentFactory";
import createStyle from "@suid/system/createStyle";

const $ = createComponentFactory<GlobalStylesTypeMap>()({
  name: "MuiGlobalStyles",
  selfPropNames: ["styles"],
});

/**
 *
 * Demos:
 *
 * - [How To Customize](https://mui.com/customization/how-to-customize/)
 *
 * API:
 *
 * - [GlobalStyles API](https://mui.com/api/global-styles/)
 */
const GlobalStyles = $.component(function GlobalStyles({ props }) {
  createStyle(() => ({
    "@global": props.styles || {},
  }));
  return <></>;
});

export default GlobalStyles;
