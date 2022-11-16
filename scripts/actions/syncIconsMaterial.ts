import genIconsMaterialSource from "./genIconsMaterialSource.js";
import generateLibTyping from "./genIconsMaterialTyping.js";
import syncMaterialSource from "./syncMaterialSource.js";
import clean from "@wspa/cli/actions/clean.js";

async function syncIconsMaterial(options: { version: string }) {
  const { version } = options;
  await clean({ packageNames: ["@suid/icons-material"], log: false });
  await syncMaterialSource({ version });
  await genIconsMaterialSource({ version });
  await generateLibTyping();
}

export default syncIconsMaterial;
