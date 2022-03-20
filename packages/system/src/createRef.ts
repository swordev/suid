export type RefProp<T = any> = (v: T) => void; //JSX.IntrinsicAttributes["ref"];

function createRef<T>(
  input?: { ref?: unknown } | (() => RefProp<T> | undefined)
): {
  (value: T): void;
  ref: T;
} {
  const cb: any = (e: any) => {
    cb.ref = e;
    if (typeof input === "function") {
      input()?.(e);
    } else if (typeof input?.ref === "function") {
      input.ref(e);
    }
  };
  return cb;
}

export default createRef;
