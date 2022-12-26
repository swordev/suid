import { skipProps } from "../createStyled";
import defineComponent from "../defineComponent";
import extendSxProp from "../styleFunctionSx/extendSxProp";
import styled from "../styled";
import { BoxTypeMap } from "./BoxProps";

export const BoxRoot = styled("div", {
  name: "MuiBox",
  slot: "Root",
  skipProps: [...skipProps, "component"],
})();

export const Box = defineComponent<BoxTypeMap>(function Box(inProps) {
  inProps = extendSxProp(inProps);
  return <BoxRoot {...inProps} as={inProps.as ?? inProps.component} />;
});

export default Box;
