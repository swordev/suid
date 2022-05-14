import createProject from "../src/utils/createProject";
import { Project } from "ts-morph";

let project: Project | undefined;
export default function format(code: string) {
  if (!project) project = createProject();
  const s = project.createSourceFile(
    "file.tsx",
    code.replace(/\s+/g, " ").trim(),
    {
      overwrite: true,
    }
  );
  s.formatText();
  return s.getText();
}
