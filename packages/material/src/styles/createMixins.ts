import { Breakpoints } from "@suid/system/createTheme/createBreakpoints";
import { SxPropsObject } from "@suid/system/sxProps";

export interface Mixins {
  toolbar: SxPropsObject;
}

export default function createMixins(
  breakpoints: Breakpoints<any>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  spacing: any = undefined,
  mixins: Record<string, SxPropsObject> = {}
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
