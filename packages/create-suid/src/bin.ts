#!/usr/bin/env node
import init from "./actions/init.js";

await init(process.argv[2]);
