import { createContext } from "solid-js";

export interface AccordionContextValue {
  expanded: boolean;
  disabled: boolean;
  toggle: (event: Event) => void;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

export default AccordionContext;
