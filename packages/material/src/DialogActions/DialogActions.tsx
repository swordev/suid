import { DialogActionsTypeMap } from ".";
import styled from "../styles/styled";
import { getDialogActionsUtilityClass } from "./dialogActionsClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { splitProps, mergeProps } from "solid-js";

type OwnerState = InPropsOf<DialogActionsTypeMap>;

const $ = createComponentFactory<DialogActionsTypeMap>()({
  name: "MuiDialogActions",
  selfPropNames: ["children", "classes", "disableSpacing"],
  utilityClass: getDialogActionsUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", !ownerState.disableSpacing && "spacing"],
  }),
});

const DialogActionsRoot = styled("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  },
})<OwnerState>(({ ownerState }) => ({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  ...(!ownerState.disableSpacing && {
    "& > :not(:first-of-type)": {
      marginLeft: 8,
    },
  }),
}));

/**
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogActions API](https://mui.com/api/dialog-actions/)
 */
const DialogActions = $.defineComponent(function DialogActions(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, ["class", "disableSpacing"]);
  const baseProps = mergeProps({ disableSpacing: false }, props);
  const ownerState = baseProps;
  const classes = $.useClasses(ownerState);

  return (
    <DialogActionsRoot
      class={clsx(classes.root, props.class)}
      ownerState={ownerState}
      {...other}
    />
  );
});

export default DialogActions;
