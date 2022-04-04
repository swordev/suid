import { O } from 'ts-toolbelt';
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 * @param object
 * @param otherObjects
 */
export declare function merge<T extends Record<string, any>, Tn extends Record<string, any>[]>(object: T, ...otherObjects: Tn): O.Assign<T, Tn, 'deep'>;
export declare function mergeAndCompare<T extends Record<string, any>, Tn extends Record<string, any>[]>(compareFn: (prop1: any, prop2: any, propName: string | symbol) => any, object: T, ...otherObjects: Tn): O.Assign<T, Tn, 'deep'>;
export declare function mergeAndConcat<T extends Record<string, any>, Tn extends Record<string, any>[]>(object: T, ...otherObjects: Tn): O.Assign<T, Tn, 'deep'>;
