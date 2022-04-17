import { createTheme, ThemeProvider } from "@suid/material";
import Box from "@suid/material/Box";
import CssBaseline from "@suid/material/CssBaseline";
import Drawer, { drawerClasses } from "@suid/material/Drawer";
import Toolbar from "@suid/material/Toolbar";
import { createPalette } from "@suid/material/styles/createPalette";
import useMediaQuery from "@suid/material/useMediaQuery";
import { useLocation } from "solid-app-router";
import { createEffect, createMemo, createSignal, Show } from "solid-js";
import { Routing, RoutingElementContainer } from "~/Routing";
import Footer from "~/layouts/MainLayout/Footer";
import PlaygroundPage from "~/pages/tools/PlaygroundPage";
import Header from "./Header";
import LayoutContext, { createLayoutMutable } from "./LayoutContext";
import { Nav } from "./Nav";

const drawerWidth = 240;

export default function MainLayout() {
  const context = createLayoutMutable({
    drawer: {
      width: drawerWidth,
    },
  });

  const palette = createMemo(() =>
    createPalette({
      mode: context.darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#01579b",
      },
    })
  );

  const theme = createTheme({
    palette,
  });

  const location = useLocation();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const isFullWidthPage = () =>
    location.pathname === "/" || location.pathname.startsWith("/tools/");
  const showMenu = createMemo(() => location.pathname !== "/");
  const isPlaygroundPage = () => location.pathname === "/tools/playground";
  const [playgroundLoaded, setPlaygroundLoaded] = createSignal(false);

  createEffect(() => (context.drawer.permanent = md() ? false : true));
  createEffect(
    () =>
      (context.drawer.visible =
        context.drawer.permanent || context.drawer.openState)
  );
  createEffect(() => {
    if (context.drawer.visible && !isFullWidthPage()) {
      context.drawer.visibleWidth = drawerWidth;
    } else {
      context.drawer.visibleWidth = 0;
    }
  });

  createEffect<boolean>((loaded) => {
    if (!loaded && isPlaygroundPage()) {
      setPlaygroundLoaded(true);
      return true;
    } else {
      return false;
    }
  }, playgroundLoaded());

  return (
    <LayoutContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", minHeight: "calc(100vh - 100px)" }}>
          <CssBaseline enableColorScheme />
          <Header />
          <Show when={showMenu()}>
            <Drawer
              open={context.drawer.visible}
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
            <Show when={playgroundLoaded()}>
              <RoutingElementContainer
                fullWidth
                sx={{
                  display: isPlaygroundPage() ? "block" : "none",
                }}
              >
                <PlaygroundPage visible={isPlaygroundPage()} />
              </RoutingElementContainer>
            </Show>
            <Routing />
          </Box>
        </Box>
        <Footer />
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
