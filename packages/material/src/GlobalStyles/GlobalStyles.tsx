import { GlobalStylesTypeMap } from "./GlobalStylesProps";
import createComponentFactory from "@suid/base/createComponentFactory";
import createSxClass from "@suid/system/createSxClass";

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
  createSxClass(() => ({
    "@global": props.styles || {},
  }));
  return <></>;
});

export default GlobalStyles;
