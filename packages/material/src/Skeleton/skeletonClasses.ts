import { generateUtilityClass, generateUtilityClasses } from "@suid/base";

export interface SkeletonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="text"`. */
  text: string;
  /** Styles applied to the root element if `variant="rectangular"`. */
  rectangular: string;
  /** Styles applied to the root element if `variant="circular"`. */
  circular: string;
  /** Styles applied to the root element if `animation="pulse"`. */
  pulse: string;
  /** Styles applied to the root element if `animation="wave"`. */
  wave: string;
  /** Styles applied when the component is passed children. */
  withChildren: string;
  /** Styles applied when the component is passed children and no width. */
  fitContent: string;
  /** Styles applied when the component is passed children and no height. */
  heightAuto: string;
}

export type SkeletonClassKey = keyof SkeletonClasses;

export function getSkeletonUtilityClass(slot: string): string {
  return generateUtilityClass("suidSkeleton", slot);
}

const skeletonClasses: SkeletonClasses = generateUtilityClasses(
  "suidSkeleton",
  [
    "root",
    "text",
    "rectangular",
    "circular",
    "pulse",
    "wave",
    "withChildren",
    "fitContent",
    "heightAuto",
  ]
);

export default skeletonClasses;
