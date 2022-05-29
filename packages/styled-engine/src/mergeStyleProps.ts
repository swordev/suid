import deepmerge from "@suid/utils/deepmerge";

function mergeStyleProps(values: Record<string, any>[]) {
  const result = values.reduce<Record<string, any>>((result, value) => {
    if ("name" in value) result[`--${value.name}`] = "0";
    deepmerge(result, value, {
      clone: false,
      sortKeys: true,
    });
    return result;
  }, {});
  delete result.name;
  return result;
}

export default mergeStyleProps;
