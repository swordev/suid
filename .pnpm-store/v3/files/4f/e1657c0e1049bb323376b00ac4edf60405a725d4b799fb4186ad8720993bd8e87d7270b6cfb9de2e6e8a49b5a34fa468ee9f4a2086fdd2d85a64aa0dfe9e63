const shared = require("../shared");

module.exports = {
  ...shared,
  // avoid loading jsdom.
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx$": require.resolve("./transform"),
    ...shared.transform
  }
};
