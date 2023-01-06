import { createContext } from "solid-js";

export type StyledEngineContextValue = {
  cache?: {
    nonce?: string;
  };
  injectFirst?: boolean;
};

const StyledEngineContext = createContext<StyledEngineContextValue>({});

export default StyledEngineContext;
