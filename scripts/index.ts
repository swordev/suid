#!/usr/bin/env -S npx ts-node --project ./scripts/tsconfig.json -r tsconfig-paths/register
import { program } from "commander";
import clean from "~/actions/clean";
import downloadMaterialSource from "~/actions/downloadMaterialSource";
import extractMaterialSource from "~/actions/extractMaterialSource";
import genIconsMaterialSource from "~/actions/genIconsMaterialSource";
import genIconsMaterialTyping from "~/actions/genIconsMaterialTyping";
import genRes from "~/actions/genRes";
import genRoadmap from "~/actions/genRoadmap";
import patchLibModulesLinks from "~/actions/patchLibModulesLinks";
import patchTsConfigs from "~/actions/patchTsConfigs";
import postbuild from "~/actions/postbuild";
import prebuild from "~/actions/prebuild";
import syncIconsMaterial from "~/actions/syncIconsMaterial";

export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

const version = "5.4.2";

program
  .command(snakeCase(clean.name))
  .option(
    "--package-names [value]",
    "Package names",
    function (value, prev) {
      return [...prev, value];
    },
    [] as string[]
  )
  .action((options) => clean(options));

program
  .command(snakeCase(downloadMaterialSource.name))
  .option("--version [value]", "Material UI version", version)
  .action((options: { version: string }) => downloadMaterialSource(options));

program
  .command(snakeCase(extractMaterialSource.name))
  .option("--version [value]", "Material UI version", version)
  .action((options: { version: string }) => extractMaterialSource(options));

program
  .command(snakeCase(genIconsMaterialSource.name))
  .option("--version [value]", "Material UI version", version)
  .action((options: { version: string }) => genIconsMaterialSource(options));

program
  .command(snakeCase(genIconsMaterialTyping.name))
  .action(() => genIconsMaterialTyping());

program
  .command(snakeCase(patchLibModulesLinks.name))
  .action(() => patchLibModulesLinks());

program.command(snakeCase(patchTsConfigs.name)).action(() => patchTsConfigs());

program.command(snakeCase(postbuild.name)).action(() => postbuild());

program.command(snakeCase(prebuild.name)).action(() => prebuild());

program
  .command(snakeCase(genRoadmap.name))
  .option("--version [value]", "Material UI version", version)
  .action((options: { version: string }) => genRoadmap(options));

program.command(snakeCase(genRes.name)).action(() => genRes());

program
  .command(snakeCase(syncIconsMaterial.name))
  .option("--version [value]", "Material UI version", version)
  .action((options: { version: string }) => syncIconsMaterial(options));

program.parse();
