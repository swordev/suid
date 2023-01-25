const n=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      rel="stylesheet"
    />
    <title>Suid App</title>
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="/src/index.tsx" type="module"><\/script>
  </body>
</html>
`,t=`import { Button } from "@suid/material";

export default function App() {
  return <Button variant="contained">Hello world</Button>;
}
`,e=`/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";

render(() => <App />, document.getElementById("root")!);
`,o=`{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "types": ["vite/client"],
    "noEmit": true,
    "isolatedModules": true
  }
}
`,i=`import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  plugins: [suidPlugin(), solidPlugin()],
  build: {
    target: "esnext",
  },
});
`;export{t as a,n as b,e as i,o as t,i as v};
