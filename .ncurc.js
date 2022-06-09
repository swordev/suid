module.exports = {
  packageFile: [
    "./package.json",
    "./scripts/package.json",
    "./packages/*/package.json",
  ],
  dep: "dev,optional,prod,bundle",
};
