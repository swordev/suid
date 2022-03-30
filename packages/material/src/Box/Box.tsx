import { useTheme } from "..";
import { BoxTypeMap } from "./BoxProps";
import createComponentFactory from "@suid/base/createComponentFactory";
import SystemBox from "@suid/system/Box";
import clsx from "clsx";

const $ = createComponentFactory<BoxTypeMap>()({
  name: "MuiBox",
  selfPropNames: [],
  utilityClass: (slot) => `MuiBox-${slot}`,
  slotClasses: () => ({
    root: ["root"],
  }),
});

export const Box = $.component(function Box({ otherProps, classes }) {
  const theme = useTheme();
  return (
    <SystemBox
      theme={theme}
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
    />
  );
});

export default Box;
