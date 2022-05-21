import clean from "~/actions/clean";
import genIconsMaterialSource from "~/actions/genIconsMaterialSource";
import generateLibTyping from "~/actions/genIconsMaterialTyping";
import syncMaterialSource from "~/actions/syncMaterialSource";

async function syncIconsMaterial(options: { version: string }) {
  const { version } = options;
  await syncMaterialSource({ version });
  await clean({ packageNames: ["icons-material"] });
  await genIconsMaterialSource({ version });
  await generateLibTyping();
}

export default syncIconsMaterial;
