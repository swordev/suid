import { createContext } from "solid-js";

export interface StyledEngineContextValue {
  nonce?: string;
}

const StyledEngineContext = createContext<StyledEngineContextValue>({});

export default StyledEngineContext;
