const { readdirSync } = require("fs");

const repoRootPath = `<rootDir>`;
const solidjsPath = `${repoRootPath}/node_modules/solid-js`;

const suidModuleMapper = readdirSync(`${__dirname}/packages`).reduce(
  (result, name) => {
    result[`^@suid/${name}/(.*)$`] = `<rootDir>/packages/${name}/src/$1`;
    result[`^@suid/${name}$`] = `<rootDir>/packages/${name}/src`;
    return result;
  },
  {}
);

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/packages/*/src/**/*.test.{ts,tsx}",
    "<rootDir>/packages/*/test/**/*.test.{ts,tsx}",
  ],
  modulePathIgnorePatterns: ["lib", "dist", "temp"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json",
        babelConfig: {
          presets: ["babel-preset-solid", "@babel/preset-env"],
        },
      },
    ],
  },
  moduleNameMapper: {
    "solid-js/web": `${solidjsPath}/web/dist/web.cjs`,
    "solid-js/store": `${solidjsPath}/store/dist/store.cjs`,
    "solid-js": `${solidjsPath}/dist/solid.cjs`,
    ...suidModuleMapper,
  },
};
