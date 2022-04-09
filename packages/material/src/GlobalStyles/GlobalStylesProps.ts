import { SxPropsObject } from "@suid/system/sxProps";

export interface GlobalStylesTypeMap<P = {}> {
  name: "MuiGlobalStyles";
  selfProps: {
    /**
     * The styles you want to apply globally.
     */
    styles: Record<string, SxPropsObject>;
  };
  props: P & GlobalStylesTypeMap["selfProps"];
}

export type GlobalStylesProps<P = {}> = GlobalStylesTypeMap<P>;

export default GlobalStylesProps;
