import mergeWith from "lodash.mergewith";

export enum IterationTypeEnum {
  None,
  Array,
  Object,
}

export function merge<TObject, TSource>(object: TObject, ...source: TSource[]) {
  return mergeWith(object, ...source, (objValue: any, srcValue: any) => {
    if (Array.isArray(objValue)) {
      return srcValue;
    }
  }) as TObject & TSource;
}
