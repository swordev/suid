const targets = {
  patch: [
    // https://github.com/jsdom/jsdom/issues/3562
    "jsdom",
    "p-limit",
  ],
  minor: [
    // CJS dropped
    "commander",
  ],
};

/** @type {import("npm-check-updates").RunOptions} */
module.exports = {
  workspaces: true,
  root: true,
  dep: "dev,optional,prod,bundle,peer",
  target: (name) => {
    for (const target in targets)
      if (targets[target].includes(name)) return target;
    return "latest";
  },
};
