import { createContext } from "solid-js";

interface DialogContextValue {
  titleId?: string;
}

const DialogContext = createContext<DialogContextValue>({});

export default DialogContext;
