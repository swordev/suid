import { stat } from "fs/promises";

async function safeStat(path: string) {
  try {
    return await stat(path);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return;
  }
}

export default safeStat;
