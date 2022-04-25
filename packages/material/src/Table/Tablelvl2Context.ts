import { createContext } from "solid-js";

export interface Tablelvl2ContextProps {
  variant: "head" | "body" | "footer";
}

const Tablelvl2Context = createContext<Tablelvl2ContextProps | undefined>();

export default Tablelvl2Context;
