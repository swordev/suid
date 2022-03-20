export type MediaQueryComparatorType = {
  up: number;
  down: number;
  between: [number, number];
};

function renderMediaQuery<K extends keyof MediaQueryComparatorType>(
  comparator: K,
  width: MediaQueryComparatorType[K],
  units = "px"
) {
  let selector: string;
  if (comparator === "up") {
    selector = `(min-width:${width}${units})`;
  } else if (comparator === "down") {
    selector = `(max-width:${width}${units})`;
  } else if (comparator === "between") {
    const [maxW, minW] = width as [number, number];
    selector = `(max-width:${maxW}${units}) and (min-width:${minW}${units})`;
  } else {
    throw new Error(`Invalid comparator: ${comparator}`);
  }
  return `@media ${selector}`;
}

export default renderMediaQuery;
