import { DialogTitleTypeMap } from ".";
import DialogContext from "../Dialog/DialogContext";
import Typography from "../Typography";
import styled from "../styles/styled";
import { getDialogTitleUtilityClass } from "./dialogTitleClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { useContext, splitProps } from "solid-js";

type OwnerState = InPropsOf<DialogTitleTypeMap>;

const $ = createComponentFactory<DialogTitleTypeMap>()({
  name: "MuiDialogTitle",
  selfPropNames: ["children", "classes"],
  utilityClass: getDialogTitleUtilityClass,
  slotClasses: () => ({
    root: ["root"],
  }),
});

const DialogTitleRoot = styled(Typography, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<OwnerState>({
  padding: "16px 24px",
  flex: "0 0 auto",
});

/**
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogTitle API](https://mui.com/api/dialog-title/)
 */
const DialogTitle = $.defineComponent(function DialogTitle(inProps) {
  const props = $.useThemeProps({ props: inProps });

  const [, other] = splitProps(props, ["class", "id"]);
  const ownerState = props;
  const classes = $.useClasses(ownerState);

  const context = useContext(DialogContext);
  const titleId = () => context.titleId ?? props.id;

  return (
    <DialogTitleRoot
      class={clsx(classes.root, props.class)}
      ownerState={ownerState}
      variant="h6"
      id={titleId()}
      {...other}
      component={props.component ?? "h2"}
    />
  );
});

export default DialogTitle;
