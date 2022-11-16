import downloadMaterialSource from "./downloadMaterialSource.js";
import extractMaterialSource from "./extractMaterialSource.js";

async function syncMaterialSource(options: { version: string }) {
  const { version } = options;
  await downloadMaterialSource({ version });
  await extractMaterialSource({ version });
}

export default syncMaterialSource;
