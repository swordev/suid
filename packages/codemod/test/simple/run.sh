#! /bin/sh

rm -rf test/simple/out/; ./lib/bin.js react2solid -i test/simple/src/ -o test/simple/out/

(set -x; cat test/simple/src/index.tsx)
echo
(set -x; cat test/simple/out/index.tsx)
