import DarkModeOutlinedIcon from "@suid/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@suid/icons-material/LightModeOutlined";
import MenuIcon from "@suid/icons-material/Menu";
import { useTheme } from "@suid/material";
import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import useMediaQuery from "@suid/material/useMediaQuery";
import createSvgIcon from "@suid/material/utils/createSvgIcon";
import { useLocation } from "solid-app-router";
import { Show } from "solid-js";
import { tryPreload } from "~/Routing";
import { saveDarkMode, useLayoutContext } from "./LayoutContext";

const GitHubIcon = createSvgIcon(
  () => (
    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
  ),
  "GitHub"
);

export function getDefaultPaletteData(mode: "dark" | "light") {
  return {
    mode,
    primary: {
      main: "#af1c2e",
    },
    secondary: {
      main: "#af1c2e",
    },
  };
}

export default function Header() {
  const layoutContext = useLayoutContext();
  const theme = useTheme();
  const location = useLocation();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMainPage = () => location.pathname === "/";

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{ zIndex: theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Show when={isDownMd() && !isMainPage()}>
          <IconButton
            color="inherit"
            sx={{ mr: 1 }}
            onClick={() => {
              layoutContext.drawer.openState = !layoutContext.drawer.openState;
            }}
          >
            <MenuIcon />
          </IconButton>
        </Show>
        <Typography
          component="a"
          variant="h6"
          noWrap
          sx={{ mr: 3, textDecoration: "none", color: "inherit" }}
          href="/"
        >
          SUID
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            [`.${Button}`]: {
              mx: 0.5,
            },
          }}
        >
          <Show when={!xs()}>
            <Button
              color="inherit"
              href="/getting-started/installation"
              onMouseEnter={tryPreload}
            >
              Docs
            </Button>
            <Button
              color="inherit"
              href="/tools/playground"
              onMouseEnter={tryPreload}
            >
              Playground
            </Button>
            <Button
              color="inherit"
              href="/tools/react-to-solid"
              onMouseEnter={tryPreload}
            >
              React2Solid
            </Button>
          </Show>
        </Box>
        <IconButton
          color="inherit"
          onClick={() => {
            layoutContext.darkMode = !layoutContext.darkMode;
            saveDarkMode(layoutContext.darkMode);
          }}
        >
          <Show
            when={!layoutContext.darkMode}
            fallback={<LightModeOutlinedIcon />}
          >
            <DarkModeOutlinedIcon />
          </Show>
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://github.com/swordev/suid"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
