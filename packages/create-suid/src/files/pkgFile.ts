import { fetchLatestManifest } from "../utils/npm.js";

export default async function pkgFile(options: {
  name: string;
  deps?: string[];
  devDeps?: string[];
}) {
  const siteManifest = await fetchLatestManifest("@suid/site");
  const dependencies = siteManifest.dependencies ?? {};
  const devDependencies = siteManifest.devDependencies ?? {};

  const dep = (name: string, caret?: boolean) => {
    const ver = dependencies[name] ?? devDependencies[name] ?? "*";
    return {
      [name]: caret && /^\d/.test(ver) ? `^${ver}` : ver,
    };
  };

  return JSON.stringify(
    {
      name: options.name,
      version: "0.0.0",
      private: true,
      scripts: {
        build: "vite build",
        start: "vite",
      },
      dependencies: Object.assign(
        {},
        ...(options.deps ?? []).map((name) => dep(name, true)),
        dep("solid-js")
      ),
      devDependencies: Object.assign(
        {},
        ...(options.devDeps ?? []).map((name) => dep(name, true)),
        { typescript: "^4.8.2" },
        dep("vite"),
        dep("vite-plugin-solid")
      ),
    },
    null,
    2
  );
}
