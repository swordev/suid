/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NavigateBeforeIcon from "@suid/icons-material/NavigateBefore";
import NavigateNextIcon from "@suid/icons-material/NavigateNext";
import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Divider from "@suid/material/Divider";
import Grid from "@suid/material/Grid";
import useMediaQuery from "@suid/material/useMediaQuery";
import SxProps from "@suid/system/sxProps";
import { useLocation } from "solid-app-router";
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
      component="a"
      size="large"
      fullWidth={xs()}
      onMouseEnter={tryPreload}
      variant="outlined"
      href={props.href}
      {...(props.dir === "prev"
        ? {
            startIcon: () => <NavigateBeforeIcon />,
          }
        : {})}
      {...(props.dir === "next"
        ? {
            endIcon: () => <NavigateNextIcon />,
          }
        : {})}
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
  const props = mergeProps(inProps, () => ({
    prev: prevProp() === "auto" ? navConfigs()?.prev : undefined,
    next: nextProp() === "auto" ? navConfigs()?.next : undefined,
  }));

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
                href={props.prev!.href}
                text={props.prev!.text}
              />
            </Show>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
            <Show when={!!props.next}>
              <NavButton
                dir="next"
                preload={props.preload ?? true}
                href={props.next!.href}
                text={props.next!.text}
              />
            </Show>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
