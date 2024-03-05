import { LoadingButtonTypeMap } from ".";
import { getLoadingButtonUtilityClass } from "./loadingButtonClasses";
import loadingButtonClasses from "./loadingButtonClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import Button from "@suid/material/Button";
import CircularProgress from "@suid/material/CircularProgress";
import { styled } from "@suid/material/styles";
import { InPropsOf } from "@suid/types";
import { capitalize } from "@suid/utils";
import clsx from "clsx";
import { JSXElement } from "solid-js";

type OwnerState = InPropsOf<LoadingButtonTypeMap>;

const $ = createComponentFactory<LoadingButtonTypeMap>()({
  name: "MuiLoadingButton",
  selfPropNames: [
    "classes",
    "loading",
    "disabled",
    "loadingIndicator",
    "loadingPosition",
  ],
  utilityClass: getLoadingButtonUtilityClass,
  propDefaults: ({ set }) => {
    return set({
      get disabled() {
        return false;
      },
      get loading() {
        return false;
      },
      loadingIndicator: () => <CircularProgress color="inherit" size={16} />,
      loadingPosition: "center",
      variant: "text",
    });
  },
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.loading && "loading"],
    startIcon: [
      ownerState.loading &&
        `startIconLoading${capitalize(ownerState.loadingPosition)}`,
    ],
    endIcon: [
      ownerState.loading &&
        `endIconLoading${capitalize(ownerState.loadingPosition)}`,
    ],
    loadingIndicator: [
      "loadingIndicator",
      ownerState.loading &&
        `loadingIndicator${capitalize(ownerState.loadingPosition)}`,
    ],
  }),
});

const LoadingButtonRoot = styled(Button, {
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [
      styles.root,
      styles.startIconLoadingStart && {
        [`& .${loadingButtonClasses.startIconLoadingStart}`]:
          styles.startIconLoadingStart,
      },
      styles.endIconLoadingEnd && {
        [`& .${loadingButtonClasses.endIconLoadingEnd}`]:
          styles.endIconLoadingEnd,
      },
    ];
  },
})<OwnerState>(({ ownerState, theme }) => ({
  [`& .${loadingButtonClasses.startIconLoadingStart}, & .${loadingButtonClasses.endIconLoadingEnd}`]:
    {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short,
      }),
      opacity: 0,
    },
  ...(ownerState.loadingPosition === "center" && {
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color"],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    [`&.${loadingButtonClasses.loading} >:not(.${loadingButtonClasses.loadingIndicator})`]:
      {
        color: "transparent",
      },
  }),
  ...(ownerState.loadingPosition === "start" &&
    ownerState.fullWidth && {
      [`& .${loadingButtonClasses.startIconLoadingStart}, & .${loadingButtonClasses.endIconLoadingEnd}`]:
        {
          transition: theme.transitions.create(["opacity"], {
            duration: theme.transitions.duration.short,
          }),
          opacity: 0,
          marginRight: -8,
        },
    }),
  ...(ownerState.loadingPosition === "end" &&
    ownerState.fullWidth && {
      [`& .${loadingButtonClasses.startIconLoadingStart}, & .${loadingButtonClasses.endIconLoadingEnd}`]:
        {
          transition: theme.transitions.create(["opacity"], {
            duration: theme.transitions.duration.short,
          }),
          opacity: 0,
          marginLeft: -8,
        },
    }),
}));

const LoadingButtonLoadingIndicator = styled("div", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.loadingIndicator,
      styles[`loadingIndicator${capitalize(ownerState.loadingPosition)}`],
    ];
  },
})<OwnerState>(({ ownerState }) => ({
  position: "absolute",
  visibility: "visible",
  display: "flex",
  ...(ownerState.loadingPosition === "start" &&
    (ownerState.variant === "outlined" ||
      ownerState.variant === "contained") && {
      left: ownerState.size === "small" ? 10 : 14,
    }),
  ...(ownerState.loadingPosition === "start" &&
    ownerState.variant === "text" && {
      left: 6,
    }),
  ...(ownerState.loadingPosition === "center" && {
    left: "50%",
    transform: "translate(-50%)",
  }),
  ...(ownerState.loadingPosition === "end" &&
    (ownerState.variant === "outlined" ||
      ownerState.variant === "contained") && {
      right: ownerState.size === "small" ? 10 : 14,
    }),
  ...(ownerState.loadingPosition === "end" &&
    ownerState.variant === "text" && {
      right: 6,
    }),
  ...(ownerState.loadingPosition === "start" &&
    ownerState.fullWidth && {
      position: "relative",
      left: -10,
    }),
  ...(ownerState.loadingPosition === "end" &&
    ownerState.fullWidth && {
      position: "relative",
      right: -10,
    }),
}));

/**
 *
 * Demos:
 *
 * - [Buttons](https://mui.com/components/buttons/)
 *
 * API:
 *
 * - [LoadingButton API](https://mui.com/api/loading-button/)
 * - inherits [Button API](https://mui.com/api/button/)
 */
const LoadingButton = $.component(function LoadingButton({
  allProps,
  otherProps,
  props,
  classes,
}) {
  // todo: wait for https://github.com/solidjs/solid/discussions/1860
  // this could improve efficiency

  const getChildren = () => <span>{allProps.children}</span>;

  return (
    <LoadingButtonRoot
      disabled={allProps.disabled || props.loading}
      {...otherProps}
      variant={allProps.variant}
      class={clsx(classes.root, otherProps.class)}
      ownerState={allProps}
    >
      {allProps.loadingPosition === "end" ? (
        <>
          {getChildren()}
          {props.loading && (
            <LoadingButtonLoadingIndicator
              class={classes.loadingIndicator}
              ownerState={allProps}
            >
              {props.loadingIndicator as JSXElement}
            </LoadingButtonLoadingIndicator>
          )}
        </>
      ) : (
        <>
          {props.loading && (
            <LoadingButtonLoadingIndicator
              class={classes.loadingIndicator}
              ownerState={allProps}
            >
              {props.loadingIndicator as JSXElement}
            </LoadingButtonLoadingIndicator>
          )}
          {getChildren()}
        </>
      )}
    </LoadingButtonRoot>
  );
});

export default LoadingButton;
