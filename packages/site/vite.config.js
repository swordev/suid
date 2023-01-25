import { readdirSync, readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { createRequire } from "module";
import { dirname, join, resolve } from "path";
import solidPlugin from "solid-start/vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import suidPlugin from "./../vite-plugin/src";
import readTypings from "./vite/readTypings";
import startAdapter from "./vite/startAdapter";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const solidJsPath = dirname(dirname(require.resolve("solid-js")));
const SOLID_TYPINGS = readTypings(solidJsPath);
const packageDir = `${__dirname}/../`;
const parseJsonFile = (path) => JSON.parse(readFileSync(path).toString());

const SUID_PKG_NAMES = readdirSync(packageDir);
const SUID_VERSIONS = SUID_PKG_NAMES.reduce((result, name) => {
  const pkg = parseJsonFile(`${packageDir}/${name}/package.json`);
  result[pkg.name] = pkg.version;
  if (name === "site") {
    result["solid-js"] = pkg.dependencies["solid-js"];
    result["vite"] = pkg.devDependencies["vite"];
    result["vite-plugin-solid"] = pkg.devDependencies["vite-plugin-solid"];
  } else if (name === "codemod") {
    result["ts-morph"] = pkg.dependencies["ts-morph"];
  }
  return result;
}, {});

const basePkg = parseJsonFile(`${packageDir}/../package.json`);
SUID_VERSIONS.typescript = basePkg.devDependencies.typescript;

export default defineConfig({
  define: {
    SUID_PKG_NAMES: SUID_PKG_NAMES.map((name) => `@suid/${name}`),
    SUID_VERSIONS,
    SOLID_TYPINGS,
  },
  plugins: [
    {
      name: "examples",
      enforce: "pre",
      transform(code, id) {
        if (id.includes("Example") && id.endsWith(".tsx")) {
          const exportDefaultRegex = /export\s+default\s+function\s+(\w+)/;
          const matches = exportDefaultRegex.exec(code);

          if (exportDefaultRegex) {
            const [, functionName] = matches;
            const originalCode = code
              .split(/\r?\n/)
              .filter((line) => !line.trim().startsWith("// eslint-disable"))
              .join("\n");

            code = code.replace(/export\s+default\s+function/, "function");
            code += `\n${functionName}.code = ${JSON.stringify(
              originalCode
            )};\n`;
            code += `\nexport default ${functionName}`;
            return code;
          }
        }
      },
    },
    suidPlugin(),
    solidPlugin({
      ssr: process.env.SSR === "1" || process.env.SSR === "true",
      adapter: startAdapter(),
    }),
    {
      name: "prepare-deploy",
      async closeBundle() {
        const distPath = join(__dirname, "dist");
        await writeFile(join(distPath, "_redirects"), "/* /index.html 200");
      },
    },
  ],
  build: {
    target: "esnext",
  },
  esbuild: {
    keepNames: true,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      "@suid/types": resolve(__dirname, "../types/src"),
      "@suid/codemod": resolve(__dirname, "../codemod/src"),
      "@suid/css": resolve(__dirname, "../css/src"),
      "@suid/utils": resolve(__dirname, "../utils/src"),
      "@suid/styled-engine": resolve(__dirname, "../styled-engine/src"),
      "@suid/base": resolve(__dirname, "../base/src"),
      "@suid/system": resolve(__dirname, "../system/src"),
      "@suid/material": resolve(__dirname, "../material/src"),
      "@suid/icons-material": resolve(__dirname, "../icons-material/lib"),
    },
  },
});
