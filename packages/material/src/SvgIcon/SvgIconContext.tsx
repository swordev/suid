import { SvgIconProps } from ".";
import { createContext } from "solid-js";

interface SvgIconContext {
  fontSize?: SvgIconProps["fontSize"];
}

const SvgIconContext = createContext<SvgIconContext>();

export default SvgIconContext;
