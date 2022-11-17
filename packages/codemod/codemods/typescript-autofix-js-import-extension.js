/*

typescript: autofix js import extension

parse the output of tsc for "Did you mean" suggestions
and autofix the typescript source files



why

node 19 has removed the --experimental-specifier-resolution flag
so we cannot call

  node --experimental-specifier-resolution=node index.js

to import files without file extension

we could use custom loaders like

  node --loader=some/where.js index.js

but adding the ".js" file extension is a simpler fix



usage

update your tsconfig.json to produce error TS2835
"Relative import paths need explicit file extensions in EcmaScript imports"

  {
    "compilerOptions": {
      "moduleResolution": "nodeNext",
    },
  }

run tsc, save output to a logfile

  npx tsc | tee tsc.log

or

  npm run build | tee tsc.log

run this script

  cat tsc.log | node typescript-autofix-js-import-extension.js

check the "patching file" output
if it looks good, run this script again with '-w'

  cat tsc.log | node typescript-autofix-js-import-extension.js -w



similar tools

https://www.npmjs.com/package/@digitak/tsc-esm

https://github.com/Zoltu/typescript-transformer-append-js-extension

https://gist.github.com/weswigham/f477373b6124cc43df5356c75f66911b



related issues

https://github.com/microsoft/TypeScript/issues/19255

https://github.com/microsoft/TypeScript/issues/16577



license: MIT

*/



/*
const readline = require('readline');
const fs = require('fs');
const process = require('process');
*/
import readline from 'readline';
import fs from 'fs';
import process from 'process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (logLine) => {
  //console.log(logLine);
  const match = logLine.match(/^(.*?\.(ts|tsx))\((\d+),(\d+)\): error (TS\d+): (.*)$/)
  if (!match) {
    console.log(`ignoring line: ${logLine}`)
    return
  }
  const [_, file, _ext, lineNum, columnNum, err, msg] = match
  const lineIdx = +lineNum - 1
  const columnIdx = +columnNum - 1
  if (err == "TS2835") {
    // Relative import paths need explicit file extensions in EcmaScript imports
    // when '--moduleResolution' is 'node16' or 'nodenext'.
    // Did you mean './path/to/file.js'?
    const fixedImport = (msg.match(/Did you mean '(.*)'\?$/) || [])[1]
    if (!fixedImport) {
      console.log(`no fixedImport in line: ${logLine}`)
      return
    }
    // only fix relative imports
    // todo: fix module file imports like "some-module/lib/some-file"
    if (!(
      fixedImport.startsWith("./") ||
      fixedImport.startsWith("../")
    )) {
      return
    }
    const badImport = fixedImport.slice(0, -3) // remove .js extension
    const src = fs.readFileSync(file, "utf8")
    const lines = src.split("\n")
    const line = lines[lineIdx]
    //const string = line.slice(columnIdx)
    const quote = line[columnIdx]
    const fixedLine = line.replace(
      quote + badImport + quote,
      quote + fixedImport + quote
    )
    if (line == fixedLine) {
      return
    }
    lines[lineIdx] = fixedLine
    console.log(`patching file: ${file}:\n  - ${line}\n  + ${fixedLine}`)
    if (process.argv.includes("-w")) {
      // write file
      fs.writeFileSync(file, lines.join("\n"), "utf8")
    }
    return
  }
  console.log(logLine);
});

rl.once('close', () => {
  // end of input
  if (!process.argv.includes("-w")) {
    console.log("done. run this script with argument '-w' to write files");
  }
});
