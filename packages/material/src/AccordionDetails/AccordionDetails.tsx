import styled from "../styles/styled";
import { AccordionDetailsTypeMap } from "./AccordionDetailsProps";
import { getAccordionDetailsUtilityClass } from "./accordionDetailsClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";

const $ = createComponentFactory<AccordionDetailsTypeMap>()({
  name: "MuiAccordionDetails",
  selfPropNames: ["children", "classes"],
  utilityClass: getAccordionDetailsUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const AccordionDetailsRoot = styled("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
})(({ theme }) => ({
  padding: theme.spacing(1, 2, 2),
}));

/**
 *
 * Demos:
 *
 * - [Accordion](https://mui.com/components/accordion/)
 *
 * API:
 *
 * - [AccordionDetails API](https://mui.com/api/accordion-details/)
 */
const AccordionDetails = $.component(function AccordionDetails({
  allProps,
  props,
  otherProps,
  classes,
}) {
  return (
    <AccordionDetailsRoot
      {...otherProps}
      class={clsx(classes.root, allProps.class)}
    >
      {props.children}
    </AccordionDetailsRoot>
  );
});

export default AccordionDetails;
