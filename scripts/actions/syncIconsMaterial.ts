import genIconsMaterialSource from "./genIconsMaterialSource";
import generateLibTyping from "./genIconsMaterialTyping";
import syncMaterialSource from "./syncMaterialSource";
import clean from "@wspa/cli/actions/clean";

async function syncIconsMaterial(options: { version: string }) {
  const { version } = options;
  await clean({ packageNames: ["@suid/icons-material"], log: false });
  await syncMaterialSource({ version });
  await genIconsMaterialSource({ version });
  await generateLibTyping();
}

export default syncIconsMaterial;
