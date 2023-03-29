import { AlertProps, AlertTypeMap } from ".";
import IconButton from "../IconButton";
import Paper from "../Paper";
import CloseIcon from "../internal/svg-icons/Close";
import ErrorOutlineIcon from "../internal/svg-icons/ErrorOutline";
import InfoOutlinedIcon from "../internal/svg-icons/InfoOutlined";
import ReportProblemOutlinedIcon from "../internal/svg-icons/ReportProblemOutlined";
import SuccessOutlinedIcon from "../internal/svg-icons/SuccessOutlined";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import alertClasses, { getAlertUtilityClass } from "./alertClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { darken, lighten } from "@suid/system";
import clsx from "clsx";
import { Show } from "solid-js";

const $ = createComponentFactory<AlertTypeMap>()({
  name: "MuiAlert",
  selfPropNames: [
    "action",
    "classes",
    "closeText",
    "color",
    "icon",
    "iconMapping",
    "onClose",
    "role",
    "severity",
    "variant",
  ],
  utilityClass: getAlertUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `${ownerState.variant}${capitalize(
        ownerState.color || ownerState.severity
      )}`,
      `${ownerState.variant}`,
    ],
    icon: ["icon"],
    message: ["message"],
    action: ["action"],
  }),
  propDefaults: ({ set }) =>
    set({
      closeText: "Close",
      //iconMapping = defaultIconMapping,
      role: "alert",
      severity: "success",
      variant: "standard",
    }),
});

const AlertRoot = styled(Paper, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      styles[
        `${ownerState.variant}${capitalize(
          ownerState.color || ownerState.severity
        )}`
      ],
    ];
  },
})(({ theme, ownerState }) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  const color = ownerState.color || ownerState.severity;

  return {
    ...theme.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    ...(color &&
      ownerState.variant === "standard" && {
        color: getColor(theme.palette[color].light, 0.6),
        backgroundColor: getBackgroundColor(theme.palette[color].light, 0.9),
        [`& .${alertClasses.icon}`]: {
          color:
            theme.palette.mode === "dark"
              ? theme.palette[color].main
              : theme.palette[color].light,
        },
      }),
    ...(color &&
      ownerState.variant === "outlined" && {
        color: getColor(theme.palette[color].light, 0.6),
        border: `1px solid ${theme.palette[color].light}`,
        [`& .${alertClasses.icon}`]: {
          color:
            theme.palette.mode === "dark"
              ? theme.palette[color].main
              : theme.palette[color].light,
        },
      }),
    ...(color &&
      ownerState.variant === "filled" && {
        color: "#fff",
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette[color].dark
            : theme.palette[color].main,
      }),
  };
});

const AlertIcon = styled("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon,
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9,
});

const AlertMessage = styled("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles) => styles.message,
})({
  padding: "8px 0",
});

const AlertAction = styled("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action,
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8,
});

const defaultIconMapping: AlertProps["iconMapping"] = {
  success: () => <SuccessOutlinedIcon fontSize="inherit" />,
  warning: () => <ReportProblemOutlinedIcon fontSize="inherit" />,
  error: () => <ErrorOutlineIcon fontSize="inherit" />,
  info: () => <InfoOutlinedIcon fontSize="inherit" />,
};

/**
 *
 * Demos:
 *
 * - [Alert](https://mui.com/components/alert/)
 *
 * API:
 *
 * - [Alert API](https://mui.com/api/alert/)
 * - inherits [Paper API](https://mui.com/api/paper/)
 */

const Alert = $.component(function Alert({
  allProps,
  classes,
  otherProps,
  props,
}) {
  return (
    <AlertRoot
      role={props.role}
      elevation={0}
      ownerState={allProps}
      class={clsx(classes.root, otherProps.class)}
      {...otherProps}
    >
      <Show when={props.icon !== false}>
        <AlertIcon ownerState={allProps} class={classes.icon}>
          {props.icon ||
            props.iconMapping?.[props.severity]?.() ||
            defaultIconMapping[props.severity]?.()}
        </AlertIcon>
      </Show>
      <AlertMessage ownerState={allProps} class={classes.message}>
        {otherProps.children}
      </AlertMessage>
      <Show when={!!props.action}>
        <AlertAction class={classes.action}>{props.action}</AlertAction>
      </Show>
      <Show when={!props.action && props.onClose}>
        <AlertAction ownerState={allProps} class={classes.action}>
          <IconButton
            size="small"
            aria-label={props.closeText}
            title={props.closeText}
            color="inherit"
            onClick={props.onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </AlertAction>
      </Show>
    </AlertRoot>
  );
});

export default Alert;
