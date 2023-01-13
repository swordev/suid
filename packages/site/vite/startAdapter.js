// @ts-check
import { spawn } from "child_process";
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
        await builder.spaClient(join(config.root, "dist"));
      }
    },
  };
}
