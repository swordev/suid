import SxProps from "@suid/system/sxProps";

export interface RipplePropsTypeMap {
  defaultPropNames: "pulsate" | "classes";
  selfProps: {
    className?: string;
    classes?: {
      ripple?: string;
      rippleVisible?: string;
      ripplePulsate?: string;
      child?: string;
      childLeaving?: string;
      childPulsate?: string;
    };
    pulsate?: boolean;
    rippleX: number;
    rippleY: number;
    rippleSize: number;
    in?: boolean;
    onExited?: () => any;
    timeout?: number;
    sx?: SxProps;
  };
  props: RipplePropsTypeMap["selfProps"];
}
