import { useTheme } from "@suid/material";
import Chip from "@suid/material/Chip";
import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import Typography from "@suid/material/Typography";
import useMediaQuery from "@suid/material/useMediaQuery";
import { createSignal } from "solid-js";
import PageNav from "~/components/PageNav";
import PaperCode from "~/components/PaperCode";
import { getDependencyName } from "~/utils/getDependencyName";
import indexHtmlFile from "./../../utils/stackblitz/template/index.html?raw";
import appTsxFile from "./../../utils/stackblitz/template/src/App.tsx?raw";
import indexTsxFile from "./../../utils/stackblitz/template/src/index.tsx?raw";
import tsconfigFile from "./../../utils/stackblitz/template/tsconfig.json.source?raw";
import viteConfigFile from "./../../utils/stackblitz/template/vite.config.ts.source?raw";

function File(props: { children: string }) {
  return (
    <Chip
      sx={{
        display: "inline",
        py: "3px",
        mx: 0.2,
        fontSize: "inherit",
        verticalAlign: "unset",
      }}
      color="primary"
      variant="outlined"
      label={props.children}
    />
  );
}

export default function InstallationPage() {
  const [pkgManager, setPkgManager] = createSignal("npm");
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const isDown550 = useMediaQuery(theme.breakpoints.down(550));
  const deps = [
    getDependencyName("@suid/material"),
    getDependencyName("@suid/icons-material"),
  ].join(" ");
  const devDeps = [
    "typescript",
    "vite",
    "vite-plugin-solid",
    getDependencyName("@suid/vite-plugin"),
  ].join(" ");
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        Installation
      </Typography>

      <Typography
        variant={isDown550() ? "body2" : "body1"}
        sx={{ mt: 2, mb: 1.5 }}
      >
        Basic guide to install the library with your favorite package manager:
      </Typography>

      <ToggleButtonGroup
        fullWidth={isXs()}
        color="primary"
        value={pkgManager()}
        exclusive
        size="medium"
        sx={{ mb: 2 }}
        onChange={(event, newValue) => {
          if (newValue) setPkgManager(newValue);
        }}
      >
        <ToggleButton value="npm">npm</ToggleButton>
        <ToggleButton value="pnpm">pnpm</ToggleButton>
        <ToggleButton value="yarn">yarn</ToggleButton>
      </ToggleButtonGroup>

      <Typography component="h2" variant="h5" sx={{}}>
        Auto-installation
      </Typography>

      <Typography variant="body1" sx={{ my: 2 }}>
        Initialize the project with the starter kit.
      </Typography>

      <PaperCode
        toolbar
        language="bash"
        value={
          pkgManager() === "npm"
            ? "npm init suid"
            : `${pkgManager()} create suid`
        }
      />

      <Typography component="h2" variant="h5" sx={{ my: 2 }}>
        Manual installation
      </Typography>

      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          Install the dev dependencies.
        </Typography>

        <PaperCode
          toolbar
          language="bash"
          value={
            pkgManager() === "npm"
              ? `npm ${isDown550() ? "i" : "install"} ${devDeps}`
              : `${pkgManager()} add ${devDeps}`
          }
        />
      </>

      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          Install the SUID dependencies.
        </Typography>

        <PaperCode
          toolbar
          language="bash"
          value={
            pkgManager() === "npm"
              ? `npm ${isDown550() ? "i" : "install"} ${deps}`
              : `${pkgManager()} add ${deps}`
          }
        />
      </>

      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          Create the <File>tsconfig.json</File> file:
        </Typography>

        <PaperCode toolbar language="jsx" value={tsconfigFile} />
      </>

      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          Add the <File>vite.config.ts</File> file with the SolidJS and SUID
          plugins:
        </Typography>

        <PaperCode toolbar language="tsx" value={viteConfigFile} />
      </>

      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          Create the <File>index.html</File> file with the Roboto font:
        </Typography>

        <PaperCode toolbar language="html" value={indexHtmlFile} />
      </>

      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          Add the <File>src/index.tsx</File> entry file:
        </Typography>

        <PaperCode toolbar language="tsx" value={indexTsxFile} />
      </>
      <>
        <Typography variant="body1" sx={{ my: 2 }}>
          And finally add your <File>src/App.tsx</File>:
        </Typography>

        <PaperCode toolbar language="tsx" value={appTsxFile} />
      </>
      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
