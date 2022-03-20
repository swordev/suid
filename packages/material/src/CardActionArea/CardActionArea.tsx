import ButtonBase from "../ButtonBase";
import styled from "../styles/styled";
import { CardActionAreaTypeMap } from "./CardActionAreaProps";
import cardActionAreaClasses, {
  getCardActionAreaUtilityClass,
} from "./cardActionAreaClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<CardActionAreaTypeMap>()({
  name: "MuiCardActionArea",
  selfPropNames: ["classes", "focusVisibleClassName"],
  utilityClass: getCardActionAreaUtilityClass,
  slotClasses: () => ({
    root: ["root"],
    focusHighlight: ["focusHighlight"],
    focusVisible: ["focusVisible"],
  }),
});

const CardActionAreaRoot = styled(ButtonBase, {
  name: "MuiCardActionArea",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: "block",
  textAlign: "inherit",
  width: "100%",
  [`&:hover .${cardActionAreaClasses.focusHighlight}`]: {
    opacity: theme.palette.action.hoverOpacity,
    "@media (hover: none)": {
      opacity: 0,
    },
  },
  [`&.${cardActionAreaClasses.focusVisible} .${cardActionAreaClasses.focusHighlight}`]:
    {
      opacity: theme.palette.action.focusOpacity,
    },
}));

const CardActionAreaFocusHighlight = styled("span", {
  name: "MuiCardActionArea",
  slot: "FocusHighlight",
  overridesResolver: (props, styles) => styles.focusHighlight,
})(({ theme }) => ({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit",
  opacity: 0,
  backgroundColor: "currentcolor",
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.short,
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
 * - [CardActionArea API](https://mui.com/api/card-action-area/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */

const CardActionArea = $.component(function CardActionArea({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <CardActionAreaRoot
      {...otherProps}
      className={clsx(classes.root, otherProps.className)}
      focusVisibleClassName={clsx(
        props.focusVisibleClassName,
        classes.focusVisible
      )}
      ownerState={allProps}
    >
      {otherProps.children}
      <CardActionAreaFocusHighlight
        className={classes.focusHighlight}
        ownerState={allProps}
      />
    </CardActionAreaRoot>
  );
});

export default CardActionArea;
