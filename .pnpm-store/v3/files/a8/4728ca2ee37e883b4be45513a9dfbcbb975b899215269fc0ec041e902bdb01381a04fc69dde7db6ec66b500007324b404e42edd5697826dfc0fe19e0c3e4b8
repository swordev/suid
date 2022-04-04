const spawn = require('child_process').spawn

const spawnPlease = (command, args, stdin, options) => {

  // if there are only three arguments and the third argument is an object, treat it as the options object and set stdin to null
  if (!options && typeof stdin === 'object') {
    options = stdin
    stdin = undefined
  }

  // defaults
  options = options || {}
  if (options.rejectOnError === undefined) {
    options.rejectOnError = true
  }

  let stdout = ''
  let stderr = ''
  const child = spawn(command, args, options)

  if (!spawnPlease.Promise) {
    throw new Error('No built-in Promise. You will need to use a Promise library and spawnPlease.Promise = Promise.')
  }

  return new spawnPlease.Promise((resolve, reject) => {

    if (stdin !== undefined) {
      child.stdin.write(stdin)
    }
    child.stdin.end()

    child.stdout.on('data', data => {
      stdout += data
      if (options.stdout) options.stdout(data)
    })

    child.stderr.on('data', data => {
      stderr += data
      if (options.stderr) options.stderr(data)
    })

    if (options.rejectOnError) {
      child.addListener('error', reject)
    }

    child.on('close', code => {
      if (code !== 0 && options.rejectOnError) {
        reject(stderr)
      }
      else {
        resolve(stdout)
      }
    })

  })
}

spawnPlease.Promise = typeof Promise !== 'undefined' ? Promise : null

module.exports = spawnPlease
