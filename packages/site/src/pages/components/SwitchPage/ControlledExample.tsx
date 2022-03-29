import Switch from "@suid/material/Switch";
import { createSignal } from "solid-js";

export default function ControlledExample() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Switch
      checked={checked()}
      onChange={(event, value) => {
        setChecked(value);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
