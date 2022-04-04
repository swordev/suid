const chai = require('chai')
const should = chai.should()
const chaiAsPromised = require('chai-as-promised')
const BluebirdPromise = require('bluebird')
const requireNew = require('require-new')
const spawn = require('../index.js')

chai.use(chaiAsPromised)

describe('spawn-please', () => {

  it('resolve on success', async () => {
    await spawn('true')
  })

  it('reject on fail', async () => {
    return spawn('false')
      .catch(function (err) {
        should.exist(err)
      })
  })

  it('allow errors to be ignored with rejectOnError:false', async () => {
    await spawn('false', [], { rejectOnError: false })
  })

  it('handle command-line arguments', async () => {
    const output = await spawn('printf', ['hello'])
    output.should.equal('hello')
  })

  it('accept stdin', async () => {
    const output = await spawn('cat', [], 'test')
    output.should.equal('test')
  })

  it('allow you to specify a custom Promise', () => {
    const spawn = requireNew('../index.js')
    spawn('true').should.not.be.an.instanceof(BluebirdPromise)
    spawn.Promise = BluebirdPromise
    spawn('true').should.be.an.instanceof(BluebirdPromise)
  })

  it('accept options as second argument', async () => {
    const pwd = await spawn('pwd', [], 'test', { cwd: __dirname })
    pwd.trim().should.equal(__dirname)
    // stdin should still be read
    const cat = await spawn('cat', [], 'test', { cwd: __dirname })
    cat.should.equal('test')
  })

  it('accept options as third argument', async () => {
    const output = await spawn('pwd', [], { cwd: __dirname })
    output.trim().should.equal(__dirname)
  })

  it('only resolve stdout when fulfilled', async () => {
    const output = await spawn('node', ['./stdout-and-stderr.js'], { cwd: __dirname })
    output.should.equal('STDOUT\n')
  })

  it('expose stdout and stderr', () => {
    let stdoutOutput = ''
    let stderrOutput = ''
    return spawn('node', ['./stdout-and-stderr.js'], {
      cwd: __dirname,
      stderr: function (data) {
        stderrOutput += data
      },
      stdout: function (data) {
        stdoutOutput += data
      },
    })
      .then(() => {
        stderrOutput.trim().should.equal('STDERR')
        stdoutOutput.trim().should.equal('STDOUT')
      })
  })

})
