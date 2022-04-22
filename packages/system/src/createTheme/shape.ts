import { DeepPartial } from "@suid/types";
import merge from "@suid/utils/merge";

export interface Shape extends ShapeOptions {}

export interface ShapeOptions {
  borderRadius: number;
}

export const shapeDefaults = createShapeOptions({
  borderRadius: 4,
});

export function createShapeOptions(data: ShapeOptions) {
  return data;
}

export function createShape(options?: DeepPartial<ShapeOptions>) {
  const result: Shape = {
    ...merge({} as typeof shapeDefaults, shapeDefaults, options),
  };
  return result;
}

export default createShape;
