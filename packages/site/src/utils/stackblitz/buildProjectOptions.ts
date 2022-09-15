import type { Project } from "@stackblitz/sdk/typings/interfaces";
import buildPkg from "~/utils/stackblitz/buildPkg";
import htmlFile from "./template/index.html?raw";
import appFile from "./template/src/App.tsx?raw";
import indexFile from "./template/src/index.tsx?raw";
import tsConfigFile from "./template/tsconfig.json.source?raw";
import viteConfigFile from "./template/vite.config.ts.source?raw";

export default function buildProjectOptions(
  options: Partial<Project> & {
    appCode?: string;
  }
) {
  const appCode = options.appCode ?? appFile;
  const pkg = buildPkg({
    appCode: appCode,
  });

  return {
    template: "node",
    title: "Project",
    description: "Example",
    ...(options || {}),
    files: {
      "src/App.tsx": appCode,
      "src/index.tsx": indexFile,
      "index.html": htmlFile,
      "package.json": JSON.stringify(pkg, null, 2),
      "tsconfig.json": tsConfigFile,
      "vite.config.ts": viteConfigFile,
      ...(options.files || {}),
    },
  } as Project;
}
