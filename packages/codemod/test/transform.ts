import applyTransforms from "../src/utils/applyTransforms.js";
import format from "./format.js";

export default function transform(
  code: string,
  transforms: Parameters<typeof applyTransforms>[1]
) {
  return format(applyTransforms(code, transforms));
}
