import { useTheme } from "..";
import { PopperTypeMap } from "./PopperProps";
import PopperUnstyled, { PopperUnstyledProps } from "@suid/base/PopperUnstyled";
import createComponentFactory from "@suid/base/createComponentFactory";

export type PopperProps = Omit<PopperUnstyledProps, "direction">;

const $ = createComponentFactory<PopperTypeMap>()({
  name: "MuiPopper",
  selfPropNames: [],
});

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/components/autocomplete/)
 * - [Menus](https://mui.com/components/menus/)
 * - [Popper](https://mui.com/components/popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/api/popper/)
 */
const Popper = $.component(function Popper({ otherProps }) {
  const theme = useTheme();
  return <PopperUnstyled direction={theme?.direction} {...otherProps} />;
});

export default Popper;
