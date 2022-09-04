#!/usr/bin/env -S node --no-warnings --experimental-specifier-resolution=node
import mui2suid from "./actions/mui2suid";
import react2solid from "./actions/react2solid";
import muiVersion from "./utils/muiVersion";
import { program } from "commander";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const rootPath = fileURLToPath(
  import.meta.url.endsWith(".ts")
    ? dirname(dirname(import.meta.url))
    : dirname(import.meta.url)
);

const pkgJson = readFileSync(`${rootPath}/package.json`).toString();

const { name, version } = JSON.parse(pkgJson) as {
  name: string;
  version: string;
};

program.name(name);
program.version(version);

program
  .command("react2solid")
  .description("Transform your MUI React code to SUID SolidJS.")
  .requiredOption("-i,--in [path]", "Input directory path")
  .option("-o,--out [path]", "Output directory path")
  .option(
    "-f,--filters [patterns]",
    "Filters by wildcard patterns",
    (value, previous) => previous.concat([value]),
    [] as string[]
  )
  .action((options: { in: string; out: string; filters: string[] }) =>
    react2solid(options)
  );

program
  .command("mui2suid")
  .description("Transform a MUI React component into SUID SolidJS component.")
  .option("--package-name [name]", "Package name", "material")
  .requiredOption("-n,--name [path]", "Input directory path")
  .option("-o,--out [path]", "Output directory path")
  .option("-v,--version [value]", "MUI version", muiVersion)
  .option(
    "-f,--filters [patterns]",
    "Filters by wildcard patterns",
    (value, previous) => previous.concat([value]),
    [] as string[]
  )
  .option("-p,--print")
  .action(
    (options: {
      version: string;
      packageName: string;
      name: string;
      filters: string[];
    }) => {
      mui2suid(options);
    }
  );

program.parse(process.argv);
