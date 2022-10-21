#!/usr/bin/env -S node --no-warnings --experimental-specifier-resolution=node
import muiVersion from "./../packages/codemod/src/utils/muiVersion";
import downloadMaterialSource from "./actions/downloadMaterialSource";
import extractMaterialSource from "./actions/extractMaterialSource";
import genIconsMaterialSource from "./actions/genIconsMaterialSource";
import genIconsMaterialTyping from "./actions/genIconsMaterialTyping";
import genRoadmap from "./actions/genRoadmap";
import pack from "./actions/pack";
import patchTsConfigs from "./actions/patchTsConfigs";
import prebuild from "./actions/prebuild";
import syncIconsMaterial from "./actions/syncIconsMaterial";
import syncMaterialSource from "./actions/syncMaterialSource";
import { program } from "commander";

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
