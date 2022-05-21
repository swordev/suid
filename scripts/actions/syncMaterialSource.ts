import downloadMaterialSource from "~/actions/downloadMaterialSource";
import extractMaterialSource from "~/actions/extractMaterialSource";

async function syncMaterialSource(options: { version: string }) {
  const { version } = options;
  await downloadMaterialSource({ version });
  await extractMaterialSource({ version });
}

export default syncMaterialSource;
