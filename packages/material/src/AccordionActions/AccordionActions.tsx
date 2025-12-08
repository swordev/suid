import styled from "../styles/styled";
import { AccordionActionsTypeMap } from "./AccordionActionsProps";
import { getAccordionActionsUtilityClass } from "./accordionActionsClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

type OwnerState = {
  disableSpacing: boolean;
};

const $ = createComponentFactory<AccordionActionsTypeMap>()({
  name: "MuiAccordionActions",
  selfPropNames: ["children", "classes", "disableSpacing"],
  propDefaults: ({ set }) =>
    set({
      disableSpacing: false,
    }),
  utilityClass: getAccordionActionsUtilityClass,
  slotClasses: (ownerState: OwnerState) => ({
    root: ["root", !ownerState.disableSpacing && "spacing"],
  }),
});

const AccordionActionsRoot = styled("div", {
  name: "MuiAccordionActions",
  slot: "Root",
})<OwnerState>(({ theme, ownerState }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  justifyContent: "flex-end",
  ...(!ownerState.disableSpacing && {
    "& > :not(style) ~ :not(style)": {
      marginLeft: theme.spacing(1),
    },
  }),
}));

/**
 *
 * Demos:
 *
 * - [Accordion](https://mui.com/components/accordion/)
 *
 * API:
 *
 * - [AccordionActions API](https://mui.com/api/accordion-actions/)
 */
const AccordionActions = $.component(function AccordionActions({
  allProps,
  props,
  otherProps,
  classes,
}) {
  const ownerState: OwnerState = {
    disableSpacing: props.disableSpacing,
  };

  return (
    <AccordionActionsRoot
      {...otherProps}
      class={clsx(classes.root, allProps.class)}
      ownerState={ownerState}
    >
      {props.children}
    </AccordionActionsRoot>
  );
});

export default AccordionActions;
