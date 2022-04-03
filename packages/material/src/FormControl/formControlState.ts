import { FormControlState } from ".";
import { createMemo } from "solid-js";

export default function formControlState<
  S extends keyof FormControlState
>(data: {
  props: Record<string, any>;
  states: S[];
  muiFormControl?: FormControlState;
}) {
  return createMemo(() => {
    return data.states.reduce((acc, state) => {
      acc[state] = data.props[state];

      if (data.muiFormControl) {
        if (typeof data.props[state] === "undefined") {
          acc[state] = data.muiFormControl[state];
        }
      }

      return acc;
    }, {} as Pick<FormControlState, S>);
  });
}
