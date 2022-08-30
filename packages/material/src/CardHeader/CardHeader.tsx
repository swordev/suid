import Typography from "../Typography";
import styled from "../styles/styled";
import { CardHeaderTypeMap } from "./CardHeaderProps";
import cardHeaderClasses, {
  getCardHeaderUtilityClass,
} from "./cardHeaderClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import clsx from "clsx";
import { children, createMemo, Show } from "solid-js";

const $ = createComponentFactory<CardHeaderTypeMap>()({
  name: "MuiCardHeader",
  selfPropNames: [
    "action",
    "avatar",
    "classes",
    "disableTypography",
    "subheader",
    "subheaderTypographyProps",
    "title",
    "titleTypographyProps",
  ],
  propDefaults: ({ set }) =>
    set({
      component: "div",
      disableTypography: false,
    }),
  utilityClass: getCardHeaderUtilityClass,
  slotClasses: () => ({
    root: ["root"],
    avatar: ["avatar"],
    action: ["action"],
    content: ["content"],
    title: ["title"],
    subheader: ["subheader"],
  }),
});

const CardHeaderRoot = styled("div", {
  name: "MuiCardHeader",
  slot: "Root",
  overridesResolver: (props, styles) => ({
    [`& .${cardHeaderClasses.title}`]: styles.title,
    [`& .${cardHeaderClasses.subheader}`]: styles.subheader,
    ...styles.root,
  }),
})({
  display: "flex",
  alignItems: "center",
  padding: 16,
});

const CardHeaderAvatar = styled("div", {
  name: "MuiCardHeader",
  slot: "Avatar",
  overridesResolver: (props, styles) => styles.avatar,
})({
  display: "flex",
  flex: "0 0 auto",
  marginRight: 16,
});

const CardHeaderAction = styled("div", {
  name: "MuiCardHeader",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action,
})({
  flex: "0 0 auto",
  alignSelf: "flex-start",
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4,
});

const CardHeaderContent = styled("div", {
  name: "MuiCardHeader",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content,
})({
  flex: "1 1 auto",
});

/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 *
 * API:
 *
 * - [CardHeader API](https://mui.com/api/card-header/)
 */
const CardHeader = $.component(function CardHeader({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const isTypography = (v: unknown) =>
    v instanceof HTMLElement && v.classList.contains(Typography.toString());
  const Title = createMemo(() => {
    const title = children(() => props.title)();
    if (title !== undefined && !isTypography(title) && !props.disableTypography)
      return (
        <Typography
          variant={props.avatar ? "body2" : "h5"}
          class={classes.title}
          component="span"
          sx={{ display: "block" }}
          {...(props.titleTypographyProps ?? {})}
        >
          {title}
        </Typography>
      );
    return title;
  });

  const Subheader = createMemo(() => {
    const subheader = children(() => props.subheader)();
    if (
      subheader !== undefined &&
      !isTypography(subheader) &&
      !props.disableTypography
    )
      return (
        <Typography
          variant={props.avatar ? "body2" : "body1"}
          class={classes.subheader}
          component="span"
          sx={{ display: "block", color: "text.secondary" }}
          {...(props.subheaderTypographyProps ?? {})}
        >
          {subheader}
        </Typography>
      );
    return subheader;
  });

  return (
    <CardHeaderRoot
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      ownerState={allProps}
    >
      <Show when={!!props.avatar}>
        <CardHeaderAvatar class={classes.avatar} ownerState={allProps}>
          {props.avatar}
        </CardHeaderAvatar>
      </Show>

      <CardHeaderContent class={classes.content} ownerState={allProps}>
        {Title()}
        {Subheader()}
      </CardHeaderContent>

      <Show when={!!props.action}>
        <CardHeaderAction class={classes.action} ownerState={allProps}>
          {props.action}
        </CardHeaderAction>
      </Show>
    </CardHeaderRoot>
  );
});

export default CardHeader;
