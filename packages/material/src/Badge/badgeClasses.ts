import { generateUtilityClass, generateUtilityClasses } from "@suid/base";
import {
  BadgeUnstyledClasses,
  badgeUnstyledClasses,
} from "@suid/base/BadgeUnstyled";

export interface BadgeClasses extends BadgeUnstyledClasses {
  colorError: string;
  colorInfo: string;
  colorPrimary: string;
  colorSecondary: string;
  colorSuccess: string;
  colorWarning: string;
  overlapRectangular: string;
  overlapCircular: string;
  // TODO: v6 remove the overlap value from these class keys
  anchorOriginTopLeftCircular: string;
  anchorOriginTopLeftRectangular: string;
  anchorOriginTopRightCircular: string;
  anchorOriginTopRightRectangular: string;
  anchorOriginBottomLeftCircular: string;
  anchorOriginBottomLeftRectangular: string;
  anchorOriginBottomRightCircular: string;
  anchorOriginBottomRightRectangular: string;
}

export type BadgeUnstyledClassKey = keyof BadgeClasses;

export function getBadgeUtilityClass(slot: string): string {
  return generateUtilityClass("MuiBadge", slot);
}

export const badgeClasses: BadgeClasses = Object.assign(
  {},
  badgeUnstyledClasses,
  generateUtilityClasses("MuiBadge", [
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    // TODO: v6 remove the overlap value from these class keys
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular",
  ])
);

export default badgeUnstyledClasses;
