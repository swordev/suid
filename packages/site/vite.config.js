import { readdirSync, readFileSync } from "fs";
import { writeFile } from "fs/promises";
import { createRequire } from "module";
import { dirname, join, resolve } from "path";
import copy from "rollup-plugin-copy";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "./../vite-plugin/src";
import readTypings from "./vite/readTypings";

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
    splitVendorChunkPlugin(),
    solidPlugin(),
    copy({
      targets: [{ src: "src/assets/*", dest: "dist/assets/" }],
      hook: "writeBundle",
    }),
    VitePWA({
      manifestFilename: "manifest.json",
      includeAssets: ["/assets/*"],
      manifest: {
        name: "SUID",
        short_name: "SUID",
        description: "SUID",
        theme_color: "#1976d2",
        background_color: "#1976d2",
        display: "standalone",
        icons: [
          {
            src: "windows11/SmallTile.scale-100.png",
            sizes: "71x71",
          },
          {
            src: "windows11/SmallTile.scale-125.png",
            sizes: "89x89",
          },
          {
            src: "windows11/SmallTile.scale-150.png",
            sizes: "107x107",
          },
          {
            src: "windows11/SmallTile.scale-200.png",
            sizes: "142x142",
          },
          {
            src: "windows11/SmallTile.scale-400.png",
            sizes: "284x284",
          },
          {
            src: "windows11/Square150x150Logo.scale-100.png",
            sizes: "150x150",
          },
          {
            src: "windows11/Square150x150Logo.scale-125.png",
            sizes: "188x188",
          },
          {
            src: "windows11/Square150x150Logo.scale-150.png",
            sizes: "225x225",
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300",
          },
          {
            src: "windows11/Square150x150Logo.scale-400.png",
            sizes: "600x600",
          },
          {
            src: "windows11/Wide310x150Logo.scale-100.png",
            sizes: "310x150",
          },
          {
            src: "windows11/Wide310x150Logo.scale-125.png",
            sizes: "388x188",
          },
          {
            src: "windows11/Wide310x150Logo.scale-150.png",
            sizes: "465x225",
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300",
          },
          {
            src: "windows11/Wide310x150Logo.scale-400.png",
            sizes: "1240x600",
          },
          {
            src: "windows11/LargeTile.scale-100.png",
            sizes: "310x310",
          },
          {
            src: "windows11/LargeTile.scale-125.png",
            sizes: "388x388",
          },
          {
            src: "windows11/LargeTile.scale-150.png",
            sizes: "465x465",
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            sizes: "620x620",
          },
          {
            src: "windows11/LargeTile.scale-400.png",
            sizes: "1240x1240",
          },
          {
            src: "windows11/Square44x44Logo.scale-100.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.scale-125.png",
            sizes: "55x55",
          },
          {
            src: "windows11/Square44x44Logo.scale-150.png",
            sizes: "66x66",
          },
          {
            src: "windows11/Square44x44Logo.scale-200.png",
            sizes: "88x88",
          },
          {
            src: "windows11/Square44x44Logo.scale-400.png",
            sizes: "176x176",
          },
          {
            src: "windows11/StoreLogo.scale-100.png",
            sizes: "50x50",
          },
          {
            src: "windows11/StoreLogo.scale-125.png",
            sizes: "63x63",
          },
          {
            src: "windows11/StoreLogo.scale-150.png",
            sizes: "75x75",
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            sizes: "100x100",
          },
          {
            src: "windows11/StoreLogo.scale-400.png",
            sizes: "200x200",
          },
          {
            src: "windows11/SplashScreen.scale-100.png",
            sizes: "620x300",
          },
          {
            src: "windows11/SplashScreen.scale-125.png",
            sizes: "775x375",
          },
          {
            src: "windows11/SplashScreen.scale-150.png",
            sizes: "930x450",
          },
          {
            src: "windows11/SplashScreen.scale-200.png",
            sizes: "1240x600",
          },
          {
            src: "windows11/SplashScreen.scale-400.png",
            sizes: "2480x1200",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-16.png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-20.png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-24.png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-30.png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-32.png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-36.png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-40.png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-44.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-48.png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-60.png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-64.png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-72.png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-80.png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-96.png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-256.png",
            sizes: "256x256",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            sizes: "256x256",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            sizes: "256x256",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512",
          },
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192",
          },
          {
            src: "android/android-launchericon-144-144.png",
            sizes: "144x144",
          },
          {
            src: "android/android-launchericon-96-96.png",
            sizes: "96x96",
          },
          {
            src: "android/android-launchericon-72-72.png",
            sizes: "72x72",
          },
          {
            src: "android/android-launchericon-48-48.png",
            sizes: "48x48",
          },
          {
            src: "ios/16.png",
            sizes: "16x16",
          },
          {
            src: "ios/20.png",
            sizes: "20x20",
          },
          {
            src: "ios/29.png",
            sizes: "29x29",
          },
          {
            src: "ios/32.png",
            sizes: "32x32",
          },
          {
            src: "ios/40.png",
            sizes: "40x40",
          },
          {
            src: "ios/50.png",
            sizes: "50x50",
          },
          {
            src: "ios/57.png",
            sizes: "57x57",
          },
          {
            src: "ios/58.png",
            sizes: "58x58",
          },
          {
            src: "ios/60.png",
            sizes: "60x60",
          },
          {
            src: "ios/64.png",
            sizes: "64x64",
          },
          {
            src: "ios/72.png",
            sizes: "72x72",
          },
          {
            src: "ios/76.png",
            sizes: "76x76",
          },
          {
            src: "ios/80.png",
            sizes: "80x80",
          },
          {
            src: "ios/87.png",
            sizes: "87x87",
          },
          {
            src: "ios/100.png",
            sizes: "100x100",
          },
          {
            src: "ios/114.png",
            sizes: "114x114",
          },
          {
            src: "ios/120.png",
            sizes: "120x120",
          },
          {
            src: "ios/128.png",
            sizes: "128x128",
          },
          {
            src: "ios/144.png",
            sizes: "144x144",
          },
          {
            src: "ios/152.png",
            sizes: "152x152",
          },
          {
            src: "ios/167.png",
            sizes: "167x167",
          },
          {
            src: "ios/180.png",
            sizes: "180x180",
          },
          {
            src: "ios/192.png",
            sizes: "192x192",
          },
          {
            src: "ios/256.png",
            sizes: "256x256",
          },
          {
            src: "ios/512.png",
            sizes: "512x512",
          },
          {
            src: "ios/1024.png",
            sizes: "1024x1024",
          },
          {
            src: "assets/fonts/Cairo-Bold.ttf",
          },
          {
            src: "assets/fonts/Cairo-Regular.ttf",
          },
        ],
      },
    }),
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
    }),
    {
      name: "prepare-deploy",
      async closeBundle() {
        const distPath = join(__dirname, "dist");
        const redirectsPath = join(distPath, "_redirects");
        await writeFile(redirectsPath, "/* /index.html 200");
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
