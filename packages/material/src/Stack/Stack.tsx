import { StackTypeMap } from ".";
import styled from "../styles/styled";
import createComponentFactory from "@suid/base/createComponentFactory";
import {
  handleBreakpoints,
  resolveBreakpointValues,
  ThemeBreakpointBase,
} from "@suid/system";
import { Breakpoint } from "@suid/system/createTheme/createBreakpoints";
import mergeSxObjects from "@suid/system/mergeSxObjects";
import { createUnarySpacing } from "@suid/system/spacing";
import extendSxProp from "@suid/system/styleFunctionSx/extendSxProp";
import StyledProps from "@suid/system/styledProps";
import { JSXElement, Show } from "solid-js";

const $ = createComponentFactory<StackTypeMap>()({
  name: "MuiStack",
  selfPropNames: ["children", "direction", "divider", "spacing"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      direction: "column",
      spacing: 0,
    }),
});

function joinChildren(
  children: JSXElement | JSXElement[],
  separator: JSXElement
) {
  const childrenArray = (
    Array.isArray(children) ? children : [children]
  ).filter(Boolean);

  return childrenArray.reduce<JSXElement[]>((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push(separator);
    }

    return output;
  }, []);
}

const getSideFromDirection = (
  direction: StackTypeMap["selfProps"]["direction"]
) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom",
  }[direction as string];
};

const StackRoot = styled("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})(({ theme, ownerState }) => {
  let styles = {
    display: "flex",
    ...handleBreakpoints(
      { theme },
      resolveBreakpointValues({
        values: ownerState.direction,
        breakpoints: theme.breakpoints.values,
      }),
      (propValue) => ({
        flexDirection: propValue,
      })
    ),
  };

  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);

    const base = theme.breakpoints.keys.reduce((acc, breakpoint) => {
      if (
        (ownerState.spacing as any)[breakpoint] != null ||
        (ownerState.direction as any)[breakpoint] != null
      ) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {} as ThemeBreakpointBase<string>);

    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base,
    });

    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base,
    });

    const styleFromPropValue = (propValue: any, breakpoint?: Breakpoint) => {
      return {
        "& > :not(style) + :not(style)": {
          margin: 0,
          [`margin${getSideFromDirection(
            breakpoint ? directionValues[breakpoint] : ownerState.direction
          )}` as any]: transformer(propValue),
        },
      } as StyledProps;
    };
    styles = mergeSxObjects(
      styles,
      handleBreakpoints({ theme }, spacingValues, styleFromPropValue)
    );
  }

  return styles;
});

/**
 *
 * Demos:
 *
 * - [Stack](https://mui.com/components/stack/)
 *
 * API:
 *
 * - [Stack API](https://mui.com/api/stack/)
 */
const Stack = $.component(function Stack({ allProps, otherProps, props }) {
  otherProps = extendSxProp(otherProps);
  return (
    <StackRoot as={otherProps.component} ownerState={allProps} {...otherProps}>
      <Show when={!!props.divider} fallback={props.children}>
        {joinChildren(props.children, props.divider)}
      </Show>
    </StackRoot>
  );
});

export default Stack;
