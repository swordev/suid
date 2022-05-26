import StyledEngineContext, { StyledEngineContextValue } from "../StyledEngineContext";
import { splitProps, JSXElement } from "solid-js";

function StyledEngineProvider(props: StyledEngineContextValue&{
  children: JSXElement;
}) {
  const [localProps, contextValue] = splitProps(props, ['children']);
  return (
    <StyledEngineContext.Provider
      value={contextValue}
      children={localProps.children}
    />
  );
}

export default StyledEngineProvider;
