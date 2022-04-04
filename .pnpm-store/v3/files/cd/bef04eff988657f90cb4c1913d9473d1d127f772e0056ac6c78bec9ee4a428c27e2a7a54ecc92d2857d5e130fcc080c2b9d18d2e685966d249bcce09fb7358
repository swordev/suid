const shared = require("../shared");

module.exports = {
  ...shared,
  // uses a webpack style resolver, the default one has many issues.
  resolver: require.resolve("./resolver"),
  testEnvironment: 'jsdom',
  transform: {
    "\\.[jt]sx$": require.resolve("./transform"),
    ...shared.transform
  }
};
