import { createTheme, ThemeProvider } from "@suid/material";
import Box from "@suid/material/Box";
import CssBaseline from "@suid/material/CssBaseline";
import Drawer, { drawerClasses } from "@suid/material/Drawer";
import Toolbar from "@suid/material/Toolbar";
import { createPalette } from "@suid/material/styles/createPalette";
import useMediaQuery from "@suid/material/useMediaQuery";
import { useLocation } from "solid-app-router";
import { createEffect, Show } from "solid-js";
import { createMutable } from "solid-js/store";
import { Routing } from "~/Routing";
import Header from "./Header";
import LayoutContext, { createLayoutMutable } from "./LayoutContext";
import { Nav } from "./Nav";

const drawerWidth = 240;

export function getDefaultPaletteData(mode: "dark" | "light") {
  return {
    mode,
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#01579b",
    },
  };
}

export default function MainLayout() {
  const context = createLayoutMutable({
    drawer: {
      width: drawerWidth,
    },
  });

  const theme = createMutable(
    createTheme({
      palette: createPalette(
        getDefaultPaletteData(context.darkMode ? "dark" : "light")
      ),
    })
  );

  createEffect(
    () => (context.drawer.open = context.drawer.openState || !isDownMd())
  );
  createEffect(() => (context.drawer.permanent = !isDownMd()));

  createEffect((darkMode) => {
    if (darkMode !== context.darkMode)
      theme.palette = createPalette(
        getDefaultPaletteData(context.darkMode ? "dark" : "light")
      );
    return context.darkMode;
  }, context.darkMode);

  const location = useLocation();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isMainPage = () => location.pathname === "/";

  return (
    <LayoutContext.Provider value={context}>
      <ThemeProvider data={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline enableColorScheme />
          <Header />
          <Show when={!isMainPage()}>
            <Drawer
              open={context.drawer.open}
              variant={context.drawer.permanent ? "permanent" : "temporary"}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .${drawerClasses.paper}`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              onClose={() => {
                context.drawer.openState = !context.drawer.openState;
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: "auto" }}>
                <Nav />
              </Box>
            </Drawer>
          </Show>
          <Box component="main" sx={{ width: 1 }}>
            <Toolbar />
            <Routing />
          </Box>
        </Box>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
