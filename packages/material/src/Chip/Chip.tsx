import { ChipTypeMap } from ".";
import ButtonBase from "../ButtonBase";
import CancelIcon from "../internal/svg-icons/Cancel";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import chipClasses, { getChipUtilityClass } from "./chipClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import createElementRef from "@suid/system/createElementRef";
import { EventParam } from "@suid/types";
import clsx from "clsx";
import { children, createMemo } from "solid-js";

const $ = createComponentFactory<ChipTypeMap>()({
  name: "MuiChip",
  propDefaults: ({ set }) =>
    set({
      color: "default",
      disabled: false,
      size: "medium",
      variant: "filled",
    }),
  selfPropNames: [
    "avatar",
    "children",
    "classes",
    "clickable",
    "color",
    "deleteIcon",
    "disabled",
    "icon",
    "label",
    "onDelete",
    "size",
    "variant",
  ],
  utilityClass: getChipUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      ownerState.disabled && "disabled",
      `size${capitalize(ownerState.size)}`,
      `color${capitalize(ownerState.color)}`,
      !!ownerState.clickable && "clickable",
      !!ownerState.clickable && `clickableColor${capitalize(ownerState.color)}`,
      !!ownerState.onDelete && "deletable",
      !!ownerState.onDelete && `deletableColor${capitalize(ownerState.color)}`,
      `${ownerState.variant}${capitalize(ownerState.color)}`,
    ],
    label: ["label", `label${capitalize(ownerState.size)}`],
    avatar: [
      "avatar",
      `avatar${capitalize(ownerState.size)}`,
      `avatarColor${capitalize(ownerState.color)}`,
    ],
    icon: [
      "icon",
      `icon${capitalize(ownerState.size)}`,
      `iconColor${capitalize(ownerState.color)}`,
    ],
    deleteIcon: [
      "deleteIcon",
      `deleteIcon${capitalize(ownerState.size)}`,
      `deleteIconColor${capitalize(ownerState.color)}`,
      `deleteIconOutlinedColor${capitalize(ownerState.color)}`,
    ],
  }),
});

const ChipRoot = styled("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    const { color, clickable, onDelete, size, variant } = ownerState;

    return [
      { [`& .${chipClasses.avatar}`]: styles.avatar },
      { [`& .${chipClasses.avatar}`]: styles[`avatar${capitalize(size)}`] },
      {
        [`& .${chipClasses.avatar}`]: styles[`avatarColor${capitalize(color)}`],
      },
      { [`& .${chipClasses.icon}`]: styles.icon },
      { [`& .${chipClasses.icon}`]: styles[`icon${capitalize(size)}`] },
      { [`& .${chipClasses.icon}`]: styles[`iconColor${capitalize(color)}`] },
      { [`& .${chipClasses.deleteIcon}`]: styles.deleteIcon },
      {
        [`& .${chipClasses.deleteIcon}`]:
          styles[`deleteIcon${capitalize(size)}`],
      },
      {
        [`& .${chipClasses.deleteIcon}`]:
          styles[`deleteIconColor${capitalize(color)}`],
      },
      {
        [`& .${chipClasses.deleteIcon}`]:
          styles[`deleteIconOutlinedColor${capitalize(color)}`],
      },
      styles.root,
      styles[`size${capitalize(size)}`],
      styles[`color${capitalize(color)}`],
      clickable && styles.clickable,
      clickable &&
        color !== "default" &&
        styles[`clickableColor${capitalize(color)})`],
      onDelete && styles.deletable,
      onDelete &&
        color !== "default" &&
        styles[`deletableColor${capitalize(color)}`],
      styles[variant],
      variant === "outlined" && styles[`outlined${capitalize(color)}`],
    ];
  },
})(
  ({ theme, ownerState }) => {
    const deleteIconColor = alpha(theme.palette.text.primary, 0.26);

    return {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.action.selected,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: theme.transitions.create(["background-color", "box-shadow"]),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: "default",
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: "none",
      border: 0, // Remove `button` border
      padding: 0, // Remove `button` padding
      verticalAlign: "middle",
      boxSizing: "border-box",
      [`&.${chipClasses.disabled}`]: {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: "none",
      },
      [`& .${chipClasses.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[700]
            : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12),
      },
      [`& .${chipClasses.avatarColorPrimary}`]: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
      },
      [`& .${chipClasses.avatarColorSecondary}`]: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark,
      },
      [`& .${chipClasses.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10),
      },
      [`& .${chipClasses.icon}`]: {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[700]
            : theme.palette.grey[300],
        marginLeft: 5,
        marginRight: -6,
        ...(ownerState.size === "small" && {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4,
        }),
        ...(ownerState.color !== "default" && {
          color: "inherit",
        }),
      },
      [`& .${chipClasses.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: deleteIconColor,
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: alpha(deleteIconColor, 0.4),
        },
        ...(ownerState.size === "small" && {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4,
        }),
        ...(ownerState.color !== "default" && {
          color: alpha(theme.palette[ownerState.color].contrastText, 0.7),
          "&:hover, &:active": {
            color: theme.palette[ownerState.color].contrastText,
          },
        }),
      },
      ...(ownerState.size === "small" && {
        height: 24,
      }),
      ...(ownerState.color !== "default" && {
        backgroundColor: theme.palette[ownerState.color].main,
        color: theme.palette[ownerState.color].contrastText,
      }),
      ...(ownerState.onDelete && {
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: alpha(
            theme.palette.action.selected,
            theme.palette.action.selectedOpacity +
              theme.palette.action.focusOpacity
          ),
        },
      }),
      ...(ownerState.onDelete &&
        ownerState.color !== "default" && {
          [`&.${chipClasses.focusVisible}`]: {
            backgroundColor: theme.palette[ownerState.color].dark,
          },
        }),
    };
  },
  ({ theme, ownerState }) => ({
    ...(ownerState.clickable && {
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: alpha(
          theme.palette.action.selected,
          theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
      },
      [`&.${chipClasses.focusVisible}`]: {
        backgroundColor: alpha(
          theme.palette.action.selected,
          theme.palette.action.selectedOpacity +
            theme.palette.action.focusOpacity
        ),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
      },
    }),
    ...(ownerState.clickable &&
      ownerState.color !== "default" && {
        [`&:hover, &.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette[ownerState.color].dark,
        },
      }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.variant === "outlined" && {
      backgroundColor: "transparent",
      border: `1px solid ${
        theme.palette.mode === "light"
          ? theme.palette.grey[400]
          : theme.palette.grey[700]
      }`,
      [`&.${chipClasses.clickable}:hover`]: {
        backgroundColor: theme.palette.action.hover,
      },
      [`&.${chipClasses.focusVisible}`]: {
        backgroundColor: theme.palette.action.focus,
      },
      [`& .${chipClasses.avatar}`]: {
        marginLeft: 4,
      },
      [`& .${chipClasses.avatarSmall}`]: {
        marginLeft: 2,
      },
      [`& .${chipClasses.icon}`]: {
        marginLeft: 4,
      },
      [`& .${chipClasses.iconSmall}`]: {
        marginLeft: 2,
      },
      [`& .${chipClasses.deleteIcon}`]: {
        marginRight: 5,
      },
      [`& .${chipClasses.deleteIconSmall}`]: {
        marginRight: 3,
      },
    }),
    ...(ownerState.variant === "outlined" &&
      ownerState.color !== "default" && {
        color: theme.palette[ownerState.color].main,
        border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.7)}`,
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.hoverOpacity
          ),
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: alpha(
            theme.palette[ownerState.color].main,
            theme.palette.action.focusOpacity
          ),
        },
        [`& .${chipClasses.deleteIcon}`]: {
          color: alpha(theme.palette[ownerState.color].main, 0.7),
          "&:hover, &:active": {
            color: theme.palette[ownerState.color].main,
          },
        },
      }),
  })
);

const ChipLabel = styled("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    const { size } = ownerState;

    return [styles.label, styles[`label${capitalize(size)}`]];
  },
})(({ ownerState }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  ...(ownerState.size === "small" && {
    paddingLeft: 8,
    paddingRight: 8,
  }),
}));

function isDeleteKeyboardEvent(keyboardEvent: KeyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}

/**
 * Chips represent complex entities in small blocks, such as a contact.
 *
 * Demos:
 *
 * - [Chips](https://mui.com/components/chips/)
 *
 * API:
 *
 * - [Chip API](https://mui.com/api/chip/)
 */
const Chip = $.component(function Chip({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const element = createElementRef(otherProps);

  const handleDeleteIconClick = (event: MouseEvent) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    props.onDelete?.();
  };

  const handleKeyDown = (event: EventParam<HTMLDivElement, KeyboardEvent>) => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (typeof otherProps.onKeyDown === "function") otherProps.onKeyDown(event);
  };

  const handleKeyUp = (event: EventParam<HTMLDivElement, KeyboardEvent>) => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (props.onDelete && isDeleteKeyboardEvent(event)) {
        props.onDelete();
      } else if (event.key === "Escape" && element.ref) {
        element.ref.blur();
      }
    }

    if (typeof otherProps.onKeyUp === "function") otherProps.onKeyUp(event);
  };

  const clickable = createMemo(() =>
    props.clickable !== false && otherProps.onClick ? true : props.clickable
  );

  const component = createMemo(() =>
    clickable() || props.onDelete ? ButtonBase : otherProps.component || "div"
  );

  const moreProps = createMemo(() =>
    component() === ButtonBase
      ? {
          component: otherProps.component || "div",
          //focusVisibleClassName: classes.focusVisible,
          ...(props.onDelete && { disableRipple: true }),
        }
      : {}
  );

  const deleteIcon = createMemo(() => {
    if (!props.onDelete) return undefined;
    const node = children(() => props.deleteIcon)();
    if (node && node instanceof HTMLElement) {
      const result = node.cloneNode(true) as HTMLElement;
      result.setAttribute(
        "class",
        clsx(result.getAttribute("class"), classes.deleteIcon)
      );
      result.onclick = handleDeleteIconClick;
    } else {
      return (
        <CancelIcon
          className={classes.deleteIcon}
          onClick={handleDeleteIconClick}
        />
      );
    }
  });

  const avatar = createMemo(() => {
    const node = children(() => props.avatar)();
    if (node && node instanceof HTMLElement) {
      const result = node.cloneNode(true) as HTMLElement;
      result.setAttribute(
        "class",
        clsx(result.getAttribute("class"), classes.avatar)
      );
      return result;
    }
  });

  const icon = createMemo(() => {
    const node = children(() => props.icon)();
    if (node && node instanceof HTMLElement) {
      const result = node.cloneNode(true) as HTMLElement;
      result.setAttribute(
        "class",
        clsx(result.getAttribute("class"), classes.icon)
      );
      return result;
    }
  });

  if (process.env.NODE_ENV !== "production") {
    if (avatar() && icon()) {
      console.error(
        "MUI: The Chip component can not handle the avatar " +
          "and the icon prop at the same time. Pick one."
      );
    }
  }

  return (
    <ChipRoot
      as={component()}
      className={clsx(classes.root, otherProps.className)}
      disabled={clickable() && props.disabled ? true : undefined}
      onClick={otherProps.onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={element}
      ownerState={allProps}
      {...moreProps()}
      {...otherProps}
    >
      {avatar() || icon()}
      <ChipLabel className={clsx(classes.label)} ownerState={allProps}>
        {props.label}
      </ChipLabel>
      {deleteIcon}
    </ChipRoot>
  );
});

export default Chip;
