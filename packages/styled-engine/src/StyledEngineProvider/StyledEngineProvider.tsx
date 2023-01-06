import StyledEngineContext, {
  StyledEngineContextValue,
} from "./StyledEngineContext";
import { JSXElement, mergeProps } from "solid-js";

export default function StyledEngineProvider(
  inProps: {
    children: JSXElement;
    value?: StyledEngineContextValue;
  } & StyledEngineContextValue
) {
  const value = mergeProps({
    get cache() {
      return inProps.value?.cache ?? inProps.cache;
    },
    get injectFirst() {
      return inProps.value?.injectFirst ?? inProps.injectFirst;
    },
  });
  return (
    <StyledEngineContext.Provider value={value}>
      {inProps.children}
    </StyledEngineContext.Provider>
  );
}
