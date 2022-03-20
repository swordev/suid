const repoRootPath = `<rootDir>`;
const solidjsPath = `${repoRootPath}/node_modules/solid-js`;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/packages/*/src/**/*.test.{ts,tsx}",
    "<rootDir>/packages/*/test/**/*.test.{ts,tsx}",
  ],
  modulePathIgnorePatterns: ["lib", "temp"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
      babelConfig: {
        presets: ["babel-preset-solid", "@babel/preset-env"],
      },
    },
  },
  moduleNameMapper: {
    "solid-js/web": `${solidjsPath}/web/dist/web.cjs`,
    "solid-js/store": `${solidjsPath}/store/dist/store.cjs`,
    "solid-js": `${solidjsPath}/dist/solid.cjs`,
  },
};
