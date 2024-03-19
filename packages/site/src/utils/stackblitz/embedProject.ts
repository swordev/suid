import sdk from "@stackblitz/sdk";
import { EmbedOptions } from "@stackblitz/sdk";
import buildProjectOptions from "~/utils/stackblitz/buildProjectOptions";

export default function embedProject(
  element: string | HTMLElement,
  project: Parameters<typeof buildProjectOptions>[0] = {},
  options: EmbedOptions = {}
) {
  return sdk.embedProject(element, buildProjectOptions(project), {
    openFile: ["src/App.tsx"],
    ...(options || {}),
  });
}
