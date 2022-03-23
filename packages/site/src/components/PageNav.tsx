import NavigateBeforeIcon from "@suid/icons-material/NavigateBefore";
import NavigateNextIcon from "@suid/icons-material/NavigateNext";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Divider from "@suid/material/Divider";
import SxProps from "@suid/system/sxProps";
import { useLocation } from "solid-app-router";
import { createMemo, mergeProps, Show } from "solid-js";
import { tryPreload } from "~/Routing";
import { findNavConfigs } from "~/layouts/MainLayout/Nav";

export default function PageNav(inProps: {
  prev?: { text: string; href: string } | "auto" | false;
  next?: { text: string; href: string } | "auto" | false;
  sx?: SxProps;
}) {
  const loc = useLocation();
  const prevProp = () => inProps.prev ?? "auto";
  const nextProp = () => inProps.next ?? "auto";
  const navConfigs = createMemo(() => {
    if (prevProp() === "auto" || nextProp() === "auto") {
      return findNavConfigs(loc.pathname);
    }
  });
  const props = mergeProps(inProps, () => ({
    prev: prevProp() === "auto" ? navConfigs()?.prev : undefined,
    next: nextProp() === "auto" ? navConfigs()?.next : undefined,
  }));

  return (
    <Box sx={props.sx}>
      <Divider />
      <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
        <Show when={!!props.prev} fallback={<div />}>
          <Button
            size="large"
            component="a"
            onMouseEnter={tryPreload}
            variant="outlined"
            href={props.prev?.href}
            startIcon={<NavigateBeforeIcon sx={{ ml: 1 }} />}
            sx={{
              p: 2,
              m: 2,
              minWidth: 200,
              justifyContent: "start",
            }}
          >
            {props.prev?.text}
          </Button>
        </Show>
        <Show when={!!props.next}>
          <Button
            size="large"
            component="a"
            onMouseEnter={tryPreload}
            variant="outlined"
            href={props.next?.href}
            endIcon={<NavigateNextIcon sx={{ mr: 1 }} />}
            sx={{ p: 2, m: 2, minWidth: 200, justifyContent: "end" }}
          >
            {props.next?.text}
          </Button>
        </Show>
      </Box>
    </Box>
  );
}
