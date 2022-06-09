#!/usr/bin/env -S node --no-warnings --experimental-specifier-resolution=node
import mui2suid from "./actions/mui2suid";
import react2solid from "./actions/react2solid";
import muiVersion from "./utils/muiVersion";
import { program } from "commander";
import { dirname } from "path";

const rootPath = import.meta.url.endsWith(".ts")
  ? dirname(dirname(import.meta.url))
  : dirname(import.meta.url);

const {
  default: { name, version },
} = (await import(`${rootPath}/package.json`)) as {
  default: { name: string; version: string };
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
  .action((options: { version: string; name: string; filters: string[] }) => {
    mui2suid(options);
  });

program.parse(process.argv);
