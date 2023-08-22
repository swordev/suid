import { isFilled } from "../InputBase/utils";
import Menu from "../Menu/Menu";
import {
  MenuItemParentContext,
  MenuItemProps,
  MenuItemTypeMap,
} from "../MenuItem";
import {
  nativeSelectIconStyles,
  nativeSelectSelectStyles,
} from "../NativeSelect/NativeSelectInput";
import styled, { skipRootProps } from "../styles/styled";
import useControlled from "../utils/useControlled";
import { SelectInputTypeMap } from "./SelectInputProps";
import selectClasses, { getSelectUtilityClasses } from "./selectClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { EventParam, PropsOf } from "@suid/types";
import capitalize from "@suid/utils/capitalize";
import ownerDocument from "@suid/utils/ownerDocument";
import clsx from "clsx";
import {
  children,
  createEffect,
  createMemo,
  createSignal,
  JSXElement,
  mergeProps,
  on,
  splitProps,
} from "solid-js";

type OwnerState = PropsOf<SelectInputTypeMap> & {
  variant: Exclude<SelectInputTypeMap["props"]["variant"], undefined>;
};

const $ = createComponentFactory<SelectInputTypeMap, OwnerState>()({
  name: "MuiSelectInput",
  selfPropNames: [
    "autoFocus",
    "autoWidth",
    "defaultOpen",
    "disabled",
    "IconComponent",
    "inputRef",
    "MenuProps",
    "multiple",
    "name",
    "native",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "value",
    "variant",
  ],
  utilityClass: getSelectUtilityClasses,
  slotClasses: (ownerState) => ({
    select: [
      "select",
      ownerState.variant,
      ownerState.disabled && "disabled",
      ownerState.multiple && "multiple",
    ],
    icon: [
      "icon",
      `icon${capitalize(ownerState.variant)}`,
      ownerState.open && "iconOpen",
      ownerState.disabled && "disabled",
    ],
    nativeInput: ["nativeInput"],
  }),
});

const SelectSelect = styled("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      // Win specificity over the input base
      { [`&.${selectClasses.select}`]: styles.select },
      { [`&.${selectClasses.select}`]: styles[ownerState.variant] },
      { [`&.${selectClasses.multiple}`]: styles.multiple },
    ];
  },
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses.select}`]: {
    height: "auto", // Resets for multiple select with chips
    minHeight: "1.4375em", // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const SelectIcon = styled("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.icon,
      ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`],
      ownerState.open && styles.iconOpen,
    ];
  },
})(nativeSelectIconStyles);

const SelectNativeInput = styled("input", {
  skipProps: skipRootProps,
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles) => styles.nativeInput,
})<OwnerState>({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box",
});

function areEqualValues(a: unknown, b: unknown): boolean {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

/**
 * @ignore - internal component.
 */
const SelectInput = $.defineComponent(function SelectInput(props) {
  const ref = createRef<typeof props.ref>(props);

  const [, other] = splitProps(props, [
    "ref",
    "sx", // [new]
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "class",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      MenuProps: {} as NonNullable<typeof props.MenuProps>,
      SelectDisplayProps: {} as NonNullable<typeof props.SelectDisplayProps>,
      variant: "standard" as const,
    },
    props
  );

  const [value, setValueState] = useControlled({
    controlled: () => props.value,
    default: () => props.defaultValue,
    name: "Select",
  });

  const [openState, setOpenState] = useControlled({
    controlled: () => props.open,
    default: () => props.defaultOpen,
    name: "Select",
  });

  const inputRef = createRef<HTMLInputElement>();
  const displayRef = createRef<HTMLElement>();
  const [displayNode, setDisplayNode] = createSignal<HTMLElement | null>(null);
  const isOpenControlled = props.open != null;
  const [menuMinWidthState, setMenuMinWidthState] = createSignal<number | null>(
    null
  );
  const handleDisplayRef = (node: HTMLElement) => {
    displayRef.current = node;
    setDisplayNode(node);
  };

  const action = {
    nodeName: "INPUT",
    get node() {
      return inputRef.current;
    },
    addEventListener(eventName: string, callback: () => any) {
      if (eventName !== "input")
        throw new Error(`Invalid event name: ${eventName}`);
      inputRef.current.addEventListener(eventName, callback);
    },
    get value() {
      return value();
    },
    set value(v) {
      setValueState(v);
    },
    focus() {
      inputRef.current.focus();
    },
  };

  // Resize menu on `defaultOpen` automatic toggle.
  createEffect(
    on(
      () => [displayNode(), props.autoWidth],
      () => {
        if (
          props.defaultOpen &&
          openState() &&
          displayNode() &&
          !isOpenControlled
        ) {
          setMenuMinWidthState(
            props.autoWidth ? null : displayNode()!.clientWidth
          );
          displayRef.current.focus();
        }
      }
    )
  );
  // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
  // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.
  createEffect(() => {
    if (props.autoFocus) {
      displayRef.current.focus();
    }
  });

  let clickHandler: (() => any) | undefined;

  createEffect(() => {
    if (!props.labelId) {
      return;
    }
    const label = ownerDocument(displayRef.current).getElementById(
      props.labelId
    );
    if (label) {
      if (clickHandler) label.removeEventListener("click", clickHandler);
      clickHandler = () => {
        if (getSelection()!.isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", clickHandler);
    }
  });

  const update = (open: boolean, event: Event) => {
    // [review] FocusTrap
    if (!open) displayRef.current.focus();

    if (open) {
      if (props.onOpen) {
        props.onOpen(event);
      }
    } else if (props.onClose) {
      props.onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(props.autoWidth ? null : displayNode()!.clientWidth);
      setOpenState(open);
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    if (props.disabled || props.readOnly) return;
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    }
    // Hijack the default focus behavior.
    event.preventDefault();
    displayRef.current.focus();

    update(true, event);
  };

  const handleClose = (event: Event) => {
    update(false, event);
  };

  const selected = (itemProps: MenuItemProps) => {
    const v = value();

    if (props.multiple) {
      if (!Array.isArray(v)) {
        throw new Error(
          "MUI: The `value` prop must be an array " +
            "when using the `Select` component with `multiple`."
        );
      }
      return v.some((v) => areEqualValues(v, itemProps.value));
    } else {
      return areEqualValues(v, itemProps.value);
    }
  };

  function mountMenuItem(itemProps: MenuItemProps) {
    const isSelected = createMemo(() => selected(itemProps));

    const childProps: MenuItemProps = mergeProps(itemProps, {
      get "aria-selected"() {
        return isSelected();
      },
      onClick: (event) => handleItemClick(event, childProps, itemProps),
      onKeyUp: (event: EventParam<HTMLLIElement, KeyboardEvent>) => {
        if (event.key === " ") {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (typeof itemProps.onKeyUp === "function") {
          itemProps.onKeyUp(event);
        }
      },
      autoFocus: isSelected(),
      role: "option",
      get selected() {
        return isSelected();
      },
      value: undefined, // The value is most likely not a valid HTML attribute.
      "data-value": itemProps.value, // Instead, we provide it as a data attribute.
    } as MenuItemProps);
    return childProps;
  }

  // [pending] Support autofill.
  /*const handleChange = (event: SelectChangeEvent<any>) => {
      const items = childrenArray();
      const index = items
        .map((child) => child.props.value)
        .indexOf(event.target.value);

      if (index === -1) {
        return;
      }

      const child = items[index];
      setValueState(child.props.value);
      if (props.onChange) {
        props.onChange(event, event.target);
      }
    };*/

  const handleItemClick = (
    event: EventParam<HTMLLIElement, MouseEvent>,
    itemProps: PropsOf<MenuItemTypeMap>,
    prevProps: PropsOf<MenuItemTypeMap>
  ) => {
    let newValue: any;
    const child = { props: itemProps };

    const multiple = props.multiple;
    // We use the tabindex attribute to signal the available options.
    if (!event?.currentTarget?.hasAttribute("tabindex")) {
      return;
    }

    if (multiple) {
      newValue = Array.isArray(value()) ? value().slice() : [];
      const itemIndex = value().indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }

    if (typeof prevProps.onClick === "function") {
      prevProps.onClick(event);
    }

    if (value() !== newValue) {
      const inputEvent = new CustomEvent("input");
      Object.defineProperty(inputEvent, "target", {
        writable: false,
        value: {
          name: (itemProps as any).name,
          get value() {
            return newValue;
          },
          set value(v) {
            action.value = v;
          },
        },
      });
      inputRef.current.dispatchEvent(inputEvent);

      setValueState(newValue);

      if (typeof itemProps.onChange === "function") {
        (itemProps.onChange as any)(inputEvent, inputEvent.target);
      }
    }

    if (!multiple) {
      update(false, event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!props.readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on MacOS, but it's recommended by
        // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
        "Enter",
      ];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  const open = () => displayNode() !== null && !!openState();

  const handleBlur = (event: EventParam<HTMLElement, FocusEvent>) => {
    // if open event.stopImmediatePropagation
    if (!open() && props.onBlur) {
      // Preact support, target is read only property on a native event.
      Object.defineProperty(event, "target", {
        writable: true,
        value: { value: value(), name: props.name },
      });
      props.onBlur(event);
    }
  };

  /*if (process.env.NODE_ENV !== "production") {
      createEffect(
        on(
          () => [foundMatch, items(), props.multiple, props.name, value()],
          () => {
            if (!foundMatch && !props.multiple && value() !== "") {
              const values = items().filter((child => isComponentObject(child, MenuItem)).map((child) => child.props.value);
              console.warn(
                [
                  `MUI: You have provided an out-of-range value \`${value}\` for the select ${
                    props.name ? `(name="${props.name}") ` : ""
                  }component.`,
                  "Consider providing a value that matches one of the available options or ''.",
                  `The available values are ${
                    values
                      .filter((x) => x != null)
                      .map((x) => `\`${x}\``)
                      .join(", ") || '""'
                  }.`,
                ].join("\n")
              );
            }
          }
        )
      );
    }*/

  // Avoid performing a layout computation in the render method.
  const menuMinWidth = () => {
    let menuMinWidth = menuMinWidthState();

    if (!props.autoWidth && isOpenControlled && displayNode()) {
      menuMinWidth = displayNode()!.clientWidth;
    }

    return menuMinWidth;
  };

  const PaperProps = mergeProps(() => baseProps.MenuProps.PaperProps, {
    style: mergeProps(
      {
        get "min-width"() {
          const v = menuMinWidth();
          return typeof v === "number" ? `${v}px` : undefined;
        },
      },
      () =>
        baseProps.MenuProps.PaperProps != null
          ? baseProps.MenuProps.PaperProps.style
          : null
    ),
  });

  const MenuListProps = mergeProps(
    {
      get "aria-labelledby"() {
        return props.labelId;
      },
      ["role" as any]: "listbox",
      disableListWrap: true,
    },
    () => baseProps.MenuProps.MenuListProps
  );

  const tabIndex = () => {
    if (typeof props.tabIndex !== "undefined") {
      return props.tabIndex;
    } else {
      return props.disabled ? undefined : 0;
    }
  };

  const buttonId = () =>
    baseProps.SelectDisplayProps.id ||
    (props.name ? `mui-component-select-${props.name}` : undefined);

  const ownerState = mergeProps(props, {
    get variant() {
      return baseProps.variant;
    },
    get value() {
      return value();
    },
    get open() {
      return open();
    },
  });

  const classes = $.useClasses(ownerState);
  const nativeSelectValue = () => {
    const v = value();
    return Array.isArray(v) ? v.join(",") : v;
  };

  const displayValue = () => {
    const currentValue = value();
    let result: JSXElement = null;
    if (isFilled({ value: currentValue }) || props.displayEmpty) {
      if (props.renderValue) return props.renderValue(currentValue);
      else {
        // hacky but ssr compatible way to get the children of the menu items
        result = [];
        children(() => (
          <MenuItemParentContext.Provider
            value={{
              mount: (itemProps) => {
                if (
                  props.multiple
                    ? currentValue.some((v: any) =>
                        areEqualValues(v, itemProps.value)
                      )
                    : areEqualValues(currentValue, itemProps.value)
                )
                  (result as JSXElement[]).push(itemProps.children);
                return null;
              },
            }}
          >
            {props.children}
          </MenuItemParentContext.Provider>
        ));
      }
    }

    if (result) {
      if (Array.isArray(result)) {
        if (result.length > 0) return result.join(", ");
      } else return result;
    }

    /* So the vertical align positioning algorithm kicks in.*/
    return <span class="notranslate">&#8203;</span>;
  };

  return (
    <>
      <SelectSelect
        ref={handleDisplayRef}
        tabIndex={tabIndex()}
        role="button"
        aria-disabled={props.disabled ? "true" : undefined}
        aria-expanded={open() ? "true" : "false"}
        aria-haspopup="listbox"
        aria-label={props["aria-label"]}
        aria-labelledby={
          [props.labelId, buttonId()].filter(Boolean).join(" ") || undefined
        }
        aria-describedby={props["aria-describedby"]}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onBlur={handleBlur}
        onFocus={props.onFocus}
        {...baseProps.SelectDisplayProps}
        ownerState={ownerState}
        sx={props.sx}
        class={clsx(
          classes.select,
          props.class,
          baseProps.SelectDisplayProps.class
        )}
        // The id is required for proper a11y
        id={buttonId()}
      >
        {displayValue()}
      </SelectSelect>

      <SelectNativeInput
        value={nativeSelectValue()}
        data-value={nativeSelectValue()}
        name={props.name}
        aria-hidden
        ref={(e) => {
          inputRef(e);
          if (typeof props.inputRef === "function") props.inputRef(action);
          ref(action as any);
        }}
        onChange={props.onChange as any /* handleChange */}
        tabIndex={-1}
        disabled={props.disabled}
        class={classes.nativeInput}
        autofocus={props.autoFocus}
        ownerState={ownerState}
        {...other}
      />
      <SelectIcon
        as={props.IconComponent}
        class={classes.icon}
        ownerState={ownerState}
      />
      <MenuItemParentContext.Provider value={{ mount: mountMenuItem }}>
        <Menu
          id={`menu-${props.name || ""}`}
          anchorEl={displayNode()}
          open={open()}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoFocus={false}
          {...baseProps.MenuProps}
          MenuListProps={MenuListProps}
          PaperProps={PaperProps}
        >
          {props.children}
        </Menu>
      </MenuItemParentContext.Provider>
    </>
  );
});
export default SelectInput;
