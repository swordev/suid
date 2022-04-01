import FormControlLabelContext from "./FormControlLabelContext";
import { useContext } from "solid-js";

export default function useFormControlLabel() {
  return useContext(FormControlLabelContext);
}
