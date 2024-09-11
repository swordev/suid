import ButtonBase from "../ButtonBase";
import FirstPageIcon from "../internal/svg-icons/FirstPage";
import LastPageIcon from "../internal/svg-icons/LastPage";
import NavigateBeforeIcon from "../internal/svg-icons/NavigateBefore";
import NavigateNextIcon from "../internal/svg-icons/NavigateNext";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import {
  PaginationItemProps,
  PaginationItemTypeMap,
} from "./PaginationItemProps";
import { getPaginationItemUtilityClass } from "./paginationItemClasses";
import paginationItemClasses from "./paginationItemClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { alpha } from "@suid/system";
import createRef from "@suid/system/createRef";
import { ElementType } from "@suid/types";
import capitalize from "@suid/utils/capitalize";
import clsx from "clsx";
import { Show, splitProps } from "solid-js";

const $ = createComponentFactory<PaginationItemTypeMap>()({
  name: "MuiPaginationItem",
  selfPropNames: [
    "classes",
    "color",
    "components",
    "disabled",
    "page",
    "selected",
    "shape",
    "size",
    "type",
    "variant",
  ],
  utilityClass: getPaginationItemUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `size${capitalize(ownerState.size)}`,
      ownerState.variant,
      ownerState.shape,
      ownerState.color !== "standard" &&
        `${ownerState.variant}${capitalize(ownerState.color)}`,
      ownerState.disabled && "disabled",
      ownerState.selected && "selected",
      {
        page: "page",
        first: "firstLast",
        last: "firstLast",
        "start-ellipsis": "ellipsis",
        "end-ellipsis": "ellipsis",
        previous: "previousNext",
        next: "previousNext",
      }[ownerState.type],
    ],
    icon: ["icon"],
  }),
});

const PaginationItemEllipsis = styled("div", {
  name: "MuiPaginationItem",
  slot: "Root",
})<PaginationItemProps>(({ theme, ownerState }) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: theme.palette.text.primary,
  height: "auto",
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
  },
  ...(ownerState.size === "small" && {
    minWidth: 26,
    borderRadius: 26 / 2,
    margin: "0 1px",
    padding: "0 4px",
  }),
  ...(ownerState.size === "large" && {
    minWidth: 40,
    borderRadius: 40 / 2,
    padding: "0 10px",
    fontSize: theme.typography.pxToRem(15),
  }),
}));

const PaginationItemPage = styled(ButtonBase, {
  name: "MuiPaginationItem",
  slot: "Root",
})<PaginationItemProps>(
  ({ theme, ownerState }) => ({
    ...theme.typography.body2,
    borderRadius: 32 / 2,
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: 32,
    height: 32,
    padding: "0 6px",
    margin: "0 3px",
    color: theme.palette.text.primary,
    [`&.${paginationItemClasses.focusVisible}`]: {
      backgroundColor: theme.palette.action.focus,
    },
    [`&.${paginationItemClasses.disabled}`]: {
      opacity: theme.palette.action.disabledOpacity,
    },
    transition: theme.transitions.create(["color", "background-color"], {
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    [`&.${paginationItemClasses.selected}`]: {
      backgroundColor: theme.palette.action.selected,
      "&:hover": {
        backgroundColor: alpha(
          theme.palette.action.selected,
          theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.action.selected,
        },
      },
      [`&.${paginationItemClasses.focusVisible}`]: {
        backgroundColor: alpha(
          theme.palette.action.selected,
          theme.palette.action.selectedOpacity +
            theme.palette.action.focusOpacity
        ),
      },
      [`&.${paginationItemClasses.disabled}`]: {
        opacity: 1,
        color: theme.palette.action.disabled,
        backgroundColor: theme.palette.action.selected,
      },
    },
    ...(ownerState.size === "small" && {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: "0 1px",
      padding: "0 4px",
    }),
    ...(ownerState.size === "large" && {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: "0 10px",
      fontSize: theme.typography.pxToRem(15),
    }),
    ...(ownerState.shape === "rounded" && {
      borderRadius: theme.shape.borderRadius,
    }),
  }),
  ({ theme, ownerState }) => ({
    ...(ownerState.variant === "text" && {
      [`&.${paginationItemClasses.selected}`]: {
        ...(ownerState.color !== "standard" &&
          ownerState.color && {
            color: theme.palette[ownerState.color].contrastText,
            backgroundColor: theme.palette[ownerState.color].main,
            "&:hover": {
              backgroundColor: theme.palette[ownerState.color].dark,
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: theme.palette[ownerState.color].main,
              },
            },
            [`&.${paginationItemClasses.focusVisible}`]: {
              backgroundColor: theme.palette[ownerState.color].dark,
            },
          }),
        [`&.${paginationItemClasses.disabled}`]: {
          color: theme.palette.action.disabled,
        },
      },
    }),
    ...(ownerState.variant === "outlined" && {
      border: `1px solid ${
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)"
      }`,
      [`&.${paginationItemClasses.selected}`]: {
        ...(ownerState.color !== "standard" &&
          ownerState.color && {
            color: theme.palette[ownerState.color].main,
            border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`,
            backgroundColor: alpha(
              theme.palette[ownerState.color].main,
              theme.palette.action.activatedOpacity
            ),
            "&:hover": {
              backgroundColor: alpha(
                theme.palette[ownerState.color].main,
                theme.palette.action.activatedOpacity +
                  theme.palette.action.focusOpacity
              ),
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
            [`&.${paginationItemClasses.focusVisible}`]: {
              backgroundColor: alpha(
                theme.palette[ownerState.color].main,
                theme.palette.action.activatedOpacity +
                  theme.palette.action.focusOpacity
              ),
            },
          }),
        [`&.${paginationItemClasses.disabled}`]: {
          borderColor: theme.palette.action.disabledBackground,
          color: theme.palette.action.disabled,
        },
      },
    }),
  })
);

const PaginationItemPageIcon = styled("div", {
  name: "MuiPaginationItem",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon,
})<PaginationItemProps>(({ theme, ownerState }) => ({
  fontSize: theme.typography.pxToRem(20),
  margin: "0 -8px",
  ...(ownerState.size === "small" && {
    fontSize: theme.typography.pxToRem(18),
  }),
  ...(ownerState.size === "large" && {
    fontSize: theme.typography.pxToRem(22),
  }),
}));

/**
 *
 * Demos:
 *
 * - [Pagination](https://mui.com/components/pagination/)
 *
 * API:
 *
 * - [PaginationItem API](https://mui.com/api/pagination-item/)
 */
const PaginationItem = $.defineComponent(function PaginationItem(inProps) {
  const ref = createRef(inProps);
  const props = $.useThemeProps({
    props: inProps,
    propDefaults: {
      color: "standard",
      components: {
        first: FirstPageIcon,
        last: LastPageIcon,
        next: NavigateNextIcon,
        previous: NavigateBeforeIcon,
      },
      disabled: false,
      selected: false,
      shape: "circular",
      size: "medium",
      type: "page",
      variant: "text",
    },
  });
  const [baseProps, other] = splitProps(props, [
    "color",
    "component",
    "components",
    "disabled",
    "page",
    "selected",
    "shape",
    "size",
    "type",
    "variant",
  ]);

  const ownerState = props;

  const theme = useTheme();
  const classes = $.useClasses(ownerState);

  const normalizedIcons = (): Record<string, ElementType> =>
    theme.direction === "rtl"
      ? {
          previous: baseProps.components.next || NavigateNextIcon,
          next: baseProps.components.previous || NavigateBeforeIcon,
          last: baseProps.components.first || FirstPageIcon,
          first: baseProps.components.last || LastPageIcon,
        }
      : {
          previous: baseProps.components.previous || NavigateBeforeIcon,
          next: baseProps.components.next || NavigateNextIcon,
          first: baseProps.components.first || FirstPageIcon,
          last: baseProps.components.last || LastPageIcon,
        };

  const Icon = () => normalizedIcons()[baseProps.type];

  return (
    <>
      {baseProps.type === "start-ellipsis" ||
      baseProps.type === "end-ellipsis" ? (
        <PaginationItemEllipsis
          ref={ref}
          ownerState={ownerState}
          class={clsx(classes.root, props.class)}
        >
          …
        </PaginationItemEllipsis>
      ) : (
        <PaginationItemPage
          ref={ref}
          ownerState={ownerState}
          component={baseProps.component}
          disabled={baseProps.disabled}
          class={clsx(classes.root, props.class)}
          {...other}
        >
          {baseProps.type === "page" && baseProps.page}
          <Show when={Icon()}>
            {(Icon) => (
              <PaginationItemPageIcon
                as={Icon()}
                ownerState={ownerState}
                class={classes.icon}
              />
            )}
          </Show>
        </PaginationItemPage>
      )}
    </>
  );
});

export default PaginationItem;
