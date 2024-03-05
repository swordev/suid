/** @type {import("npm-check-updates").RunOptions} */

const targets = {
  patch: [
    // https://github.com/jsdom/jsdom/issues/3562
    "jsdom",
    // NodeJS v18 - https://github.com/vitejs/vite/issues/15714#issuecomment-1949236530
    "@types/node",
  ],
  minor: [
    // pending (breaking changes)
    // https://github.com/vitest-dev/vitest/releases/tag/v0.34.0
    "vitest",
    // pending
    "ts-morph",
    // CJS dropped
    "commander",
  ],
};

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
