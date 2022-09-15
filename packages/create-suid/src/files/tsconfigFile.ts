export default function tsconfigFile() {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ESNext",
        module: "ESNext",
        moduleResolution: "node",
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        jsx: "preserve",
        jsxImportSource: "solid-js",
        types: ["vite/client"],
        noEmit: true,
        isolatedModules: true,
      },
    },
    null,
    2
  );
}
