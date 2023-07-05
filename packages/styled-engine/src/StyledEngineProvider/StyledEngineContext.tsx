import { createContext } from "solid-js";

export type StyledEngineContextValue = {
  cache?: {
    nonce?: string;
  };
  injectFirst?: boolean;
  /**
   * @default true
   */
  cleanupStyles?: boolean;
};

export const defaultStyledEngineContextValue: StyledEngineContextValue = {
  cleanupStyles: true,
};

const StyledEngineContext = createContext<StyledEngineContextValue>(
  defaultStyledEngineContextValue
);

export default StyledEngineContext;
