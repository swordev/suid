import sdk from "@stackblitz/sdk";
import { OpenOptions } from "@stackblitz/sdk";
import buildProjectOptions from "~/utils/stackblitz/buildProjectOptions";

export default function openProject(
  project: Parameters<typeof buildProjectOptions>[0] = {},
  options: OpenOptions = {}
) {
  sdk.openProject(buildProjectOptions(project), {
    openFile: ["src/App.tsx"],
    ...(options || {}),
  });
}
