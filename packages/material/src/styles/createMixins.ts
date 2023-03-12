import { Breakpoints } from "@suid/system/createTheme/createBreakpoints";
import StyledProps from "@suid/system/styledProps";

export interface Mixins {
  toolbar: StyledProps;
}

export default function createMixins(
  breakpoints: Breakpoints<any>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  spacing: any = undefined,
  mixins: Record<string, StyledProps> = {}
) {
  return {
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: 48,
      },
      [breakpoints.up("sm")]: {
        minHeight: 64,
      },
    },
    ...mixins,
  };
}
