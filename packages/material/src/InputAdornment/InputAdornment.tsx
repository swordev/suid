import { InputAdornmentTypeMap } from ".";
import FormControlContext from "../FormControl/FormControlContext";
import useFormControl from "../FormControl/useFormControl";
import Typography from "../Typography";
import styled from "../styles/styled";
import { getInputAdornmentUtilityClass } from "./inputAdornmentClasses";
import inputAdornmentClasses from "./inputAdornmentClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { InPropsOf } from "@suid/types";
import capitalize from "@suid/utils/capitalize";
import clsx from "clsx";
import { splitProps, mergeProps, JSXElement, children, Show } from "solid-js";

type OwnerState = Pick<
  InPropsOf<InputAdornmentTypeMap>,
  "disablePointerEvents" | "position" | "variant"
> & {
  size?: any;
  hiddenLabel?: boolean;
};

const $ = createComponentFactory<InputAdornmentTypeMap, OwnerState>()({
  name: "MuiInputAdornment",
  selfPropNames: [
    "classes",
    "children",
    "disablePointerEvents",
    "disableTypography",
    "position",
    "variant",
  ],
  utilityClass: getInputAdornmentUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.disablePointerEvents && "disablePointerEvents",
      ownerState.position && `position${capitalize(ownerState.position)}`,
      ownerState.variant,
      ownerState.hiddenLabel && "hiddenLabel",
      ownerState.size && `size${capitalize(ownerState.size)}`,
    ],
  }),
});

const InputAdornmentRoot = styled("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      styles[`position${capitalize(ownerState.position)}`],
      ownerState.disablePointerEvents === true && styles.disablePointerEvents,
      styles[ownerState.variant],
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  display: "flex",
  height: "0.01em", // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: theme.palette.action.active,
  ...(ownerState.variant === "filled" && {
    // Styles applied to the root element if `variant="filled"`.
    [`&.${inputAdornmentClasses.positionStart}&:not(.${inputAdornmentClasses.hiddenLabel})`]:
      {
        marginTop: 16,
      },
  }),
  ...(ownerState.position === "start" && {
    // Styles applied to the root element if `position="start"`.
    marginRight: 8,
  }),
  ...(ownerState.position === "end" && {
    // Styles applied to the root element if `position="end"`.
    marginLeft: 8,
  }),
  ...(ownerState.disablePointerEvents === true && {
    // Styles applied to the root element if `disablePointerEvents={true}`.
    pointerEvents: "none",
  }),
}));

/**
 *
 * Demos:
 *
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 *
 * - [InputAdornment API](https://mui.com/api/input-adornment/)
 */
const InputAdornment = $.defineComponent(function InputAdornment(inProps) {
  const ref = createRef(inProps);
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "children",
    "class",
    "component",
    "disablePointerEvents",
    "disableTypography",
    "position",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      component: "div",
      disablePointerEvents: false,
      disableTypography: false,
    },
    props
  );

  const muiFormControl = useFormControl();
  const variant = () => {
    let variant = props.variant;

    if (variant && muiFormControl?.variant) {
      if (process.env.NODE_ENV !== "production") {
        if (variant === muiFormControl?.variant) {
          console.error(
            "MUI: The `InputAdornment` variant infers the variant prop " +
              "you do not have to provide one."
          );
        }
      }
    }

    if (muiFormControl && !variant) {
      variant = muiFormControl.variant;
    }
    return variant;
  };

  const ownerState: OwnerState = {
    get hiddenLabel() {
      return muiFormControl?.hiddenLabel;
    },
    get size() {
      return muiFormControl?.size;
    },
    get disablePointerEvents() {
      return baseProps.disablePointerEvents;
    },
    get position() {
      return props.position;
    },
    get variant() {
      return variant();
    },
  };

  const classes = $.useClasses(ownerState);

  function RootChildren(props: {
    children: JSXElement;
    position: string;
    disableTypography: boolean;
  }) {
    const c = children(() => props.children);
    return (
      <Show
        when={typeof c() === "string" && !props.disableTypography}
        fallback={
          <>
            {/* To have the correct vertical alignment baseline */}
            {props.position === "start" ? (
              /* notranslate needed while Google Translate will not fix zero-width space issue */
              <span class="notranslate">&#8203;</span>
            ) : null}
            {props.children}
          </>
        }
      >
        <Typography color="text.secondary">{c()}</Typography>
      </Show>
    );
  }
  return (
    <FormControlContext.Provider value={undefined}>
      <InputAdornmentRoot
        as={baseProps.component}
        ownerState={ownerState}
        class={clsx(classes.root, props.class)}
        ref={ref}
        {...other}
      >
        <RootChildren
          position={props.position}
          disableTypography={baseProps.disableTypography}
        >
          {props.children}
        </RootChildren>
      </InputAdornmentRoot>
    </FormControlContext.Provider>
  );
});

export default InputAdornment;
