export {};

export type CamelCaseType<T extends string> =
  T extends `${infer S1}-${infer S2}${infer S3}`
    ? `${Lowercase<S1>}${Uppercase<S2>}${CamelCaseType<S3>}`
    : Lowercase<T>;

export type CamelCaseRecordType<T> = {
  [K in keyof T as CamelCaseType<string & K>]: T[K] extends {}
    ? CamelCaseRecordType<T[K]>
    : T[K];
};

export type DoRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type DoOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type DeepPartial<T> = T extends
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
  | symbol
  | Date
  ? T | undefined
  : // Arrays, Sets and Maps and their readonly counterparts have their items made
    // deeply partial, but their own instances are left untouched
    T extends Array<infer ArrayType>
    ? Array<DeepPartial<ArrayType>>
    : T extends ReadonlyArray<infer ArrayType>
      ? ReadonlyArray<ArrayType>
      : T extends Set<infer SetType>
        ? Set<DeepPartial<SetType>>
        : T extends ReadonlySet<infer SetType>
          ? ReadonlySet<SetType>
          : T extends Map<infer KeyType, infer ValueType>
            ? Map<DeepPartial<KeyType>, DeepPartial<ValueType>>
            : T extends ReadonlyMap<infer KeyType, infer ValueType>
              ? ReadonlyMap<DeepPartial<KeyType>, DeepPartial<ValueType>>
              : // ...and finally, all other objects.
                {
                  [K in keyof T]?: DeepPartial<T[K]>;
                };

export type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends Function
    ? T
    : T extends object
      ? DeepReadonlyObject<T>
      : T;

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
