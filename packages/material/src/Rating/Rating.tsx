import { IconContainerProps, RatingTypeMap } from ".";
import Star from "../internal/svg-icons/Star";
import StarBorder from "../internal/svg-icons/StarBorder";
import styled from "../styles/styled";
import useTheme from "../styles/useTheme";
import capitalize from "../utils/capitalize";
import useControlled from "../utils/useControlled";
import ratingClasses, { getRatingUtilityClass } from "./ratingClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import {
  ChangeEvent,
  ElementType,
  EventParam,
  FocusEventHandler,
  InPropsOf,
  MouseEventHandler,
} from "@suid/types";
import { visuallyHidden } from "@suid/utils";
import useId from "@suid/utils/createUniqueId";
import useIsFocusVisible from "@suid/utils/useIsFocusVisible";
import clsx from "clsx";
import {
  type Accessor,
  Component,
  createEffect,
  createMemo,
  createSignal,
  type JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";

type OwnerState = InPropsOf<RatingTypeMap> & {
  focusVisible: boolean;
  emptyValueFocused: boolean;
  iconActive: boolean;
  iconEmpty: boolean;
};

type ElementTypeWithProps<
  T extends ElementType,
  P extends object = { value: number },
> =
  T extends Component<any>
    ? Component<P & Parameters<T>[0]>
    : T extends keyof JSX.IntrinsicElements
      ? T
      : never;

type RatingItemProps = {
  highlightSelectedOnly: boolean;
  itemValue: number;
  ratingValue: number;
  hover: number;
  focus: number;
  ratingValueRounded: number;
  IconContainerComponent: ElementType;
  classes: Record<string, string>;
  name: Accessor<string>;
  disabled: boolean;
  emptyIcon: JSX.Element;
  icon: JSX.Element;
  getLabelText: (value: number) => string;
  readOnly: boolean;
  isActive: boolean;
  labelProps?: JSX.IntrinsicElements["span"] & JSX.IntrinsicElements["label"];
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  ownerState?: OwnerState;
};

const $ = createComponentFactory<RatingTypeMap, OwnerState>()({
  name: "MuiRating",
  selfPropNames: [
    "classes",
    "defaultValue",
    "disabled",
    "emptyIcon",
    "emptyLabelText",
    "getLabelText",
    "highlightSelectedOnly",
    "icon",
    "IconContainerComponent",
    "max",
    "name",
    "onChange",
    "onChangeActive",
    "precision",
    "readOnly",
    "size",
    "value",
  ],
  utilityClass: getRatingUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `size${capitalize(ownerState.size)}`,
      ownerState.disabled && "disabled",
      ownerState.focusVisible && "focusVisible",
      ownerState.readOnly && "readyOnly",
    ],
    label: ["label", "pristine"],
    labelEmptyValue: [ownerState.emptyValueFocused && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"],
  }),
});

function clamp(value: number, min: number, max: number) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

function getDecimalPrecision(num: number) {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToPrecision(value: number, precision: number) {
  if (value == null) {
    return value;
  }

  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}

const RatingRoot = styled("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${ratingClasses.visuallyHidden}`]: styles.visuallyHidden },
      styles.root,
      styles[`size${capitalize(ownerState.size)}`],
      ownerState.readOnly && styles.readOnly,
    ];
  },
})(({ theme, ownerState }) => ({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: theme.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  WebkitTapHighlightColor: "transparent",
  [`&.${ratingClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: "none",
  },
  [`&.${ratingClasses.focusVisible} .${ratingClasses.iconActive}`]: {
    outline: "1px solid #999",
  },
  [`& .${ratingClasses.visuallyHidden}`]: visuallyHidden,
  ...(ownerState.size === "small" && {
    fontSize: theme.typography.pxToRem(18),
  }),
  ...(ownerState.size === "large" && {
    fontSize: theme.typography.pxToRem(30),
  }),
  ...(ownerState.readOnly && {
    pointerEvents: "none",
  }),
}));

const RatingLabel = styled("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: (_, styles) => styles.label,
})<OwnerState>(({ ownerState }) => ({
  cursor: "inherit",
  ...(ownerState.emptyValueFocused && {
    top: 0,
    bottom: 0,
    position: "absolute",
    outline: "1px solid #999",
    width: "100%",
  }),
}));

const RatingIcon = styled<ElementTypeWithProps<ElementType>>("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.icon,
      ownerState.iconEmpty && styles.iconEmpty,
      ownerState.iconFilled && styles.iconFilled,
      ownerState.iconHover && styles.iconHover,
      ownerState.iconFocus && styles.iconFocus,
      ownerState.iconActive && styles.iconActive,
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none",
  ...(ownerState.iconActive && {
    transform: "scale(1.2)",
  }),
  ...(ownerState.iconEmpty && {
    color: theme.palette.action.disabled,
  }),
}));

const RatingDecimal = styled<
  ElementTypeWithProps<ElementType, { iconActive: boolean }>
>("span", {
  name: "MuiRating",
  slot: "Decimal",
  overridesResolver: (props, styles) => {
    const { iconActive } = props;

    return [styles.decimal, iconActive && styles.iconActive];
  },
})<OwnerState>(({ ownerState }) => ({
  position: "relative",
  ...(ownerState.iconActive && {
    transform: "scale(1.2)",
  }),
}));

function IconContainer(props: IconContainerProps) {
  const [, other] = splitProps(props, ["value"]);
  return <span {...other} />;
}

function RatingItem(props: RatingItemProps) {
  const isFilled = createMemo(() =>
    props.highlightSelectedOnly
      ? props.itemValue === props.ratingValue
      : props.itemValue <= props.ratingValue
  );

  const isHovered = createMemo(() => props.itemValue <= props.hover);
  const isFocused = createMemo(() => props.itemValue <= props.focus);
  const isChecked = createMemo(
    () => props.itemValue === props.ratingValueRounded
  );

  const id = useId();
  const container = (
    <RatingIcon
      as={props.IconContainerComponent}
      value={props.itemValue}
      class={clsx(props.classes.icon, {
        get [props.classes.iconEmpty]() {
          return !isFilled();
        },
        [props.classes.iconFilled]: isFilled(),
        [props.classes.iconHover]: isHovered(),
        [props.classes.iconFocus]: isFocused(),
        get [props.classes.iconActive]() {
          return props.isActive;
        },
      })}
      ownerState={mergeProps(() => props.ownerState, {
        get iconEmpty() {
          return !isFilled();
        },
        iconFilled: isFilled(),
        iconHover: isHovered(),
        iconFocus: isFocused(),
        get iconActive() {
          return props.isActive;
        },
      })}
    >
      {props.emptyIcon && !isFilled() ? props.emptyIcon : props.icon}
    </RatingIcon>
  );

  return (
    <Show
      when={!props.readOnly}
      fallback={<span {...props.labelProps}>{container}</span>}
    >
      <RatingLabel
        ownerState={mergeProps(() => props.ownerState, {
          emptyValueFocused: undefined,
        })}
        for={id()}
        {...props.labelProps}
      >
        {container}
        <span class={props.classes.visuallyHidden}>
          {props.getLabelText(props.itemValue)}
        </span>
      </RatingLabel>
      <input
        class={props.classes.visuallyHidden}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onClick={props.onClick}
        disabled={props.disabled}
        value={props.itemValue}
        id={id()}
        type="radio"
        name={props.name()}
        checked={isChecked()}
      />
    </Show>
  );
}

const defaultIcon = () => <Star fontSize="inherit" />;
const defaultEmptyIcon = () => <StarBorder fontSize="inherit" />;

function defaultLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}`;
}

const Rating = $.defineComponent(function Rating(inProps) {
  const focusVisibleRef = createRef(inProps);
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "classes",
    "defaultValue",
    "disabled",
    "emptyIcon",
    "emptyLabelText",
    "getLabelText",
    "highlightSelectedOnly",
    "icon",
    "IconContainerComponent",
    "max",
    "name",
    "onChange",
    "onChangeActive",
    "onMouseLeave",
    "onMouseMove",
    "precision",
    "readOnly",
    "size",
    "value",
  ]);

  const baseProps = mergeProps(
    {
      defaultValue: null,
      disabled: false,
      emptyIcon: defaultEmptyIcon,
      emptyLabelText: "Empty",
      getLabelText: defaultLabelText,
      highlightSelectedOnly: false,
      icon: defaultIcon,
      IconContainerComponent: IconContainer,
      max: 5,
      precision: 1,
      readOnly: false,
      size: "medium",
    },
    props
  );

  const name = useId(() => props.name);

  const [valueDerived, setValueState] = useControlled({
    controlled: () => props.value,
    default: () => baseProps.defaultValue,
    name: "Rating",
  });

  const valueRounded = createMemo(() =>
    roundValueToPrecision(valueDerived() as number, baseProps.precision)
  );
  const theme = useTheme();
  const [valueState, setState] = createSignal({
    get hover() {
      return -1;
    },
    get focus() {
      return -1;
    },
  });

  const [value, setValue] = createSignal(valueRounded());

  createEffect(() => {
    if (valueState().hover !== -1) {
      setValue(valueState().hover);
    } else {
      setValue(valueRounded);
    }
    if (valueState().focus !== -1) {
      setValue(valueState().focus);
    } else {
      setValue(valueRounded);
    }
  });

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = createSignal(false);
  const handleMouseMove: MouseEventHandler<HTMLSpanElement> = (event) => {
    if ("function" === typeof props.onMouseMove) {
      props.onMouseMove(event);
    }

    const rootNode = focusVisibleRef.current as HTMLElement;
    const { right, left } = rootNode.getBoundingClientRect();
    const { width } = (
      rootNode.firstChild as HTMLElement
    ).getBoundingClientRect();
    let percent;

    if (theme.direction === "rtl") {
      percent = (right - event.clientX) / (width * baseProps.max);
    } else {
      percent = (event.clientX - left) / (width * baseProps.max);
    }

    let newHover = roundValueToPrecision(
      baseProps.max * percent + baseProps.precision / 2,
      baseProps.precision
    );

    newHover = clamp(newHover, baseProps.precision, baseProps.max);

    setState((prev) =>
      prev.hover === newHover && prev.focus === newHover
        ? prev
        : {
            hover: newHover,
            focus: newHover,
          }
    );

    setFocusVisible(false);

    if (props.onChangeActive) {
      props.onChangeActive(event, newHover);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLSpanElement> = (event) => {
    if ("function" === typeof props.onMouseLeave) {
      props.onMouseLeave(event);
    }

    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover,
    });

    if (props.onChangeActive) {
      props.onChangeActive(event, newHover);
    }
  };

  const handleChange = (event: Event) => {
    let newValue =
      (event as ChangeEvent<HTMLInputElement>).target.value === ""
        ? null
        : parseFloat((event as ChangeEvent<HTMLInputElement>).target?.value);

    // Give mouse priority over keyboard
    // Fix https://github.com/mui/material-ui/issues/22827
    if (valueState().hover !== -1) {
      newValue = valueState().hover;
    }

    setValueState(newValue);

    if (props.onChange) {
      props.onChange(event, newValue);
    }
  };

  const handleClear: JSX.EventHandlerUnion<HTMLInputElement, MouseEvent> = (
    event
  ) => {
    // Ignore keyboard events
    // https://github.com/facebook/react/issues/7407
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }

    setState({
      hover: -1,
      focus: -1,
    });

    setValueState(null);

    if (
      props.onChange &&
      parseFloat((event.target as HTMLInputElement).value) === valueRounded()
    ) {
      props.onChange(event, null);
    }
  };

  const handleFocus = (event: EventParam<HTMLInputElement, FocusEvent>) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current) {
      setFocusVisible(true);
    }

    const newFocus = parseFloat((event.target as HTMLInputElement).value);
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus,
    }));
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    if (valueState().hover !== -1) {
      return;
    }

    handleBlurVisible(event);
    if (!isFocusVisibleRef.current) {
      setFocusVisible(false);
    }

    const newFocus = -1;
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus,
    }));
  };

  const [emptyValueFocused, setEmptyValueFocused] = createSignal(false);

  const ownerState = mergeProps(props, {
    get defaultValue() {
      return baseProps.defaultValue;
    },
    get disabled() {
      return baseProps.disabled;
    },
    get emptyIcon() {
      return baseProps.emptyIcon;
    },
    get emptyLabelText() {
      return baseProps.emptyLabelText;
    },
    get emptyValueFocused() {
      return emptyValueFocused();
    },
    get focusVisible() {
      return focusVisible();
    },
    get getLabelText() {
      return baseProps.getLabelText;
    },
    get icon() {
      return baseProps.icon;
    },
    get IconContainerComponent() {
      return baseProps.IconContainerComponent;
    },
    get max() {
      return baseProps.max;
    },
    get precision() {
      return baseProps.precision;
    },
    get readOnly() {
      return baseProps.readOnly;
    },
    get size() {
      return baseProps.size;
    },
  });

  const classes = $.useClasses(ownerState as OwnerState);

  return (
    <RatingRoot
      ref={focusVisibleRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      class={clsx(classes.root, props.classes)}
      ownerState={ownerState}
      role={baseProps.readOnly ? "img" : undefined}
      aria-label={
        baseProps.readOnly ? baseProps.getLabelText(value()) : undefined
      }
      {...other}
    >
      {Array.from(new Array(baseProps.max)).map((_, index) => {
        const itemValue = index + 1;

        const ratingItemProps = {
          classes: classes,
          get disabled() {
            return baseProps.disabled;
          },
          get emptyIcon() {
            return baseProps.emptyIcon;
          },
          get focus() {
            return valueState().focus;
          },
          get getLabelText() {
            return baseProps.getLabelText;
          },
          get highlightSelectedOnly() {
            return baseProps.highlightSelectedOnly;
          },
          get hover() {
            return valueState().hover;
          },
          get icon() {
            return baseProps.icon;
          },
          get IconContainerComponent() {
            return baseProps.IconContainerComponent;
          },
          name: name,
          onBlur: handleBlur,
          onChange: handleChange,
          onClick: handleClear,
          onFocus: handleFocus,
          ratingValue: value(),
          ratingValueRounded: valueRounded(),
          get readOnly() {
            return baseProps.readOnly;
          },
          ownerState: ownerState as OwnerState,
        };

        const isActive = createMemo(
          () =>
            itemValue === Math.ceil(value()) &&
            (valueState().hover !== -1 || valueState().focus !== -1)
        );

        if (baseProps.precision < 1) {
          const items = Array.from(new Array(1 / baseProps.precision));
          return (
            <RatingDecimal
              class={clsx(classes.decimal, {
                [classes.iconActive]: isActive(),
              })}
              ownerState={ownerState as OwnerState}
              iconActive={isActive()}
            >
              {items.map((_, indexDecimal) => {
                const itemDecimalValue = roundValueToPrecision(
                  itemValue - 1 + (indexDecimal + 1) * baseProps.precision,
                  baseProps.precision
                );

                return (
                  <RatingItem
                    {...ratingItemProps}
                    // The icon is already displayed as active
                    isActive={false}
                    itemValue={itemDecimalValue}
                    labelProps={{
                      get style() {
                        return items.length - 1 === indexDecimal
                          ? {}
                          : {
                              width:
                                itemDecimalValue === value()
                                  ? `${(indexDecimal + 1) * baseProps.precision * 100}%`
                                  : "0%",
                              overflow: "hidden",
                              position:
                                "absolute" as JSX.CSSProperties["position"],
                            };
                      },
                    }}
                  />
                );
              })}
            </RatingDecimal>
          );
        }

        return (
          <RatingItem
            {...ratingItemProps}
            isActive={isActive()}
            itemValue={itemValue}
          />
        );
      })}
      {!baseProps.readOnly && !baseProps.disabled && (
        <RatingLabel
          class={clsx(classes.label, classes.labelEmptyValue)}
          ownerState={ownerState as OwnerState}
        >
          <input
            class={classes.visuallyHidden}
            value=""
            id={`${name()}-empty`}
            type="radio"
            name={name()}
            checked={valueRounded == null}
            onFocus={() => setEmptyValueFocused(true)}
            onBlur={() => setEmptyValueFocused(false)}
            onChange={handleChange}
          />
          <span class={classes.visuallyHidden}>{baseProps.emptyLabelText}</span>
        </RatingLabel>
      )}
    </RatingRoot>
  );
});

export default Rating;
