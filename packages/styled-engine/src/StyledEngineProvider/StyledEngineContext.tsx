import { createContext } from "solid-js";

export type StyledEngineContextValue = {};

const StyledEngineContext = createContext<StyledEngineContextValue>({});

export default StyledEngineContext;
