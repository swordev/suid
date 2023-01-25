// @ts-check
import { spawn } from "child_process";
import { rm } from "fs/promises";
import { join } from "path";
import nodeAdapter from "solid-start-node";

export default function () {
  const node = nodeAdapter();
  return {
    name: "suid",
    async start(config, options) {
      if (config.solidOptions.ssr) {
        return await node.start(config, options);
      } else {
        spawn(
          "vite",
          [
            "preview",
            ...(config ? ["--config", config.configFile] : []),
            ...(options.port ? ["--port", options.port] : []),
          ],
          {
            stdio: "inherit",
            shell: true,
          }
        );
      }
    },
    async build(config, builder) {
      if (config.solidOptions.ssr) {
        await node.build(config, builder);
      } else {
        const path = join(config.root, "dist");
        await builder.spaClient(path);

        const removeFiles = [
          ".solid",
          "manifest.json",
          "route-manifest.json",
          "ssr-manifest.json",
        ];

        for (const file of removeFiles) {
          const filePath = join(path, file);
          try {
            await rm(filePath, {
              recursive: true,
            });
          } catch (error) {
            if (error.code !== "ENOENT") throw error;
          }
        }
      }
    },
  };
}
