import { request } from "https";

export async function fetchLatestManifest(name: string) {
  const url = `https://registry.npmjs.org/${name}/latest`;
  return new Promise<{
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  }>((resolve, reject) => {
    let json = "";
    const req = request(url, (res) => {
      res.on("data", (chunk) => (json += chunk));
      res.on("close", () => resolve(JSON.parse(json)));
    });
    req.on("error", reject);
    req.end();
  });
}

export async function fetchLatestVersion(name: string) {
  return (await fetchLatestManifest(name)).version;
}
