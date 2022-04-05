import { readdir, writeFile } from "fs/promises";
import { join } from "path";
import { format } from "prettier";
import { markdownTable } from "~/util/markdown";
import { muiSourcePath } from "~/util/material-ui";
import { options as prettierOptions } from "~/util/prettier";
import { rootPath } from "~/util/workspace";

const systemFeatures: Record<string, boolean | "pending"> = {
  "`styled`": true,
  "`sx` property": true,
  "Theme context": true,
  "Slot classes": true,
  "Design tokens as props": "pending",
  "Breakpoints as an object/array": "pending",
  "`styleOverrides`": false,
};

const pendingComponents = [
  "Input",
  "InputBase",
  "TextField",
  "FilledInput",
  "OutlinedInput",
  "Select",
];

function stateIcon(state: boolean | "pending") {
  if (state === true) return "✅";
  if (state === "pending") return "⏳";
  return "";
}

async function genRoadmap(options: { version: string }) {
  const { name } = genRoadmap;

  console.log(`[${name}]`);

  const sourcePath = muiSourcePath(options.version);
  const sourceMaterialPath = join(sourcePath, "packages/mui-material/src");
  const targetMaterialPath = join(rootPath, "packages/material/src");
  const sourceFolders = await readdir(sourceMaterialPath);
  const targetComponentNames = (await readdir(targetMaterialPath)).map(
    (v) => v.split(".")[0]
  );
  const sourceComponentNames = sourceFolders.filter((name) => {
    if (name.includes(".")) return false;
    const isLower = name[0] === name[0].toLowerCase();
    if (isLower && !name.startsWith("use")) return false;
    return true;
  });

  const systemTable = markdownTable(
    [
      {
        value: "Feature",
      },
      {
        value: "State",
        align: "center",
      },
    ],
    Object.entries(systemFeatures).map(([name, state]) => [
      name,
      stateIcon(state),
    ])
  );

  const componentsTable = markdownTable(
    [
      {
        value: "Name",
      },
      {
        value: "State",
        align: "center",
      },
    ],
    [
      ...sourceComponentNames.map((name) => [
        name,
        stateIcon(
          pendingComponents.includes(name)
            ? "pending"
            : targetComponentNames.includes(name)
        ),
      ]),
    ]
  );

  const contents = format(
    [
      `# ROADMAP\n`,
      `\n## System`,
      systemTable,
      "\n",
      `\n## Components`,
      componentsTable,
    ].join("\n"),
    {
      ...prettierOptions,
      parser: "markdown",
    }
  );

  await writeFile(rootPath + "/ROADMAP.md", contents);
}

export default genRoadmap;
