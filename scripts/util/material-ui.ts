import { rootPath } from "./workspace";
import { join } from "path";

export function muiSourcePath(version: string) {
  return join(rootPath, `node_modules/.mui-source/material-ui-${version}`);
}
