import { resolvedPropKey } from "./createSxClass";
import { StyledProps } from "./styledProps";
import resolve from "@suid/css/resolve";

/**
 * @link https://github.com/emotion-js/emotion/blob/main/packages/unitless/src/index.js
 */
export const unitLess = new Set([
  "animationIterationCount",
  "borderImageOutset",
  "borderImageSlice",
  "borderImageWidth",
  "boxFlex",
  "boxFlexGroup",
  "boxOrdinalGroup",
  "columnCount",
  "columns",
  "flex",
  "flexGrow",
  "flexPositive",
  "flexShrink",
  "flexNegative",
  "flexOrder",
  "gridRow",
  "gridRowEnd",
  "gridRowSpan",
  "gridRowStart",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnSpan",
  "gridColumnStart",
  "msGridRow",
  "msGridRowSpan",
  "msGridColumn",
  "msGridColumnSpan",
  "fontWeight",
  "lineHeight",
  "opacity",
  "order",
  "orphans",
  "tabSize",
  "widows",
  "zIndex",
  "zoom",
  "WebkitLineClamp",
  "fillOpacity",
  "floodOpacity",
  "stopOpacity",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
]);

export function resolveStyledPropsValue(name: string, value: unknown) {
  if (typeof value === "number") {
    return { [name]: unitLess.has(name) ? value.toString() : `${value}px` };
  }
}

function resolveStyledProps(v: StyledProps): StyledProps {
  return resolve(v, resolveStyledPropsValue, { [resolvedPropKey]: true });
}

export default resolveStyledProps;
