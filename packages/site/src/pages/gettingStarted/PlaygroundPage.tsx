import sdk from "@stackblitz/sdk";
import Box from "@suid/material/Box";
import Skeleton from "@suid/material/Skeleton";
import Typography from "@suid/material/Typography";
import createElementRef from "@suid/system/createElementRef";
import { createSignal, onMount, Show } from "solid-js";
import PageNav from "~/components/PageNav";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";

export default function PlaygroundPage() {
  const element = createElementRef();
  const layoutContext = useLayoutContext();
  const [ready, setReady] = createSignal(false);
  onMount(async () => {
    sdk.embedProjectId(element.ref, "suid-playground", {
      forceEmbedLayout: true,
      openFile: "src/App.tsx",
      theme: layoutContext.darkMode ? "dark" : "light",
    });

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
          "& iframe": {
            height: "70vh",
            border: 0,
          },
        }}
      >
        <Show when={!ready()}>
          <Skeleton variant="rectangular" height="70vh" />
        </Show>

        <Box
          sx={{
            ...(!ready() && {
              visibility: "hidden",
              height: "0px",
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
