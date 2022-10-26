#!/usr/bin/env -S node --no-warnings --experimental-specifier-resolution=node
import fixEsm from "./actions/fixEsm";
import mui2suid from "./actions/mui2suid";
import react2solid from "./actions/react2solid";
import suidImports from "./actions/suidImports";
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

const fixEsmFlags = {
  firstTime: {
    filters: true,
    importFilters: true,
  },
};

program
  .command("fix-esm")
  .description("Fix ESM code (imports).")
  .option("--cwd [path]", "Current working directory path", process.cwd())
  .option(
    "-f,--filters [glob patterns]",
    "Filters by glob patterns",
    (value, previous) => {
      if (fixEsmFlags.firstTime.filters) {
        fixEsmFlags.firstTime.filters = false;
        return [value];
      } else {
        return previous.concat([value]);
      }
    },
    ["packages/*/{src,test}/**/*.{ts,tsx}"] as string[]
  )
  .option(
    "-if, --import-filters [patterns]",
    "Filters by import patterns",
    (value, previous) => {
      if (fixEsmFlags.firstTime.importFilters) {
        fixEsmFlags.firstTime.importFilters = false;
        return [value];
      } else {
        return previous.concat([value]);
      }
    },
    ["!solid-js/*"] as string[]
  )
  .option("-w,--write", "Overwrites the files with the fixed code")
  .action(
    (options: {
      cwd: string;
      filters: string[];
      importFilters: string[];
      write: boolean;
    }) => fixEsm(options)
  );

program
  .command("suid-imports")
  .description("Transforms the SUID imports.")
  .requiredOption("-f,--filters [glob patterns]", "Filters by glob patterns")
  .option("--format [value]", "Output import format (values: named)", "named")
  .option("--cwd [path]", "Current working directory path", process.cwd())
  .option("-w,--write", "Overwrites the files with the transformed code")
  .action((options: { cwd: string; filters: string[]; write: boolean }) =>
    suidImports(options)
  );
program.parse(process.argv);
