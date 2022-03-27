import Box from "@suid/material/Box";
import Skeleton from "@suid/material/Skeleton";
import Typography from "@suid/material/Typography";
import createElementRef from "@suid/system/createElementRef";
import { createSignal, onMount, Show } from "solid-js";
import PageNav from "~/components/PageNav";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";
import buildProjectOptions from "~/utils/stackblitz/buildProjectOptions";
import embedProject from "~/utils/stackblitz/embedProject";

export default function PlaygroundPage() {
  const element = createElementRef();
  const layoutContext = useLayoutContext();
  const [ready, setReady] = createSignal(false);
  onMount(() => {
    embedProject(
      element.ref,
      buildProjectOptions({
        title: "SUID Playground",
      }),
      {
        forceEmbedLayout: true,
        theme: layoutContext.darkMode ? "dark" : "light",
      }
    );
    setTimeout(() => {
      setReady(true);
    }, 1500);
  });

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        Playground
      </Typography>

      <Box
        sx={{
          mt: 2,
          height: "70vh",
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
          sx={{
            height: 1,
            ...(!ready() && {
              visibility: "hidden",
              height: 0,
            }),
          }}
        >
          <aside ref={element} />
        </Box>
      </Box>
      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
