export function isUnitless(value: string) {
  return String(parseFloat(value)).length === String(value).length;
}

// Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"
export function getUnit(input: string | number) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)?.[1] || "";
}

// Emulate the sass function "unitless"
export function toUnitless(length: string | number) {
  return parseFloat(length.toString());
}

// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
export function convertLength(baseFontSize: string) {
  return (length: string, toUnit: string) => {
    const fromUnit = getUnit(length);

    // Optimize for cases where `from` and `to` units are accidentally the same.
    if (fromUnit === toUnit) {
      return length;
    }

    // Convert input length to pixels.
    let pxLength = toUnitless(length);

    if (fromUnit !== "px") {
      if (fromUnit === "em") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === "rem") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    }

    // Convert length in pixels to the output unit
    let outputLength = pxLength;
    if (toUnit !== "px") {
      if (toUnit === "em") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === "rem") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}

export interface AlignPropertyParams {
  size: number;
  grid: number;
}

export function alignProperty(params: AlignPropertyParams) {
  const { size, grid } = params;
  const sizeBelow = size - (size % grid);
  const sizeAbove = sizeBelow + grid;

  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}

export interface FontGridParams {
  lineHeight: number;
  pixels: number;
  htmlFontSize: number;
}

// fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height
export function fontGrid(params: FontGridParams) {
  const { lineHeight, pixels, htmlFontSize } = params;
  return pixels / (lineHeight * htmlFontSize);
}

export interface ResponsivePropertyParams {
  cssProperty: string;
  min: number;
  max: number;
  unit?: string;
  breakpoints?: number[];
  transform?: (value: number) => number;
}

/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */
export function responsiveProperty(params: ResponsivePropertyParams) {
  const {
    cssProperty,
    min,
    max,
    unit = "rem",
    breakpoints = [600, 900, 1200],
    transform = null,
  } = params;
  const output: Record<string, any> = {
    [cssProperty]: `${min}${unit}`,
  };

  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach((breakpoint) => {
    let value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`,
    };
  });

  return output;
}
