import SxProps from "./sxProps";
import { createMemo } from "solid-js";

function createSxMemo(name: string, props: () => SxProps) {
  return createMemo(() => {
    const value = props();
    if (Array.isArray(value))
      return value.map((style) =>
        typeof style === "string" ? style : { name, ...style }
      );
    return { name, ...value };
  });
}

export default createSxMemo;
