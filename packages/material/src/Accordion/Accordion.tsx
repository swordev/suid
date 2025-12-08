import Collapse from "../Collapse";
import Paper from "../Paper";
import styled from "../styles/styled";
import AccordionContext from "./AccordionContext";
import { AccordionTypeMap } from "./AccordionProps";
import accordionClasses, { getAccordionUtilityClass } from "./accordionClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { children, createSignal } from "solid-js";

const $ = createComponentFactory<AccordionTypeMap>()({
  name: "MuiAccordion",
  selfPropNames: [
    "children",
    "classes",
    "defaultExpanded",
    "disabled",
    "disableGutters",
    "expanded",
    "onChange",
    "square",
  ],
  propDefaults: ({ set }) =>
    set({
      defaultExpanded: false,
      disabled: false,
      disableGutters: false,
      square: false,
    }),
  utilityClass: getAccordionUtilityClass,
  slotClasses: (o) => ({
    root: [
      "root",
      !o.square && "rounded",
      o.expanded && "expanded",
      o.disabled && "disabled",
      !o.disableGutters && "gutters",
    ],
    heading: ["heading"],
    region: ["region"],
  }),
});

const AccordionRoot = styled(Paper, {
  name: "MuiAccordion",
  slot: "Root",
})(({ theme }) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  };

  return {
    position: "relative",
    transition: theme.transitions.create(["margin"], transition),
    overflowAnchor: "none",
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: theme.palette.divider,
      transition: theme.transitions.create(
        ["opacity", "background-color"],
        transition
      ),
    },
    "&:first-of-type": {
      "&::before": {
        display: "none",
      },
    },
    [`&.${accordionClasses.expanded}`]: {
      "&::before": {
        opacity: 0,
      },
      "&:first-of-type": {
        marginTop: 0,
      },
      "&:last-of-type": {
        marginBottom: 0,
      },
      "& + &": {
        "&::before": {
          display: "none",
        },
      },
    },
    [`&.${accordionClasses.disabled}`]: {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  };
});

const AccordionHeading = styled("h3", {
  name: "MuiAccordion",
  slot: "Heading",
})({
  all: "unset",
});

const AccordionRegion = styled("div", {
  name: "MuiAccordion",
  slot: "Region",
})({});

/**
 *
 * Demos:
 *
 * - [Accordion](https://mui.com/components/accordion/)
 *
 * API:
 *
 * - [Accordion API](https://mui.com/api/accordion/)
 * - inherits [Paper API](https://mui.com/api/paper/)
 */
const Accordion = $.component(function Accordion({
  allProps,
  props,
  otherProps,
  classes,
}) {
  const [expandedState, setExpandedState] = createSignal(props.defaultExpanded);
  const expanded = () =>
    props.expanded !== undefined ? props.expanded : expandedState();

  const handleChange = (event: Event) => {
    const newExpanded = !expanded();
    setExpandedState(newExpanded);
    props.onChange?.(event, newExpanded);
  };

  return (
    <AccordionRoot
      {...otherProps}
      class={clsx(classes.root, allProps.class)}
      square={props.square}
    >
      <AccordionHeading class={classes.heading}>
        <AccordionContext.Provider
          value={{
            get expanded() {
              return expanded();
            },
            get disabled() {
              return props.disabled;
            },
            toggle: handleChange,
          }}
        >
          {(() => {
            const c = children(() => props.children);
            const kids = c.toArray();
            return kids[0];
          })()}
        </AccordionContext.Provider>
      </AccordionHeading>
      <Collapse in={expanded()} timeout="auto">
        <AccordionRegion
          class={classes.region}
          role="region"
          aria-labelledby={otherProps.id}
        >
          {(() => {
            const c = children(() => props.children);
            const kids = c.toArray();
            return kids.slice(1);
          })()}
        </AccordionRegion>
      </Collapse>
    </AccordionRoot>
  );
});

export default Accordion;
