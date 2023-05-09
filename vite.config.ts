import { resolve } from "path";
import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solidPlugin({})],
  build: {
    target: "esnext",
  },
  test: {
    benchmark: {
      include: ["./packages/*/{src,test}/**/*.bench.{ts,tsx}"],
    },
    include: ["./packages/*/{src,test}/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    typecheck: {
      ignoreSourceErrors: true,
      include: [
        "./packages/system/test/styled.test.tsx",
        "./packages/system/src/Box/Box.test.tsx",
      ],
    },
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
  resolve: {
    conditions: ["development", "browser"],
    alias: {
      "@suid/types": resolve(__dirname, "packages/types/src"),
      "@suid/codemod": resolve(__dirname, "packages/codemod/src"),
      "@suid/css": resolve(__dirname, "packages/css/src"),
      "@suid/utils": resolve(__dirname, "packages/utils/src"),
      "@suid/styled-engine": resolve(__dirname, "packages/styled-engine/src"),
      "@suid/base": resolve(__dirname, "packages/base/src"),
      "@suid/system": resolve(__dirname, "packages/system/src"),
      "@suid/material": resolve(__dirname, "packages/material/src"),
      "@suid/icons-material": resolve(__dirname, "packages/icons-material/lib"),
    },
  },
});
