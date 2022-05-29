import StyledEngineContext, {
  StyledEngineContextValue,
} from "./StyledEngineContext";
import { JSXElement } from "solid-js";

export default function StyledEngineProvider(inProps: {
  children: JSXElement;
  value?: StyledEngineContextValue;
}) {
  return (
    <StyledEngineContext.Provider value={inProps.value || {}}>
      {inProps.children}
    </StyledEngineContext.Provider>
  );
}
