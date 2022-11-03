import applyTransforms from "../src/utils/applyTransforms";
import format from "./format";

export default function transform(
  code: string,
  transforms: Parameters<typeof applyTransforms>[1]
) {
  const rawResult = applyTransforms(code, transforms)
  try {
    return format(rawResult);
  }
  catch (error) {
    console.log(`transform: rawResult:`, error);
    // return the raw result
    // so we can update the snapshot in toMatchInlineSnapshot
    return rawResult;
  }
}
