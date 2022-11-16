import { safeStat } from "./../util/fs.js";
import { muiSourcePath } from "./../util/material-ui.js";
import { spawn } from "child_process";
import { mkdir } from "fs/promises";
import { dirname } from "path";

async function downloadMaterialSource(options: { version: string }) {
  const { name } = downloadMaterialSource;
  const zipPath = muiSourcePath(options.version) + ".zip";
  if (await safeStat(zipPath)) {
    console.log(`[${name}] Source code is already downloaded`);
  } else {
    const url = `https://github.com/mui/material-ui/archive/refs/tags/v${options.version}.zip`;
    console.log(`[${name}] Downloading ${url}`);
    await mkdir(dirname(zipPath), { recursive: true });
    const p = spawn("curl", [url, "-L", "-o", zipPath], {
      stdio: "inherit",
    });
    await new Promise<void>((resolve, reject) => {
      p.on("error", reject);
      p.on("close", (exitCode) =>
        exitCode ? new Error(`Exit code: ${exitCode}`) : resolve()
      );
    });
  }
}

export default downloadMaterialSource;
