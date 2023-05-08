import { BottomNavigationTypeMap } from ".";
import styled from "../styles/styled";
import BottomNavigationContext from "./BottomNavigationContext";
import { getBottomNavigationUtilityClass } from "./bottomNavigationClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import clsx from "clsx";
import {
  splitProps,
  mergeProps,
  createMemo,
  children,
  ChildrenReturn,
} from "solid-js";

const $ = createComponentFactory<BottomNavigationTypeMap>()({
  name: "MuiBottomNavigation",
  selfPropNames: ["children", "classes", "onChange", "showLabels", "value"],
  utilityClass: getBottomNavigationUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const BottomNavigationRoot = styled("div", {
  name: "MuiBottomNavigation",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: 56,
  backgroundColor: theme.palette.background.paper,
}));

/**
 *
 * Demos:
 *
 * - [Bottom Navigation](https://mui.com/components/bottom-navigation/)
 *
 * API:
 *
 * - [BottomNavigation API](https://mui.com/api/bottom-navigation/)
 */
const BottomNavigation = $.defineComponent(function BottomNavigation(inProps) {
  const ref = createRef(inProps);
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "children",
    "class",
    "component",
    "onChange",
    "showLabels",
    "value",
  ]);

  const baseProps = mergeProps(
    {
      component: "div",
      showLabels: false,
    },
    props
  );

  const ownerState = mergeProps(props, {
    get component() {
      return baseProps.component;
    },
    get showLabels() {
      return baseProps.showLabels;
    },
  });

  const classes = $.useClasses(ownerState);

  let resolvedChildren: ChildrenReturn;

  return (
    <BottomNavigationRoot
      as={baseProps.component}
      class={clsx(classes.root, props.class)}
      ref={ref}
      ownerState={ownerState}
      {...other}
    >
      <BottomNavigationContext.Provider
        value={{
          showLabels: createMemo(() => props.showLabels),
          selectedValue: createMemo(() => props.value),
          onChange: createMemo(() => props.onChange),
          getIndex: (child) => {
            return resolvedChildren.toArray().indexOf(child);
          },
        }}
      >
        {(resolvedChildren = children(() => props.children))()}
      </BottomNavigationContext.Provider>
    </BottomNavigationRoot>
  );
});

export default BottomNavigation;
