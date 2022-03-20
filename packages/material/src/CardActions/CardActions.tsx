import { CardActionsTypeMap } from ".";
import styled from "../styles/styled";
import { getCardActionsUtilityClass } from "./cardActionsClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<CardActionsTypeMap>()({
  name: "MuiActions",
  selfPropNames: ["children", "classes", "disableSpacing"],
  propDefaults: ({ set }) =>
    set({
      disableSpacing: false,
    }),
  utilityClass: getCardActionsUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", !ownerState.disableSpacing && "spacing"],
  }),
});

const CardActionsRoot = styled("div", {
  name: "MuiCardActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  },
})(({ ownerState }) => ({
  display: "flex",
  alignItems: "center",
  padding: 8,
  ...(!ownerState.disableSpacing && {
    "& > :not(:first-of-type)": {
      marginLeft: 8,
    },
  }),
}));

/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 *
 * API:
 *
 * - [CardActions API](https://mui.com/api/card-actions/)
 */
const CardActions = $.component(function CardActions({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <CardActionsRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      ownerState={allProps}
    >
      {props.children}
    </CardActionsRoot>
  );
});

export default CardActions;
