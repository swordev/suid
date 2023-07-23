import applyTransforms from "../src/utils/applyTransforms.js";
import format from "./format.js";

export default async function transform(
  code: string,
  transforms: Parameters<typeof applyTransforms>[1]
) {
  return await format(applyTransforms(code, transforms));
}
