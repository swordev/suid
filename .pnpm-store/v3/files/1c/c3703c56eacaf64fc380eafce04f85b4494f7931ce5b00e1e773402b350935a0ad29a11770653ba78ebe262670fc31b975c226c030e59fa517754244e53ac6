const { create, getDefaultConfig } = require("enhanced-resolve-jest");

module.exports = create(jestConfig => {
  const baseConfig = getDefaultConfig(jestConfig);
  baseConfig.aliasFields = ["browser"];
  baseConfig.mainFields = ["browser", "main"];
  return baseConfig;
})