import styled from "../styles/styled";
import { NotchedOutlineTypeMap } from "./NotchedOutlineProps";
import createComponentFactory from "@suid/base/createComponentFactory";
import { PropsOf } from "@suid/types";
import { mergeProps, Show } from "solid-js";

type OwnerState = PropsOf<NotchedOutlineTypeMap> & {
  withLabel: boolean;
};

const $ = createComponentFactory<NotchedOutlineTypeMap>()({
  name: "MuiNotchedOutline",
  selfPropNames: ["disabled", "error", "focused", "label", "notched"],
});

const NotchedOutlineRoot = styled("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%",
});

const NotchedOutlineLegend = styled("legend")<OwnerState>(
  ({ ownerState, theme }) => ({
    float: "unset", // Fix conflict with bootstrap
    ...(!ownerState.withLabel && {
      padding: 0,
      lineHeight: "11px", // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut,
      }),
    }),
    ...(ownerState.withLabel && {
      display: "block", // Fix conflict with normalize.css and sanitize.css
      width: "auto", // Fix conflict with bootstrap
      padding: 0,
      height: 11, // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut,
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
      },
      ...(ownerState.notched && {
        maxWidth: "100%",
        transition: theme.transitions.create("max-width", {
          duration: 100,
          easing: theme.transitions.easing.easeOut,
          delay: 50,
        }),
      }),
    }),
  })
);

/**
 * @ignore - internal component.
 */

const NotchedOutline = $.component(function NotchedOutline({
  allProps,
  otherProps,
  props,
}) {
  const withLabel = () => props.label != null && props.label !== "";
  const ownerState = mergeProps(allProps, {
    get withLabel() {
      return withLabel();
    },
  });
  return (
    <NotchedOutlineRoot
      {...otherProps}
      aria-hidden
      class={otherProps.class}
      ownerState={ownerState}
    >
      <NotchedOutlineLegend ownerState={ownerState}>
        {/* Use the nominal use case of the legend, avoid rendering artefacts. */}
        <Show
          when={withLabel()}
          fallback={
            // notranslate needed while Google Translate will not fix zero-width space issue
            <span class="notranslate">&#8203;</span>
          }
        >
          <span>{props.label}</span>
        </Show>
      </NotchedOutlineLegend>
    </NotchedOutlineRoot>
  );
});

export default NotchedOutline;
