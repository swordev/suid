import Box from "@suid/material/Box";
import Skeleton from "@suid/material/Skeleton";
import Typography from "@suid/material/Typography";
import { useTheme } from "@suid/material/styles";
import useMediaQuery from "@suid/material/useMediaQuery";
import createElementRef from "@suid/system/createElementRef";
import { createEffect, createSignal, Show } from "solid-js";
import PageNav from "~/components/PageNav";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";
import buildProjectOptions from "~/utils/stackblitz/buildProjectOptions";
import embedProject from "~/utils/stackblitz/embedProject";

let embed = false;

export default function PlaygroundPage(props: { visible: boolean }) {
  const wrapper = createElementRef();
  const layoutContext = useLayoutContext();
  const [ready, setReady] = createSignal(false);
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  const start = () => {
    const aside = document.createElement("aside");
    wrapper.ref.innerHTML = "";
    wrapper.ref.append(aside);
    embedProject(
      aside,
      buildProjectOptions({
        title: "SUID Playground",
      }),
      {
        forceEmbedLayout: true,
        theme: layoutContext.darkMode ? "dark" : "light",
      }
    ).then(() => {
      embed = true;
    });
  };

  setTimeout(() => {
    setReady(true);
  }, 1500);

  createEffect(() => {
    if (props.visible && !embed) {
      start();
    }
  });

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        Playground
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Have fun playing with SUID.
      </Typography>
      <Box
        sx={{
          mt: 2,
          minHeight: "400px",
          height: `calc(100vh - ${theme.spacing(xs() ? 65 : 55)})`,
          [`& iframe`]: {
            height: 1,
            border: 0,
          },
        }}
      >
        <Show when={!ready()}>
          <Skeleton variant="rectangular" height="100%" />
        </Show>

        <Box
          ref={wrapper}
          sx={{
            height: 1,
            ...(!ready() && {
              visibility: "hidden",
              height: 0,
            }),
          }}
        />
      </Box>
      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
