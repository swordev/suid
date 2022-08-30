import { AlertTitleTypeMap } from ".";
import Typography from "../Typography";
import styled from "../styles/styled";
import { getAlertTitleUtilityClass } from "./alertTitleClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<AlertTitleTypeMap>()({
  name: "MuiAlertTitle",
  selfPropNames: ["children", "classes"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  utilityClass: getAlertTitleUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const AlertTitleRoot = styled(Typography, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => {
  return {
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: -2,
  };
});

/**
 *
 * Demos:
 *
 * - [Alert](https://mui.com/components/alert/)
 *
 * API:
 *
 * - [AlertTitle API](https://mui.com/api/alert-title/)
 */
const AlertTitle = $.component(function AlertTitle({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <AlertTitleRoot
      gutterBottom
      {...otherProps}
      ownerState={allProps}
      class={clsx(classes.root, otherProps.class)}
    >
      {props.children}
    </AlertTitleRoot>
  );
});

export default AlertTitle;
