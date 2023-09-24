import { DialogContentTextTypeMap } from ".";
import Typography from "../Typography";
import styled, { skipRootProps } from "../styles/styled";
import { getDialogContentTextUtilityClass } from "./dialogContentTextClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { InPropsOf } from "@suid/types";
import { splitProps } from "solid-js";

type OwnerState = InPropsOf<DialogContentTextTypeMap>;

const $ = createComponentFactory<DialogContentTextTypeMap>()({
  name: "MuiDialogContentText",
  selfPropNames: ["classes"],
  utilityClass: getDialogContentTextUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const DialogContentTextRoot = styled(Typography, {
  skipProps: skipRootProps.filter((v) => v !== "classes"),
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<OwnerState>({});

/**
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogContentText API](https://mui.com/api/dialog-content-text/)
 * - inherits [Typography API](https://mui.com/api/typography/)
 */
const DialogContentText = $.defineComponent(
  function DialogContentText(inProps) {
    const ref = createRef(inProps);
    const props = $.useThemeProps({ props: inProps });
    const [, ownerState] = splitProps(props, ["children"]);
    const classes = $.useClasses(ownerState);

    return (
      <DialogContentTextRoot
        variant="body1"
        color="text.secondary"
        ref={ref}
        ownerState={ownerState}
        {...props}
        component={props.component ?? "p"}
        classes={classes}
      />
    );
  }
);

export default DialogContentText;
