import { get } from "https";

export async function fetchLatestManifest(name: string) {
  const url = `https://registry.npmjs.org/${name}/latest`;
  return new Promise<{
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  }>((resolve, reject) => {
    get(url, (res) => {
      let json = "";
      res.on("data", (chunk) => (json += chunk));
      res.on("end", () => resolve(JSON.parse(json)));
    }).on("error", reject);
  });
}

export async function fetchLatestVersion(name: string) {
  return (await fetchLatestManifest(name)).version;
}
