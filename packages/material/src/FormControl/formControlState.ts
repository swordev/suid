export default function formControlState(data: {
  props: Record<string, any>;
  states: any[];
  muiFormControl?: Record<string, any>;
}) {
  return data.states.reduce((acc, state) => {
    acc[state] = data.props[state];

    if (data.muiFormControl) {
      if (typeof data.props[state] === "undefined") {
        acc[state] = data.muiFormControl[state];
      }
    }

    return acc;
  }, {});
}
