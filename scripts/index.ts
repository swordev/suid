#!/usr/bin/env node
import downloadMaterialSource from "./actions/downloadMaterialSource.js";
import extractMaterialSource from "./actions/extractMaterialSource.js";
import genIconsMaterialSource from "./actions/genIconsMaterialSource.js";
import genIconsMaterialTyping from "./actions/genIconsMaterialTyping.js";
import genRoadmap from "./actions/genRoadmap.js";
import pack from "./actions/pack.js";
import patchTsConfigs from "./actions/patchTsConfigs.js";
import prebuild from "./actions/prebuild.js";
import syncIconsMaterial from "./actions/syncIconsMaterial.js";
import syncMaterialSource from "./actions/syncMaterialSource.js";
import { program } from "commander";

const muiVersion = "5.5.0";

export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

program
  .command(snakeCase(downloadMaterialSource.name))
  .option("--version [value]", "Material UI version", muiVersion)
  .action((options: { version: string }) => downloadMaterialSource(options));

program
  .command(snakeCase(extractMaterialSource.name))
  .option("--version [value]", "Material UI version", muiVersion)
  .action((options: { version: string }) => extractMaterialSource(options));

program
  .command(snakeCase(genIconsMaterialSource.name))
  .option("--version [value]", "Material UI version", muiVersion)
  .action((options: { version: string }) => genIconsMaterialSource(options));

program
  .command(snakeCase(genIconsMaterialTyping.name))
  .action(() => genIconsMaterialTyping());

program.command(snakeCase(patchTsConfigs.name)).action(() => patchTsConfigs());

program.command(snakeCase(prebuild.name)).action(() => prebuild());

program
  .command(snakeCase(genRoadmap.name))
  .option("--version [value]", "Material UI version", muiVersion)
  .action((options: { version: string }) => genRoadmap(options));

program
  .command(snakeCase(pack.name))
  .option(
    "--patch [packagePath]",
    "Patches the package file with the npm override config"
  )
  .action((options: { patch?: string }) => pack(options));

program
  .command(snakeCase(syncIconsMaterial.name))
  .option("--version [value]", "Material UI version", muiVersion)
  .action((options: { version: string }) => syncIconsMaterial(options));

program
  .command(snakeCase(syncMaterialSource.name))
  .option("--version [value]", "Material UI version", muiVersion)
  .action((options: { version: string }) => syncMaterialSource(options));

program.parse();
