import { CardMediaTypeMap } from ".";
import styled from "../styles/styled";
import { getCardMediaUtilityClass } from "./cardMediaClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import { createMemo, mergeProps } from "solid-js";

type OwnerState = InPropsOf<CardMediaTypeMap> & {
  isMediaComponent: boolean;
  isImageComponent: boolean;
};

const $ = createComponentFactory<CardMediaTypeMap, OwnerState>()({
  name: "MuiCardMedia",
  selfPropNames: ["children", "classes", "image", "src"],
  utilityClass: getCardMediaUtilityClass,
  propDefaults: ({ set }) =>
    set({
      component: "div",
    }),
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.isMediaComponent && "media",
      ownerState.isImageComponent && "img",
    ],
  }),
});

const CardMediaRoot = styled("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    const { isMediaComponent, isImageComponent } = ownerState;

    return [
      styles.root,
      isMediaComponent && styles.media,
      isImageComponent && styles.img,
    ];
  },
})<OwnerState>(({ ownerState }) => ({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  ...(ownerState.isMediaComponent && {
    width: "100%",
  }),
  ...(ownerState.isImageComponent && {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover",
  }),
}));

const MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
const IMAGE_COMPONENTS = ["picture", "img"];

/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 *
 * API:
 *
 * - [CardMedia API](https://mui.com/api/card-media/)
 */
const CardMedia = $.component(function CardMedia({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const isMediaComponent = createMemo(
    () => MEDIA_COMPONENTS.indexOf(otherProps.component as any) !== -1
  );

  const sx = createMemo(() =>
    !isMediaComponent() && props.image
      ? {
          backgroundImage: `url("${props.image}")`,
        }
      : {}
  );

  const ownerState = mergeProps(allProps, {
    get isMediaComponent() {
      return isMediaComponent();
    },
    get isImageComponent() {
      return IMAGE_COMPONENTS.indexOf(otherProps.component as any) !== -1;
    },
  });

  return (
    <CardMediaRoot
      role={!isMediaComponent() && props.image ? "img" : undefined}
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      style={[sx(), otherProps.sx]}
      ownerState={ownerState}
      src={isMediaComponent() ? props.image || props.src : undefined}
    >
      {props.children}
    </CardMediaRoot>
  );
});

export default CardMedia;
