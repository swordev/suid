<h1 align="center">
  <!-- Logo -->
  <br/>
  Enhanced Resolve for Jest
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- Language -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Format -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- CI -->
  <a href="https://travis-ci.org/mlrawlings/enhanced-resolve-jest">
  <img src="https://img.shields.io/travis/mlrawlings/enhanced-resolve-jest.svg" alt="Build status"/>
  </a>
  <!-- Coverage -->
  <a href="https://coveralls.io/github/mlrawlings/enhanced-resolve-jest">
    <img src="https://img.shields.io/coveralls/mlrawlings/enhanced-resolve-jest.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM Version -->
  <a href="https://npmjs.org/package/enhanced-resolve-jest">
    <img src="https://img.shields.io/npm/v/enhanced-resolve-jest.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/enhanced-resolve-jest">
    <img src="https://img.shields.io/npm/dm/enhanced-resolve-jest.svg" alt="Downloads"/>
  </a>
</h1>

A better `resolver` for Jest using [webpack's enhanced resolve](https://github.com/webpack/enhanced-resolve).

# Installation

```console
npm install enhanced-resolve-jest
```

# Example

### Default configuration

This module exposes a resolver that will map your jest config to a compatible enhanced resolver, forwarding options like the extensions, browser target, etc.

```json
{
  "resolver": "enhanced-resolve-jest"
}
```

### Custom resolver

You can also extend this resolver to provide additional options to the enhanced-resolve module.

```json
{
  "resolver": "./resolver.js"
}
```

Configure your `resolver.js` file:

```js
const { create, getDefaultConfig } = require("enhanced-resolve-jest");

module.exports = create(jestConfig => {
  // Expected to return all options for
  // https://github.com/webpack/enhanced-resolve#resolver-options

  // You can get a config with the same options as the default resolver like so.
  const baseConfig = getDefaultConfig(jestConfig);

  // And modify it to make it your own.
  baseConfig.aliasFields = ["custom-alias"];

  return baseConfig;
});
```

## Code of Conduct

This project adheres to the [eBay Code of Conduct](./.github/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
