import { fetchLatestManifest } from "../utils/npm.js";

export default async function pkgFile(options: {
  name: string;
  deps?: string[];
  devDeps?: string[];
}) {
  const siteManifest = await fetchLatestManifest("@suid/site");

  const dep = (name: string, caret?: boolean) => {
    const ver =
      siteManifest.dependencies?.[name] ??
      siteManifest.devDependencies?.[name] ??
      "*";
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
      dependencies: {
        ...options.deps?.reduce(
          (deps, name) => ({ ...deps, ...dep(name, true) }),
          {} as Record<string, string>
        ),
        ...dep("solid-js"),
      },
      devDependencies: {
        ...options.devDeps?.reduce(
          (deps, name) => ({ ...deps, ...dep(name, true) }),
          {} as Record<string, string>
        ),
        typescript: "^4.8.2",
        ...dep("vite"),
        ...dep("vite-plugin-solid"),
      },
    },
    null,
    2
  );
}
