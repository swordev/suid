export type RefProp<T = any> = (v: T) => void; //JSX.IntrinsicAttributes["ref"];

function createRef<T>(
  input?: { ref?: any } | (() => RefProp<T> | T | undefined | null)
): {
  (value: T): void;
  ref: T;
} {
  const cb: any = (e: any) => {
    cb.ref = e;
    if (typeof input === "function") {
      const inputResult = input();
      if (typeof inputResult === "function") {
        (inputResult as (value: T) => void)(e);
      }
    } else if (typeof input?.ref === "function") {
      input.ref(e);
    }
  };
  return cb;
}

export default createRef;
