import { useLocation, A } from "@solidjs/router";
import NavigateBeforeIcon from "@suid/icons-material/NavigateBefore";
import NavigateNextIcon from "@suid/icons-material/NavigateNext";
import { useTheme } from "@suid/material";
import { Box, Button, Divider, Grid, useMediaQuery } from "@suid/material";
import SxProps from "@suid/system/sxProps";
import { createMemo, mergeProps, Show } from "solid-js";
import { tryPreload } from "~/Routing";
import { findNavConfigs } from "~/layouts/MainLayout/Nav";

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any)["msMaxTouchPoints"] > 0
  );
}

function NavButton(props: {
  href: string;
  text: string;
  dir: "prev" | "next";
  preload?: boolean;
}) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  if (props.preload && isTouchDevice()) tryPreload(props.href);
  return (
    <Button
      component={A}
      size="large"
      fullWidth={xs()}
      onMouseEnter={tryPreload}
      variant="outlined"
      href={props.href}
      startIcon={props.dir === "prev" ? <NavigateBeforeIcon /> : undefined}
      endIcon={props.dir === "next" ? <NavigateNextIcon /> : undefined}
      sx={{
        p: 2,
        minWidth: 200,
        ...(!xs() && {
          justifyContent: props.dir === "prev" ? "start" : "end",
        }),
      }}
    >
      {props.text}
    </Button>
  );
}

export default function PageNav(inProps: {
  prev?: { text: string; href: string } | "auto" | false;
  next?: { text: string; href: string } | "auto" | false;
  /**
   * @default true
   */
  preload?: boolean;
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
  const props = mergeProps(inProps, {
    get prev() {
      return prevProp() === "auto" ? navConfigs()?.prev : undefined;
    },
    get next() {
      return nextProp() === "auto" ? navConfigs()?.next : undefined;
    },
  });
  const prev = () => props.prev as { href: string; text: string };
  const next = () => props.next as { href: string; text: string };

  return (
    <Box sx={props.sx}>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Show when={!!props.prev} fallback={<div />}>
              <NavButton
                dir="prev"
                preload={props.preload ?? true}
                href={prev().href}
                text={prev().text}
              />
            </Show>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
            <Show when={!!props.next}>
              <NavButton
                dir="next"
                preload={props.preload ?? true}
                href={next().href}
                text={next().text}
              />
            </Show>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
