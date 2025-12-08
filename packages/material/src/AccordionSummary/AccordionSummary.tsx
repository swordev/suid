import AccordionContext from "../Accordion/AccordionContext";
import ButtonBase from "../ButtonBase";
import styled from "../styles/styled";
import { AccordionSummaryTypeMap } from "./AccordionSummaryProps";
import accordionSummaryClasses, {
  getAccordionSummaryUtilityClass,
} from "./accordionSummaryClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { useContext, Show } from "solid-js";

const $ = createComponentFactory<AccordionSummaryTypeMap>()({
  name: "MuiAccordionSummary",
  selfPropNames: ["children", "classes", "expandIcon"],
  utilityClass: getAccordionSummaryUtilityClass,
  autoCallUseClasses: false,
});

const AccordionSummaryRoot = styled(ButtonBase, {
  name: "MuiAccordionSummary",
  slot: "Root",
})(({ theme }) => ({
  display: "flex",
  width: "100%",
  minHeight: 48,
  padding: "0px 16px",
  transition: theme.transitions.create(["min-height", "background-color"], {
    duration: theme.transitions.duration.shortest,
  }),
  [`&.${accordionSummaryClasses.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus,
  },
  [`&.${accordionSummaryClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
  },
  [`&:hover:not(.${accordionSummaryClasses.disabled})`]: {
    cursor: "pointer",
  },
  [`&.${accordionSummaryClasses.expanded}`]: {
    minHeight: 64,
  },
}));

const AccordionSummaryContent = styled("span", {
  name: "MuiAccordionSummary",
  slot: "Content",
})(() => ({
  display: "flex",
  textAlign: "start",
  flexGrow: 1,
  margin: "12px 0",
  [`&.${accordionSummaryClasses.expanded}`]: {
    margin: "20px 0",
  },
}));

const AccordionSummaryExpandIconWrapper = styled("span", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
})(({ theme }) => ({
  display: "flex",
  color: theme.palette.action.active,
  transform: "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  [`&.${accordionSummaryClasses.expanded}`]: {
    transform: "rotate(180deg)",
  },
}));

/**
 *
 * Demos:
 *
 * - [Accordion](https://mui.com/components/accordion/)
 *
 * API:
 *
 * - [AccordionSummary API](https://mui.com/api/accordion-summary/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const AccordionSummary = $.component(function AccordionSummary({
  allProps,
  props,
  otherProps,
}) {
  const context = useContext(AccordionContext);

  return (
    <AccordionSummaryRoot
      {...otherProps}
      focusRipple={false}
      disableRipple
      disabled={context?.disabled}
      aria-expanded={context?.expanded}
      class={clsx(
        accordionSummaryClasses.root,
        context?.expanded && accordionSummaryClasses.expanded,
        context?.disabled && accordionSummaryClasses.disabled,
        allProps.class
      )}
      onClick={(e: any) => {
        console.log("AccordionSummary clicked", {
          context,
          hasToggle: !!context?.toggle,
        });
        if (context?.toggle) {
          console.log("Calling context.toggle");
          context.toggle(e);
        }
        if (typeof otherProps.onClick === "function") {
          otherProps.onClick(e);
        }
      }}
    >
      <AccordionSummaryContent
        class={clsx(
          accordionSummaryClasses.content,
          context?.expanded && accordionSummaryClasses.expanded
        )}
      >
        {props.children}
      </AccordionSummaryContent>
      <Show when={props.expandIcon}>
        <AccordionSummaryExpandIconWrapper
          class={clsx(
            accordionSummaryClasses.expandIconWrapper,
            context?.expanded && accordionSummaryClasses.expanded
          )}
        >
          {props.expandIcon}
        </AccordionSummaryExpandIconWrapper>
      </Show>
    </AccordionSummaryRoot>
  );
});

export default AccordionSummary;
