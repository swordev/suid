import appFile from "../files/appFile.js";
import entryFile from "../files/entryFile.js";
import htmlFile from "../files/htmlFile.js";
import pkgFile from "../files/pkgFile.js";
import tsconfigFile from "../files/tsconfigFile.js";
import viteConfigFile from "../files/viteConfigFile.js";
import { randomArrayValue } from "../utils/array.js";
import { createFiles, isEmptyDir } from "../utils/fs.js";
import chalk from "chalk";
import inquirer, { Answers } from "inquirer";
import { basename, join as pathJoin } from "path";

export default async function init(outputDir?: string) {
  const cwd = process.cwd();
  const excluded = [
    ".history",
    "node_modules",
    ".git",
    ".gitignore",
    "README.md",
    "LICENSE",
  ];
  outputDir ||= (await isEmptyDir(cwd, excluded)) ? "./" : "./suid-project";

  let workingDir: string | undefined;
  while (!workingDir) {
    outputDir = await inquirer
      .prompt({
        type: "input",
        name: "outputDir",
        message: "Output dir",
        default: outputDir,
      })
      .then(({ outputDir }: Answers) => outputDir);

    const path = pathJoin(cwd, outputDir ?? "");
    if (await isEmptyDir(path, excluded)) {
      workingDir = path;
    } else {
      console.info(`Output dir is not empty`);
    }
  }

  const { projectName, pkgManager, pkgs } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name",
      default: basename(workingDir),
    },
    {
      type: "list",
      name: "pkgManager",
      message: "Select a package manager",
      default: "pnpm",
      choices: [
        {
          name: "npm",
        },
        {
          name: "pnpm",
        },
      ],
    },
    {
      type: "checkbox",
      name: "pkgs",
      message: "Select the packages",
      choices: [
        {
          name: "@suid/material",
          checked: true,
        },
        {
          name: "@suid/icons-material",
          checked: true,
        },
      ],
    },
  ]);
  await createFiles(
    {
      "src/index.tsx": entryFile(),
      "src/App.tsx": appFile(),
      "index.html": htmlFile({
        title: projectName,
      }),
      "tsconfig.json": tsconfigFile(),
      "package.json": await pkgFile({
        name: projectName,
        deps: pkgs,
        devDeps: ["@suid/vite-plugin"],
      }),
      "vite.config.ts": viteConfigFile(),
    },
    workingDir
  );

  console.info();
  console.info(chalk.green(`✓ Project created successfully`));
  console.info();
  console.info("Run the next commands:");
  console.info();
  console.info(chalk.cyan(`  cd ${outputDir}`));
  console.info(chalk.cyan(`  ${pkgManager} install`));
  console.info(chalk.cyan(`  ${pkgManager} start`));
  console.info();
  console.info(
    `And have a ${randomArrayValue([
      "great",
      "wonderful",
      "fantastic",
      "amazing",
      "lovely",
      "splendid",
      "marvelous",
      "fabulous",
      "terrific",
      "delightful",
    ])} day! 😃`
  );
}
