import { ExtendButtonTypeMap, ButtonClasses } from "@suid/material/Button";
import { Theme } from "@suid/material/styles";
import { SxProps } from "@suid/system";
import * as ST from "@suid/types";
import { JSXElement } from "solid-js";

export type LoadingButtonTypeMap<
  P = {},
  D extends ST.ElementType = "button"
> = {
  name: "MuiLoadingButton";
  defaultPropNames: "loading" | "loadingIndicator" | "loadingPosition";
  selfProps: {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ButtonClasses> & {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the root element if `loading={true}`. */
      loading?: string;
      /** Styles applied to the loadingIndicator element. */
      loadingIndicator?: string;
      /** Styles applied to the loadingIndicator element if `loadingPosition="center"`. */
      loadingIndicatorCenter?: string;
      /** Styles applied to the loadingIndicator element if `loadingPosition="start"`. */
      loadingIndicatorStart?: string;
      /** Styles applied to the loadingIndicator element if `loadingPosition="end"`. */
      loadingIndicatorEnd?: string;
      /** Styles applied to the endIcon element if `loading={true}` and `loadingPosition="end"`. */
      endIconLoadingEnd?: string;
      /** Styles applied to the startIcon element if `loading={true}` and `loadingPosition="start"`. */
      startIconLoadingStart?: string;
    };

    /**
     * If `true`, the loading indicator is shown.
     * @default false
     */
    loading?: boolean;

    /**
     * Element placed before the children if the button is in loading state.
     * The node should contain an element with `role="progressbar"` with an accessible name.
     * By default, we render a `CircularProgress` that is labelled by the button itself.
     * @default <CircularProgress color="inherit" size={16} />
     */
    loadingIndicator?: JSXElement;

    /**
     * The loading indicator can be positioned on the start, end, or the center of the button.
     * @default 'center'
     */
    loadingPosition?: "start" | "end" | "center";

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
} & ExtendButtonTypeMap<{
  props: P & LoadingButtonTypeMap["selfProps"];
  defaultComponent: D;
}>;

export type LoadingButtonProps<
  D extends ST.ElementType = LoadingButtonTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<LoadingButtonTypeMap<P, D>, D>;

export default LoadingButtonProps;
