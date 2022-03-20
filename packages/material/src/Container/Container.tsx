import { ContainerTypeMap } from ".";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import { getContainerUtilityClass } from "./containerClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { Breakpoint } from "@suid/system/createTheme/createBreakpoints";
import clsx from "clsx";

const $ = createComponentFactory<ContainerTypeMap>()({
  name: "MuiContainer",
  selfPropNames: ["children", "classes", "disableGutters", "fixed", "maxWidth"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      disableGutters: false,
      fixed: false,
      maxWidth: "lg",
    }),
  utilityClass: getContainerUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.maxWidth &&
        `maxWidth${capitalize(String(ownerState.maxWidth))}`,
      ownerState.fixed && "fixed",
      ownerState.disableGutters && "disableGutters",
    ],
  }),
});

const ContainerRoot = styled("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`],
      ownerState.fixed && styles.fixed,
      ownerState.disableGutters && styles.disableGutters,
    ];
  },
})(
  ({ theme, ownerState }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block", // Fix IE11 layout when used with main.
    ...(!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    }),
  }),
  ({ theme, ownerState }) =>
    ownerState.fixed &&
    (Object.keys(theme.breakpoints.values) as Breakpoint[]).reduce(
      (acc, breakpoint) => {
        const value = theme.breakpoints.values[breakpoint];
        if (value !== 0) {
          acc[theme.breakpoints.up(breakpoint) as string] = {
            maxWidth: `${value}${theme.breakpoints.unit}`,
          };
        }
        return acc;
      },
      {} as Record<string, any>
    ),
  ({ theme, ownerState }) => ({
    ...(ownerState.maxWidth === "xs" && {
      [theme.breakpoints.up("xs")]: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      },
    }),
    ...(ownerState.maxWidth &&
      ownerState.maxWidth !== "xs" && {
        [theme.breakpoints.up(ownerState.maxWidth)]: {
          maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${
            theme.breakpoints.unit
          }`,
        },
      }),
  })
);
/**
 *
 * Demos:
 *
 * - [Container](https://mui.com/components/container/)
 *
 * API:
 *
 * - [Container API](https://mui.com/api/container/)
 */
const Container = $.component(function Container({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <ContainerRoot
      {...otherProps}
      as={otherProps.component}
      ownerState={allProps}
      className={clsx(classes.root, otherProps.className)}
    >
      {props.children}
    </ContainerRoot>
  );
});

export default Container;
