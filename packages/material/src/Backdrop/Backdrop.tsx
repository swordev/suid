import { BackdropTypeMap } from ".";
import Fade, { fadeSelfPropNames } from "../Fade";
import styled from "../styles/styled";
import BackdropUnstyled from "@suid/base/BackdropUnstyled";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import { splitProps } from "solid-js";

const $ = createComponentFactory<BackdropTypeMap>()({
  name: "MuiBackdrop",
  selfPropNames: ["classes", "open", "transitionDuration"],
  propDefaults: ({ set }) =>
    set({
      open: false,
      component: "div",
    }),
});

const BackdropRoot = styled("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.invisible && styles.invisible];
  },
})(({ ownerState }) => ({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  ...(ownerState.invisible && {
    backgroundColor: "transparent",
  }),
}));

/**
 *
 * Demos:
 *
 * - [Backdrop](https://mui.com/components/backdrop/)
 *
 * API:
 *
 * - [Backdrop API](https://mui.com/api/backdrop/)
 * - inherits [Fade API](https://mui.com/api/fade/)
 */
const Backdrop = $.component(function Backdrop({ props, otherProps }) {
  const [fadeProps, backdropProps] = splitProps(otherProps, fadeSelfPropNames);

  return (
    <Fade in={props.open} timeout={props.transitionDuration} {...fadeProps}>
      <BackdropUnstyled
        {...backdropProps}
        class={otherProps.class}
        invisible={otherProps.invisible}
        components={{
          Root: BackdropRoot,
          ...otherProps.components,
        }}
        componentsProps={{
          root: {
            ...otherProps.componentsProps?.root,
            ...((!otherProps.components?.Root ||
              !isHostComponent(otherProps.components?.Root)) &&
              {
                //ownerState: { ...baseProps.componentsProps?.root?.ownerState },
              }),
          },
        }}
        classes={props.classes}
      >
        {otherProps.children}
      </BackdropUnstyled>
    </Fade>
  );
});

export default Backdrop;
