import { stat } from "fs/promises";

async function safeStat(path: string) {
  try {
    return await stat(path);
  } catch (error) {
    return;
  }
}

export default safeStat;
