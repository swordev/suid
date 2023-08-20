import { safeStat } from "../util/fs";
import { muiSourcePath } from "../util/material-ui";
import { spawn } from "child_process";
import { dirname } from "path";

async function extractMaterialSource(options: { version: string }) {
  const { name } = extractMaterialSource;
  const targetPath = muiSourcePath(options.version);
  const zipPath = targetPath + ".zip";
  if (await safeStat(targetPath)) {
    console.log(`[${name}] Source code is already extracted`);
  } else {
    console.log(`[name] Extracting into ${targetPath}`);
    const p = spawn("tar", ["-xf", zipPath, "-C", dirname(targetPath)], {
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

export default extractMaterialSource;
