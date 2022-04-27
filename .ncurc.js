module.exports = {
  packageFile: ["./package.json", "./packages/*/package.json"],
  reject: ["@suid/*", "babel-jest", "jest"],
  dep: "dev,optional,peer,prod,bundle",
};
