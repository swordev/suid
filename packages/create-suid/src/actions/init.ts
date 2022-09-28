import { randomArrayValue } from "../utils/array.js";
import appFile from "./../files/appFile.js";
import entryFile from "./../files/entryFile.js";
import htmlFile from "./../files/htmlFile.js";
import pkgFile from "./../files/pkgFile.js";
import tsconfigFile from "./../files/tsconfigFile.js";
import viteConfigFile from "./../files/viteConfigFile.js";
import { createFiles, isEmptyDir } from "./../utils/fs.js";
import chalk from "chalk";
import inquirer from "inquirer";
import { basename, join } from "path";

export default async function init(defaultOutputDir?: string) {
  const cwd = process.cwd();
  let workingDir: string | undefined;
  const excluded = [
    ".history",
    "node_modules",
    ".git",
    ".gitignore",
    "README.md",
    "LICENSE",
  ];
  if (!defaultOutputDir)
    defaultOutputDir = (await isEmptyDir(cwd, excluded))
      ? "./"
      : "./suid-project";

  while (typeof workingDir !== "string") {
    const answer: { value: string } = await inquirer.prompt({
      type: "input",
      name: "value",
      message: "Output dir",
      default: defaultOutputDir,
    });
    const path = join(cwd, (defaultOutputDir = answer.value));
    if (await isEmptyDir(path, excluded)) {
      workingDir = path;
    } else {
      console.info(`Output dir is not empty`);
    }
  }

  const projectName = await inquirer.prompt({
    type: "input",
    name: "value",
    message: "Project name",
    default: basename(workingDir),
  });

  const pkgManager = await inquirer.prompt({
    type: "list",
    name: "value",
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
  });

  const pkgs = await inquirer.prompt({
    type: "checkbox",
    name: "value",
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
  });

  await createFiles(
    {
      "src/index.tsx": entryFile(),
      "src/App.tsx": appFile(),
      "index.html": htmlFile({
        title: projectName.value,
      }),
      "tsconfig.json": tsconfigFile(),
      "package.json": await pkgFile({
        name: projectName.value,
        deps: pkgs.value,
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
  console.info(chalk.cyan(`  cd ${defaultOutputDir}`));
  console.info(chalk.cyan(`  ${pkgManager.value} install`));
  console.info(chalk.cyan(`  ${pkgManager.value} start`));
  console.info();
  console.info(
    `And have a ${randomArrayValue(["happy", "good", "nice", "great"])} day! 😃`
  );
}
