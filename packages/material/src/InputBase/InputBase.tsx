import FormControlContext, {
  FormControlState,
} from "../FormControl/FormControlContext";
import formControlState from "../FormControl/formControlState";
import useFormControl from "../FormControl/useFormControl";
import GlobalStyles from "../GlobalStyles";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";
import prepareControlledInput from "../utils/controlledInput/prepareControlledInput";
import setControlledInputValue from "../utils/controlledInput/setControlledInputValue";
import useControlled from "../utils/useControlled";
import { InputBaseTypeMap } from "./InputBaseProps";
import inputBaseClasses, { getInputBaseUtilityClass } from "./inputBaseClasses";
import { isFilled } from "./utils";
import createComponentFactory from "@suid/base/createComponentFactory";
import isHostComponent from "@suid/base/utils/isHostComponent";
import Dynamic from "@suid/system/Dynamic";
import createRef from "@suid/system/createRef";
import {
  AnimationEventHandler,
  ComponentInProps,
  FocusEventHandler,
  InputEventHandler,
} from "@suid/types";
import clsx from "clsx";
import {
  createEffect,
  createMemo,
  createRenderEffect,
  createSignal,
  mergeProps,
  onMount,
} from "solid-js";

export type OwnerState = ComponentInProps<InputBaseTypeMap> & {
  error?: boolean;
  focused: boolean;
  formControl?: FormControlState;
  hiddenLabel?: boolean;
  color: string;
};

const $ = createComponentFactory<InputBaseTypeMap, OwnerState>()({
  name: "MuiInputBase",
  propDefaults: ({ set }) =>
    set({
      components: {},
      componentsProps: {},
      fullWidth: false,
      inputComponent: "input",
      inputProps: {},
      multiline: false,
      type: "text",
      disableInjectingGlobalStyles: false,
    }),
  selfPropNames: [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "classes",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disableInjectingGlobalStyles",
    "disabled",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "required",
    "rows",
    "size",
    "startAdornment",
    "type",
    "value",
  ],
  utilityClass: getInputBaseUtilityClass,
  autoCallUseClasses: false,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      `color${capitalize(ownerState.color)}`,
      !!ownerState.disabled && "disabled",
      !!ownerState.error && "error",
      !!ownerState.fullWidth && "fullWidth",
      ownerState.focused && "focused",
      !!ownerState.formControl && "formControl",
      ownerState.size === "small" && "sizeSmall",
      ownerState.multiline && "multiline",
      !!ownerState.startAdornment && "adornedStart",
      !!ownerState.endAdornment && "adornedEnd",
      !!ownerState.hiddenLabel && "hiddenLabel",
    ],
    input: [
      "input",
      !!ownerState.disabled && "disabled",
      ownerState.type === "search" && "inputTypeSearch",
      ownerState.multiline && "inputMultiline",
      ownerState.size === "small" && "inputSizeSmall",
      !!ownerState.hiddenLabel && "inputHiddenLabel",
      !!ownerState.startAdornment && "inputAdornedStart",
      !!ownerState.endAdornment && "inputAdornedEnd",
    ],
  }),
});

export const rootOverridesResolver = (
  props: { ownerState: OwnerState },
  styles: Record<string, string>
) => {
  const ownerState = props.ownerState;

  return [
    styles.root,
    !!ownerState.formControl && styles.formControl,
    !!ownerState.startAdornment && styles.adornedStart,
    !!ownerState.endAdornment && styles.adornedEnd,
    !!ownerState.error && styles.error,
    ownerState.size === "small" && styles.sizeSmall,
    ownerState.multiline && styles.multiline,
    ownerState.color && styles[`color${capitalize(ownerState.color)}`],
    !!ownerState.fullWidth && styles.fullWidth,
    !!ownerState.hiddenLabel && styles.hiddenLabel,
  ];
};

export const inputOverridesResolver = (
  props: { ownerState: OwnerState },
  styles: Record<string, string>
) => {
  const ownerState = props.ownerState;

  return [
    styles.input,
    ownerState.size === "small" && styles.inputSizeSmall,
    ownerState.multiline && styles.inputMultiline,
    ownerState.type === "search" && styles.inputTypeSearch,
    !!ownerState.startAdornment && styles.inputAdornedStart,
    !!ownerState.endAdornment && styles.inputAdornedEnd,
    !!ownerState.hiddenLabel && styles.inputHiddenLabel,
  ];
};

export const InputBaseRoot = styled("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver as any,
})<OwnerState>(({ theme, ownerState }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  lineHeight: "1.4375em", // 23px
  boxSizing: "border-box", // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses.disabled}`]: {
    color: theme.palette.text.disabled,
    cursor: "default",
  },
  ...(ownerState.multiline && {
    padding: "4px 0 5px",
    ...(ownerState.size === "small" && {
      paddingTop: 1,
    }),
  }),
  ...(ownerState.fullWidth && {
    width: "100%",
  }),
}));

export const InputBaseComponent = styled("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver as any,
})<OwnerState>(({ theme, ownerState }) => {
  const light = theme.palette.mode === "light";
  const placeholder = {
    color: "currentColor",
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter,
    }),
  };

  const placeholderHidden = {
    opacity: "0 !important",
  };

  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5,
  };

  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em", // Reset 23pxthe native input line-height
    margin: 0, // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%", // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder, // Firefox 19+
    "&:-ms-input-placeholder": placeholder, // IE11
    "&::-ms-input-placeholder": placeholder, // Edge
    "&:focus": {
      outline: 0,
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none",
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none",
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden, // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden, // IE11
      "&::-ms-input-placeholder": placeholderHidden, // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible, // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible, // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible, // Edge
    },
    [`&.${inputBaseClasses.disabled}`]: {
      opacity: 1, // Reset iOS opacity
      WebkitTextFillColor: theme.palette.text.disabled, // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill",
    },
    ...(ownerState.size === "small" && {
      paddingTop: 1,
    }),
    ...(ownerState.multiline && {
      height: "auto",
      resize: "none",
      padding: 0,
      paddingTop: 0,
    }),
    ...(ownerState.type === "search" && {
      // Improve type search style.
      MozAppearance: "textfield",
    }),
  };
});

const inputGlobalStyles = () => (
  <>
    {
      <GlobalStyles
        styles={{
          "@keyframes mui-auto-fill": { from: { display: "block" } },
          "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
        }}
      />
    }
  </>
);

/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [InputBase API](https://mui.com/api/input-base/)
 */
const InputBase = $.component(function InputBase({
  allProps,
  otherProps,
  props,
}) {
  const inputValue = createMemo(
    () =>
      (props.inputProps.value != null
        ? props.inputProps.value
        : props.value) as string | undefined
  );

  const isControlled = (inputValue() ?? null) !== null;

  const [value, setValue] = useControlled({
    controlled: () => inputValue(),
    default: () => props.defaultValue,
    name: "InputBase",
  });

  const inputRef = createRef<HTMLInputElement | HTMLTextAreaElement>({
    ref: (instance: HTMLInputElement | HTMLTextAreaElement) => {
      if (process.env.NODE_ENV !== "production") {
        if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
          console.error(
            [
              "MUI: You have provided a `inputComponent` to the input component",
              "that does not correctly handle the `ref` prop.",
              "Make sure the `ref` prop is called with a HTMLInputElement.",
            ].join("\n")
          );
        }
      }
      if (typeof props.inputRef === "function") props.inputRef(instance);
    },
  });

  let lastStart: number | undefined;

  if (isControlled) {
    onMount(() => {
      prepareControlledInput({
        element: inputRef.ref,
        onChange: (event, value, start) => {
          lastStart = start;
          if (typeof props.inputProps.onChange === "function") {
            props.inputProps.onChange(event as any);
          }
          setValue(value);
          if (typeof props.onChange === "function") {
            props.onChange(event as any, value);
          }
        },
      });
    });
  } else {
    onMount(() => {
      inputRef.ref.addEventListener("input", (event) => {
        const value = inputRef.ref.value;
        if (typeof props.inputProps.onChange === "function") {
          props.inputProps.onChange(event as any);
        }
        setValue(value);
        if (typeof props.onChange === "function") {
          props.onChange(event as any, value);
        }
      });
    });
  }

  createEffect<boolean>((loadDefaultValue) => {
    if (isControlled || loadDefaultValue) {
      const v = value();
      if (typeof v === "string") {
        setControlledInputValue({
          element: inputRef.ref,
          valueAndStart: [v, lastStart],
        });
      }
    }
    return false;
  }, true);

  const [focused, setFocused] = createSignal(false);
  const muiFormControl = useFormControl();

  if (process.env.NODE_ENV !== "production") {
    createEffect(() => {
      muiFormControl?.registerEffect?.();
    });
  }

  const partialFcs = formControlState({
    props: allProps,
    muiFormControl,
    states: [
      "color",
      "disabled",
      "error",
      "hiddenLabel",
      "size",
      "required",
      "filled",
    ],
  });

  const fcs = mergeProps(
    () => partialFcs,
    () => ({
      focused: muiFormControl ? muiFormControl.focused : focused(),
    })
  );

  // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.
  createEffect(() => {
    if (!muiFormControl && props.disabled && focused()) {
      setFocused(false);
      if (typeof props.onBlur === "function") props.onBlur?.(null as any);
    }
  });

  const onFilled = createMemo(() => muiFormControl && muiFormControl.onFilled);
  const onEmpty = createMemo(() => muiFormControl && muiFormControl.onEmpty);

  const checkDirty = (obj: { value: any }) => {
    if (isFilled(obj)) {
      onFilled()?.();
    } else {
      onEmpty()?.();
    }
  };

  createRenderEffect(() => {
    if (isControlled) {
      checkDirty({ value: value() });
    }
  });

  // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).
  onMount(() => {
    checkDirty(inputRef.ref);
  });

  const isMultilineInput = createMemo(
    () => props.multiline && props.inputComponent === "input"
  );
  const InputComponent = createMemo(() => {
    const InputComponent = props.inputComponent;
    if (isMultilineInput()) {
      // [review]
      //InputComponent = TextareaAutosize;
    }
    return InputComponent;
  });

  const inputProps = createMemo(() => {
    let inputProps = props.inputProps;
    if (isMultilineInput()) {
      if (props.rows) {
        if (process.env.NODE_ENV !== "production") {
          if (props.minRows || props.maxRows) {
            console.warn(
              "MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."
            );
          }
        }
        inputProps = {
          type: undefined,
          ["minRows" as any]: props.rows,
          ["maxRows" as any]: props.rows,
          ...inputProps,
        };
      } else {
        inputProps = {
          type: undefined,
          ["maxRows" as any]: props.maxRows,
          ["minRows" as any]: props.minRows,
          ...inputProps,
        };
      }
    }
    return mergeProps(inputProps, () => props.componentsProps.input || {});
  });

  createEffect(() => {
    muiFormControl?.setAdornedStart(Boolean(props.startAdornment));
  });

  const ownerState = mergeProps(allProps, () => ({
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    hiddenLabel: fcs.hiddenLabel,
    size: fcs.size,
  }));

  const classes = $.useClasses(ownerState);
  const Root = createMemo(() => props.components.Root || InputBaseRoot);
  const rootProps = createMemo(() => props.componentsProps.root || {});
  const Input = createMemo(() => props.components.Input || InputBaseComponent);

  const rootOwnerState = mergeProps(
    () => ownerState,
    () => ((rootProps() as any)["ownerState"] || {}) as typeof ownerState
  );
  const inputOwnerState = mergeProps(
    () => ownerState,
    () => ((inputProps() as any)["ownerState"] || {}) as typeof ownerState
  );

  const renderSuffixProps = mergeProps(fcs, () => ({
    startAdornment: props.startAdornment,
  }));

  const suffix = createMemo(() => props.renderSuffix?.(renderSuffixProps));

  return (
    <>
      {!props.disableInjectingGlobalStyles && inputGlobalStyles()}
      <Dynamic
        {...rootProps()}
        {...otherProps}
        component={Root() as "input"}
        {...(!isHostComponent(Root()) && {
          ownerState: rootOwnerState,
        })}
        onClick={(event: any) => {
          if (inputRef.ref && event.currentTarget === event.target) {
            inputRef.ref.focus();
          }

          if (typeof otherProps.onClick === "function") {
            otherProps.onClick(event);
          }
        }}
        className={clsx(
          classes.root,
          rootProps().className,
          otherProps.className
        )}
      >
        {props.startAdornment}

        <FormControlContext.Provider value={undefined}>
          <Dynamic<"input" | "textarea">
            component={Input() as "input" | "textarea"}
            ownerState={ownerState}
            aria-invalid={fcs.error}
            aria-describedby={props["aria-describedby"]}
            autocomplete={props.autoComplete}
            autofocus={props.autoFocus}
            disabled={fcs.disabled}
            id={props.id}
            onAnimationStart={
              ((event) => {
                // Provide a fake value as Chrome might not let you access it for security reasons.
                checkDirty(
                  event.animationName === "mui-auto-fill-cancel"
                    ? inputRef.ref
                    : { value: "x" }
                );
              }) as AnimationEventHandler<
                HTMLInputElement | HTMLTextAreaElement
              >
            }
            name={props.name}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            required={fcs.required}
            rows={props.rows}
            onKeyDown={props.onKeyDown}
            onKeyUp={props.onKeyUp}
            type={props.type}
            {...inputProps()}
            {...(!isHostComponent(Input()) && {
              as: InputComponent(),
              ownerState: inputOwnerState,
            })}
            ref={inputRef}
            className={clsx(classes.input, inputProps().className)}
            onBlur={
              ((event) => {
                props.onBlur?.(event);
                if (typeof props.inputProps.onBlur === "function") {
                  props.inputProps.onBlur(event as any);
                }

                if (muiFormControl && muiFormControl.onBlur) {
                  muiFormControl.onBlur();
                } else {
                  setFocused(false);
                }
              }) as FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
            }
            onInput={
              ((event) => {
                if (!isControlled) {
                  const element = (event.target ||
                    inputRef.ref) as typeof inputRef.ref;
                  if (element == null) {
                    throw new Error(
                      "MUI: Expected valid input target. " +
                        "Did you use a custom `inputComponent` and forget to forward refs? " +
                        "See https://mui.com/r/input-component-ref-interface for more info."
                    );
                  }

                  checkDirty({
                    value: element.value,
                  });
                }
              }) as InputEventHandler<HTMLInputElement | HTMLTextAreaElement>
            }
            onFocus={
              ((event) => {
                // Fix a bug with IE11 where the focus/blur events are triggered
                // while the component is disabled.
                if (fcs.disabled) {
                  event.stopPropagation();
                  return;
                }

                if (typeof props.onFocus === "function") {
                  props.onFocus(event);
                }
                if (typeof props.inputProps.onFocus === "function") {
                  props.inputProps.onFocus(event as any);
                }

                if (muiFormControl && muiFormControl.onFocus) {
                  muiFormControl.onFocus();
                } else {
                  setFocused(true);
                }
              }) as FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
            }
          />
        </FormControlContext.Provider>
        {props.endAdornment}
        {suffix()}
      </Dynamic>
    </>
  );
});

export default InputBase;
