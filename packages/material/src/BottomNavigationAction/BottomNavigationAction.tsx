import { BottomNavigationActionTypeMap } from ".";
import BottomNavigationContext from "../BottomNavigation/BottomNavigationContext";
import ButtonBase from "../ButtonBase";
import styled from "../styles/styled";
import bottomNavigationActionClasses, {
  getBottomNavigationActionUtilityClass,
} from "./bottomNavigationActionClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import clsx from "clsx";
import {
  createSignal,
  mergeProps,
  onMount,
  splitProps,
  useContext,
  createMemo,
} from "solid-js";
import { ResolvedJSXElement } from "solid-js/types/reactive/signal";

interface ExtraProps {
  selected?: boolean;
  showLabel?: boolean;
}

const $ = createComponentFactory<
  BottomNavigationActionTypeMap & { props: ExtraProps }
>()({
  name: "MuiBottomNavigationAction",
  selfPropNames: ["children", "classes", "icon", "label", "showLabel", "value"],
  utilityClass: getBottomNavigationActionUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      !ownerState.showLabel && !ownerState.selected && "iconOnly",
      ownerState.selected && "selected",
    ],
    label: [
      "label",
      !ownerState.showLabel && !ownerState.selected && "iconOnly",
      ownerState.selected && "selected",
    ],
  }),
});

const BottomNavigationActionRoot = styled(ButtonBase, {
  name: "MuiBottomNavigationAction",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      !ownerState.showLabel && !ownerState.selected && styles.iconOnly,
    ];
  },
})<ExtraProps>(({ theme, ownerState }) => ({
  transition: theme.transitions.create(["color", "padding-top"], {
    duration: theme.transitions.duration.short,
  }),
  padding: "6px 12px 8px",
  minWidth: 80,
  maxWidth: 168,
  color: theme.palette.text.secondary,
  flexDirection: "column",
  flex: "1",
  ...(!ownerState.showLabel &&
    !ownerState.selected && {
      paddingTop: 16,
    }),
  [`&.${bottomNavigationActionClasses.selected}`]: {
    paddingTop: 6,
    color: theme.palette.primary.main,
  },
}));

const BottomNavigationActionLabel = styled("span", {
  name: "MuiBottomNavigationAction",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label,
})<ExtraProps>(({ theme, ownerState }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(12),
  opacity: 1,
  transition: "font-size 0.2s, opacity 0.2s",
  transitionDelay: "0.1s",
  ...(!ownerState.showLabel &&
    !ownerState.selected && {
      opacity: 0,
      transitionDelay: "0s",
    }),
  [`&.${bottomNavigationActionClasses.selected}`]: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

/**
 *
 * Demos:
 *
 * - [Bottom Navigation](https://mui.com/components/bottom-navigation/)
 *
 * API:
 *
 * - [BottomNavigationAction API](https://mui.com/api/bottom-navigation-action/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const BottomNavigationAction = $.defineComponent(
  function BottomNavigationAction(inProps) {
    const ref = createRef<HTMLElement>(inProps);
    const props = $.useThemeProps({ props: inProps });
    const [, other] = splitProps(props, [
      "class",
      "icon",
      "label",
      "onClick",
      "showLabel",
      "value",
    ]);

    const navCtx = useContext(BottomNavigationContext);

    const [self, setSelf] = createSignal<ResolvedJSXElement>();
    onMount(() => setSelf(ref.current));

    const value = createMemo(() => {
      if (props.value !== undefined) {
        return props.value;
      }
      if (self() !== undefined) {
        return navCtx.getIndex(self());
      }
      return undefined;
    });

    const handleChange = (event: any) => {
      const onChange = navCtx.onChange();
      if (typeof onChange === "function") {
        onChange(event, value());
      }

      if (typeof props.onClick === "function") {
        props.onClick(event);
      }
    };

    const ownerState = mergeProps(props, {
      get selected() {
        return navCtx.selectedValue() === value();
      },
      get showLabel() {
        return props.showLabel ?? navCtx.showLabels();
      },
    });

    const classes = $.useClasses(ownerState);

    return (
      <BottomNavigationActionRoot
        ref={ref}
        class={clsx(classes.root, props.class)}
        focusRipple
        onClick={handleChange}
        ownerState={ownerState}
        {...other}
      >
        {props.icon}
        <BottomNavigationActionLabel
          class={classes.label}
          ownerState={ownerState}
        >
          {props.label}
        </BottomNavigationActionLabel>
      </BottomNavigationActionRoot>
    );
  }
);

export default BottomNavigationAction;
