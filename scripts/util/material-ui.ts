import { join } from "path";
import { rootPath } from "~/util/workspace";

export function muiSourcePath(version: string) {
  return join(rootPath, "temp", `material-ui-${version}`);
}
