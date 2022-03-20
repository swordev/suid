import clean from "~/actions/clean";
import downloadMaterialSource from "~/actions/downloadMaterialSource";
import extractMaterialSource from "~/actions/extractMaterialSource";
import genIconsMaterialSource from "~/actions/genIconsMaterialSource";
import generateLibTyping from "~/actions/genIconsMaterialTyping";

async function syncIconsMaterial(options: { version: string }) {
  const { version } = options;
  await downloadMaterialSource({ version });
  await extractMaterialSource({ version });
  await clean({ packageNames: ["icons-material"] });
  await genIconsMaterialSource({ version });
  await generateLibTyping();
}

export default syncIconsMaterial;
