import { CardContentTypeMap } from ".";
import styled from "../styles/styled";
import { getCardContentUtilityClass } from "./cardContentClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<CardContentTypeMap>()({
  name: "MuiContent",
  selfPropNames: ["children", "classes"],
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  utilityClass: getCardContentUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});
const CardContentRoot = styled("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})(() => {
  return {
    padding: 16,
    "&:last-child": {
      paddingBottom: 24,
    },
  };
});

/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 *
 * API:
 *
 * - [CardContent API](https://mui.com/api/card-content/)
 */
const CardContent = $.component(function CardContent({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <CardContentRoot
      {...otherProps}
      ownerState={allProps}
      class={clsx(classes.root, otherProps.class)}
    >
      {props.children}
    </CardContentRoot>
  );
});

export default CardContent;
