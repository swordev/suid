import downloadMaterialSource from "./downloadMaterialSource";
import extractMaterialSource from "./extractMaterialSource";

async function syncMaterialSource(options: { version: string }) {
  const { version } = options;
  await downloadMaterialSource({ version });
  await extractMaterialSource({ version });
}

export default syncMaterialSource;
