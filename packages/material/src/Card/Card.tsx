import Paper from "../Paper";
import styled from "../styles/styled";
import { CardTypeMap } from "./CardProps";
import { getCardUtilityClass } from "./cardClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<CardTypeMap>()({
  name: "MuiCard",
  selfPropNames: ["classes", "raised"],
  utilityClass: getCardUtilityClass,
  propDefaults: ({ set }) =>
    set({
      component: Paper,
      raised: false,
    }),
  slotClasses: () => ({
    root: ["root"],
  }),
});

const CardRoot = styled(Paper, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<void>(() => {
  return {
    overflow: "hidden",
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
 * - [Card API](https://mui.com/api/card/)
 * - inherits [Paper API](https://mui.com/api/paper/)
 */

const Card = $.component(function Card({ props, otherProps, classes }) {
  return (
    <CardRoot
      elevation={props.raised ? 8 : undefined}
      className={clsx(classes.root, otherProps.className)}
      {...otherProps}
    />
  );
});

export default Card;
