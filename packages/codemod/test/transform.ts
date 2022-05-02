import applyTransforms from "../src/utils/applyTransforms";
import format from "./format";

export default function transform(
  code: string,
  transforms: Parameters<typeof applyTransforms>[1]
) {
  return format(applyTransforms(code, transforms));
}
