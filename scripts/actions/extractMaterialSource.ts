import { safeStat } from "./../util/fs";
import { muiSourcePath } from "./../util/material-ui";
import Zip from "adm-zip";
import { readdir, rename, rmdir } from "fs/promises";
import { basename } from "path";

async function extractMaterialSource(options: { version: string }) {
  const { name } = extractMaterialSource;
  const targetPath = muiSourcePath(options.version);
  const zipPath = targetPath + ".zip";
  if ((await safeStat(targetPath)) && (await readdir(targetPath)).length) {
    console.log(`[${name}] Source code is already extracted`);
  } else {
    console.log(`[name] Extracting into ${targetPath}`);
    new Zip(zipPath).extractAllTo(targetPath + ".tmp", true);
    await rename(targetPath + ".tmp/" + basename(targetPath), targetPath);
    await rmdir(targetPath + ".tmp");
  }
}

export default extractMaterialSource;
