import FormControlContext from "./FormControlContext";
import { useContext } from "solid-js";

export default function useFormControl() {
  return useContext(FormControlContext);
}
