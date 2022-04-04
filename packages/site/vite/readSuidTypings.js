import { resolve } from "path";
import readTypings from "./readTypings";

export default function readSuidTypings() {
  return ["material", "base", "system", "utils", "types", "css"].map(
    (name) => ({
      name,
      typings: readTypings(resolve(__dirname, `../../${name}/lib`)),
    })
  );
}
