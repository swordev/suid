import { markdownTable } from "./../util/markdown";
import { muiSourcePath } from "./../util/material-ui";
import { readOptions as prettierOptions } from "./../util/prettier";
import { rootPath } from "./../util/workspace";
import { readdir, writeFile } from "fs/promises";
import { join } from "path";
import { format } from "prettier";

const systemFeatures: Record<string, boolean | "pending"> = {
  "`styled`": true,
  "`sx` property": true,
  "System properties": true,
  "Theme context": true,
  "Slot classes": true,
  "Breakpoints as an object/array": "pending",
  "`styleOverrides`": false,
};

const codemodTransformers: Record<string, boolean | "pending"> = {
  "MUI imports": true,
  "MUI components": "pending",
  "ES6 destructuring assignment": true,
  "ES6 spread assignment": true,
  "`React.*Event`": true,
  "`React.*EventHandler`": true,
  "`React.*HTMLAttributes`": true,
  "`React.Attributes.className`": true,
  "`React.Attributes.key`": true,
  "`React.Context`": true,
  "`React.createContext`": true,
  "`React.ElementType`": true,
  "`React.forwardRef`": true,
  "`React.Fragment`": true,
  "`React.JSXElementConstructor`": true,
  "`React.memo`": true,
  "`React.ReactElement`": true,
  "`React.ReactNode`": true,
  "`React.Ref`": true,
  "`React.useCallback`": true,
  "`React.useContext`": true,
  "`React.useEffect`": true,
  "`React.useLayoutEffect`": true,
  "`React.useMemo`": true,
  "`React.useRef`": true,
  "`React.useState`": true,
};

const pendingComponents: Record<
  string,
  {
    props?: string[];
  }
> = {
  Select: {},
};

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

  const codemodTable = markdownTable(
    [
      {
        value: "Transformer",
      },
      {
        value: "State",
        align: "center",
      },
    ],
    Object.entries(codemodTransformers).map(([name, state]) => [
      name,
      stateIcon(state),
    ])
  );

  const componentsTable = markdownTable(
    [
      {
        value: "Component",
      },
      {
        value: "State",
        align: "center",
      },
      {
        value: "Pending props",
        align: "center",
      },
    ],
    [
      ...sourceComponentNames.map((name) => {
        let state: boolean | "pending";
        let pendingProps: string[] | undefined;

        if (name in pendingComponents) {
          pendingProps = pendingComponents[name].props;
          state = pendingProps ? true : "pending";
        } else {
          state = targetComponentNames.includes(name);
        }
        return [
          name,
          stateIcon(state),
          pendingProps?.map((v) => `\`${v}\``).join(" ") ?? "",
        ];
      }),
    ]
  );

  const contents = format(
    [
      `# ROADMAP\n`,
      `\n## @suid/system`,
      systemTable,
      "\n",
      `\n## @suid/codemod`,
      codemodTable,
      "\n",
      `\n## @suid/material`,
      componentsTable,
    ].join("\n"),
    {
      ...(await prettierOptions()),
      parser: "markdown",
    }
  );

  await writeFile(rootPath + "/ROADMAP.md", contents);
}

export default genRoadmap;
