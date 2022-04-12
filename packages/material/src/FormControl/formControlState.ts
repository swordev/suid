import { FormControlState } from ".";
import { batch, createComputed } from "solid-js";
import { createMutable } from "solid-js/store";

export default function formControlState<
  S extends keyof FormControlState
>(data: {
  props: Record<string, any>;
  states: S[];
  muiFormControl?: FormControlState;
}) {
  const compose = () => {
    return data.states.reduce((acc, state) => {
      acc[state] = data.props[state];
      if (data.muiFormControl) {
        if (typeof data.props[state] === "undefined") {
          acc[state] = data.muiFormControl[state];
        }
      }

      return acc;
    }, {} as Pick<FormControlState, S>);
  };
  const object: ReturnType<typeof compose> = createMutable({} as any);

  createComputed(() => {
    const newObject = compose();
    batch(() => {
      for (const key in newObject) {
        if (object[key] !== newObject[key]) object[key] = newObject[key];
      }
      const newKeys = Object.keys(newObject);
      for (const key in object) {
        if (!newKeys.includes(key)) delete object[key];
      }
    });
  });

  return object as Readonly<ReturnType<typeof compose>>;
}
