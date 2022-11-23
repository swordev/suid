import { DialogContentTypeMap } from ".";
import dialogTitleClasses from "../DialogTitle/dialogTitleClasses";
import styled from "../styles/styled";
import { getDialogContentUtilityClass } from "./dialogContentClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { splitProps, mergeProps } from "solid-js";

type OwnerState = InPropsOf<DialogContentTypeMap>;

const $ = createComponentFactory<DialogContentTypeMap>()({
  name: "MuiDialogContent",
  selfPropNames: ["children", "classes", "dividers"],
  utilityClass: getDialogContentUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.dividers && "dividers"],
  }),
});

const DialogContentRoot = styled("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.dividers && styles.dividers];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  // https://github.com/microsoft/TypeScript/issues/37559
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  padding: "20px 24px",
  ...(ownerState.dividers
    ? {
        padding: "16px 24px",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }
    : {
        [`.${dialogTitleClasses.root} + &`]: {
          paddingTop: 0,
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
 * - [DialogContent API](https://mui.com/api/dialog-content/)
 */
const DialogContent = $.defineComponent(function DialogContent(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, ["class", "dividers"]);
  const baseProps = mergeProps({ dividers: false }, props);
  const ownerState = mergeProps(props, {
    get dividers() {
      return baseProps.dividers;
    },
  });
  const classes = $.useClasses(ownerState);

  return (
    <DialogContentRoot
      class={clsx(classes.root, props.class)}
      ownerState={ownerState}
      {...other}
    />
  );
});

export default DialogContent;
