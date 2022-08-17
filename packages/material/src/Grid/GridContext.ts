import { ResponsiveStyleValue } from "@suid/system";
import { createContext } from "solid-js";

/**
 * @ignore - internal component.
 */
const GridContext = createContext<ResponsiveStyleValue<number> | undefined>();

export default GridContext;
