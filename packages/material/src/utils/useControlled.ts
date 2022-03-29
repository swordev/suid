import { createEffect, createSignal, createMemo, on, Accessor } from "solid-js";

export interface UseControlledProps<T = unknown> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled: Accessor<T | undefined>;
  /**
   * The default value when uncontrolled.
   */
  default: Accessor<T | undefined>;
  /**
   * The component name displayed in warnings.
   */
  name: string;
  /**
   * The name of the state variable displayed in warnings.
   */
  state?: string;
}

export default function useControlled<T>(props: UseControlledProps<T>) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const isControlled = props.controlled() !== undefined;
  const [valueState, setValue] = createSignal(props.default());
  const value = createMemo(() =>
    isControlled ? props.controlled() : valueState()
  );

  if (isControlled)
    createEffect(() => {
      setValue(() => value());
    });

  if (process.env.NODE_ENV !== "production") {
    createEffect(() => {
      if (isControlled !== (props.controlled() !== undefined)) {
        console.error(
          [
            `MUI: A component is changing the ${
              isControlled ? "" : "un"
            }controlled ${props.state ?? "value"} state of ${
              props.name
            } to be ${isControlled ? "un" : ""}controlled.`,
            "Elements should not switch from uncontrolled to controlled (or vice versa).",
            `Decide between using a controlled or uncontrolled ${props.name} ` +
              "element for the lifetime of the component.",
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            "More info: https://fb.me/react-controlled-components",
          ].join("\n")
        );
      }
    });

    let first = true;

    createEffect(
      on(
        () => props.default(),
        () => {
          if (first) {
            first = false;
            return;
          } else if (!isControlled) {
            console.error(
              [
                `MUI: A component is changing the default ${
                  props.state ?? "value"
                } state of an uncontrolled ${
                  props.name
                } after being initialized. ` +
                  `To suppress this warning opt to use a controlled ${props.name}.`,
              ].join("\n")
            );
          }
        }
      )
    );
  }

  const setValueIfUncontrolled = (newValue: T) => {
    if (!isControlled) {
      setValue(newValue as any);
    }
  };

  return [value, setValueIfUncontrolled] as const;
}
