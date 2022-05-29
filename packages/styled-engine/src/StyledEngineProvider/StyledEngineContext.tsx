import { createContext } from "solid-js";

export type StyledEngineContextValue = {
  cache?: {
    nonce?: string;
  };
};

const StyledEngineContext = createContext<StyledEngineContextValue>({});

export default StyledEngineContext;
