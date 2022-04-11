import react2solid from "./actions/react2solid";
import { program } from "commander";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require(`${__dirname}/package.json`);

program.name(pkg.name);
program.version(pkg.version);

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

program.parse(process.argv);
