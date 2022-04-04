const babelJest = require("babel-jest");

module.exports = babelJest.default.createTransformer({
  presets: [
    [
      "babel-preset-solid",
      {
        generate: "ssr",
        hydratable: true
      }
    ]
  ]
})