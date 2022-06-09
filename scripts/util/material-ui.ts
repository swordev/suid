import { rootPath } from "./workspace";
import { join } from "path";

export function muiSourcePath(version: string) {
  return join(rootPath, "temp", `material-ui-${version}`);
}
