// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import { GridProps, GridTypeMap } from ".";
import { Theme } from "..";
import styled from "../styles/styled";
import GridContext from "./GridContext";
import gridClasses, { getGridUtilityClass } from "./gridClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import {
  //unstable_extendSxProp as extendSxProp,
  handleBreakpoints,
  resolveBreakpointValues,
} from "@suid/system";
import StyledProps from "@suid/system/styledProps";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { JSXElement, useContext } from "solid-js";

const $ = createComponentFactory<GridTypeMap>()({
  name: "MuiGrid",
  selfPropNames: [
    "children",
    "classes",
    "columnSpacing",
    "columns",
    "container",
    "direction",
    "item",
    "lg",
    "md",
    "rowSpacing",
    "sm",
    "spacing",
    "wrap",
    "xl",
    "xs",
    "zeroMinWidth",
  ],
  propDefaults: ({ set, inProps }) =>
    set({
      columns: 12,
      component: "div",
      container: false,
      direction: "row",
      item: false,
      lg: false,
      md: false,
      sm: false,
      spacing: 0,
      wrap: "wrap",
      xl: false,
      xs: false,
      zeroMinWidth: false,
      get rowSpacing() {
        return inProps.rowSpacing ?? inProps.spacing ?? 0;
      },
      get columnSpacing() {
        return inProps.columnSpacing ?? inProps.spacing ?? 0;
      },
    }),
  utilityClass: getGridUtilityClass,
  slotClasses: (o) => ({
    root: [
      "root",
      o.container && "container",
      o.item && "item",
      o.zeroMinWidth && "zeroMinWidth",
      ...resolveSpacingClasses(o.spacing, o.container),
      o.direction !== "row" && `direction-xs-${String(o.direction)}`,
      o.wrap !== "wrap" && `wrap-xs-${String(o.wrap)}`,
      o.xs !== false && `grid-xs-${String(o.xs)}`,
      o.sm !== false && `grid-sm-${String(o.sm)}`,
      o.md !== false && `grid-md-${String(o.md)}`,
      o.lg !== false && `grid-lg-${String(o.lg)}`,
      o.xl !== false && `grid-xl-${String(o.xl)}`,
    ],
  }),
});

function getOffset(val: string) {
  const parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), "") || "px"}`;
}

export function generateGrid(input: {
  theme: Theme;
  ownerState: InPropsOf<GridTypeMap>;
}) {
  const { theme, ownerState } = input;
  let size: number | boolean | "auto";

  return theme.breakpoints.keys.reduce<StyledProps>(
    (globalStyles, breakpoint) => {
      // Use side effect over immutability for better performance.
      let styles = {};
      if (ownerState[breakpoint]) {
        size = ownerState[breakpoint];
      }
      if (!size) {
        return globalStyles;
      }

      if (size === true) {
        // For the auto layouting
        styles = {
          flexBasis: 0,
          flexGrow: 1,
          maxWidth: "100%",
        };
      } else if (size === "auto") {
        styles = {
          flexBasis: "auto",
          flexGrow: 0,
          flexShrink: 0,
          maxWidth: "none",
          width: "auto",
        };
      } else {
        const columnsBreakpointValues = resolveBreakpointValues({
          values: ownerState.columns,
          breakpoints: theme.breakpoints.values,
        });

        const columnValue =
          typeof columnsBreakpointValues === "object"
            ? columnsBreakpointValues[breakpoint]
            : columnsBreakpointValues;
        if (columnValue === undefined || columnValue === null) {
          return globalStyles;
        }
        // Keep 7 significant numbers.
        const width = `${Math.round((size / columnValue) * 10e7) / 10e5}%`;
        let more = {};

        if (
          ownerState.container &&
          ownerState.item &&
          ownerState.columnSpacing !== 0
        ) {
          const themeSpacing = theme.spacing(
            ownerState.columnSpacing as number
          );
          if (themeSpacing !== "0px") {
            const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
            more = {
              flexBasis: fullWidth,
              maxWidth: fullWidth,
            };
          }
        }

        // Close to the bootstrap implementation:
        // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
        styles = {
          flexBasis: width,
          flexGrow: 0,
          maxWidth: width,
          ...more,
        };
      }

      // No need for a media query for the first size.
      if (theme.breakpoints.values[breakpoint] === 0) {
        Object.assign(globalStyles, styles);
      } else {
        globalStyles = {
          ...globalStyles,
          ...{
            [theme.breakpoints.up(breakpoint)]: styles,
          },
        };
      }
      return globalStyles;
    },
    {}
  );
}

export function generateDirection(input: {
  theme: Theme;
  ownerState: InPropsOf<GridTypeMap>;
}) {
  const { theme, ownerState } = input;
  const directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values,
  });

  return handleBreakpoints({ theme }, directionValues, (propValue) => {
    let output: StyledProps = {
      flexDirection: propValue,
    };

    if (propValue.indexOf("column") === 0) {
      output = {
        ...output,
        ...{
          [`& > .${gridClasses.item}`]: { maxWidth: "none" },
        },
      };
    }

    return output;
  });
}

export function generateRowGap(input: {
  theme: Theme;
  ownerState: InPropsOf<GridTypeMap>;
}) {
  const { theme, ownerState } = input;
  const { container, rowSpacing } = ownerState;
  let styles = {};

  if (container && rowSpacing !== 0) {
    const rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values,
    });

    styles = handleBreakpoints({ theme }, rowSpacingValues, (propValue) => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== "0px") {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingTop: getOffset(themeSpacing),
          },
        } as StyledProps;
      }

      return {};
    });
  }

  return styles;
}

export function generateColumnGap(input: {
  theme: Theme;
  ownerState: InPropsOf<GridTypeMap>;
}) {
  const { theme, ownerState } = input;
  const { container, columnSpacing } = ownerState;
  let styles = {};

  if (container && columnSpacing !== 0) {
    const columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values,
    });

    styles = handleBreakpoints({ theme }, columnSpacingValues, (propValue) => {
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingLeft: getOffset(themeSpacing),
          },
        } as StyledProps;
      }

      return {};
    });
  }

  return styles;
}

export function resolveSpacingClasses(
  spacing: GridProps["spacing"],
  container: GridProps["container"],
  styles: Record<string, any> = {}
) {
  // in case of grid item or undefined/null or `spacing` <= 0
  if (!container || !spacing || spacing <= 0) {
    return [];
  }
  // in case of string/number `spacing`
  if (
    (typeof spacing === "string" && !Number.isNaN(Number(spacing))) ||
    typeof spacing === "number"
  ) {
    return [
      styles[`spacing-xs-${String(spacing)}`] ||
        `spacing-xs-${String(spacing)}`,
    ];
  } else if (typeof spacing === "string" || Array.isArray(spacing)) {
    return [];
  }
  // in case of object `spacing`
  const xs = spacing.xs;
  const sm = spacing.sm;
  const md = spacing.md;
  const lg = spacing.lg;
  const xl = spacing.xl;

  return [
    Number(xs) > 0 &&
      (styles[`spacing-xs-${String(xs)}`] || `spacing-xs-${String(xs)}`),
    Number(sm) > 0 &&
      (styles[`spacing-sm-${String(sm)}`] || `spacing-sm-${String(sm)}`),
    Number(md) > 0 &&
      (styles[`spacing-md-${String(md)}`] || `spacing-md-${String(md)}`),
    Number(lg) > 0 &&
      (styles[`spacing-lg-${String(lg)}`] || `spacing-lg-${String(lg)}`),
    Number(xl) > 0 &&
      (styles[`spacing-xl-${String(xl)}`] || `spacing-xl-${String(xl)}`),
  ];
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',

const GridRoot = styled("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth,
    } = props.ownerState;

    return [
      styles.root,
      container && styles.container,
      item && styles.item,
      zeroMinWidth && styles.zeroMinWidth,
      ...resolveSpacingClasses(spacing, container, styles),
      direction !== "row" && styles[`direction-xs-${String(direction)}`],
      wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`],
      xs !== false && styles[`grid-xs-${String(xs)}`],
      sm !== false && styles[`grid-sm-${String(sm)}`],
      md !== false && styles[`grid-md-${String(md)}`],
      lg !== false && styles[`grid-lg-${String(lg)}`],
      xl !== false && styles[`grid-xl-${String(xl)}`],
    ];
  },
})<InPropsOf<GridTypeMap>>(
  ({ ownerState }) => ({
    boxSizing: "border-box",
    ...(ownerState.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    }),
    ...(ownerState.item && {
      margin: 0, // For instance, it's useful when used with a `figure` element.
    }),
    ...(ownerState.zeroMinWidth && {
      minWidth: 0,
    }),
    ...(ownerState.wrap !== "wrap" && {
      flexWrap: ownerState.wrap,
    }),
  }),
  generateDirection,
  generateRowGap,
  generateColumnGap,
  generateGrid
);

/**
 *
 * Demos:
 *
 * - [Grid](https://mui.com/components/grid/)
 *
 * API:
 *
 * - [Grid API](https://mui.com/api/grid/)
 */
const Grid = $.component(function Grid({
  allProps,
  props,
  otherProps,
  classes,
}) {
  const columnsContext = useContext(GridContext);

  // setting prop before context to accomodate nesting
  // colums set with default breakpoint unit of 12
  const columns = props.columns || columnsContext || 12;

  const wrapChild = (element: JSXElement) =>
    columns !== 12 ? (
      <GridContext.Provider value={columns}>{element}</GridContext.Provider>
    ) : (
      element
    );

  return wrapChild(
    <GridRoot
      ownerState={allProps}
      className={clsx(classes.root, otherProps.className)}
      {...otherProps}
    >
      {props.children}
    </GridRoot>
  );
});

export default Grid;
