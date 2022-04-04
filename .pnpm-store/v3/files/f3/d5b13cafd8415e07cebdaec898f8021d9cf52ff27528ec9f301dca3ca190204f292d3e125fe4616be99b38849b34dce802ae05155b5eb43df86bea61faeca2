# spawn-please
[![npm version](https://img.shields.io/npm/v/spawn-please.svg)](https://npmjs.org/package/spawn-please)

Promisified child_process.spawn. \*Supports stdin* \*Rejects on stderr*

## Install

```sh
$ npm install --save spawn-please
```

## Usage

> `await spawn(command, [arguments], [stdin], [options])`

`options` are passed directly to `child_process.spawn`.

```js
const spawn = require('spawn-please')

const output = await spawn('printf', ['please?'])
assert.equal(output, 'please?')
```

### How is this different than other child_process libraries?

- Allows you to pass a string to stdin:

```js
const output = await spawn('cat', [], 'test')
assert.equal(output, 'test')

```
- Rejects on any stderr:

```js
try {
  spawn('some-command-with-stderr')
}
catch (stderr) {
  // do something with stderr
}
```

### Using your own Promise library

**spawn-please** uses the global Promise object by default. You may use your own Promise library by overriding the Promise property:

```js
const spawn = require('spawn-please')
spawn.Promise = require('bluebird')
```

## License

ISC © [Raine Revere](https://github.com/raineorshine)
