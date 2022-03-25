import CheckIcon from "@suid/icons-material/Check";
import CheckBoxIcon from "@suid/icons-material/CheckBox";
import ContentCopyRoundedIcon from "@suid/icons-material/ContentCopyRounded";
import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button, { buttonClasses, ButtonProps } from "@suid/material/Button";
import Container from "@suid/material/Container";
import Divider from "@suid/material/Divider";
import Fade from "@suid/material/Fade";
import Grid from "@suid/material/Grid";
import Link from "@suid/material/Link";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import useMediaQuery from "@suid/material/useMediaQuery";
import createRef from "@suid/system/createRef";
import { Link as RouterLink } from "solid-app-router";
import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import { tryPreload } from "~/Routing";
import TypingEffect, {
  TypingsEffectActionsRef,
} from "~/components/TypingEffect";
import copyText from "~/utils/copyText";

function InstallButton(props: ButtonProps) {
  const [copied, setCopied] = createSignal(false);
  const code = "npm i @suid/material";
  let timeout: number | undefined;
  createEffect(() => {
    if (!copied()) return;
    clearTimeout(timeout);
    timeout = window.setTimeout(() => setCopied(false), 2000);
  });
  onCleanup(() => clearTimeout(timeout));
  return (
    <Button
      variant="outlined"
      size="large"
      endIcon={
        <Show when={copied()} fallback={<ContentCopyRoundedIcon />}>
          <CheckIcon />
        </Show>
      }
      {...props}
      sx={{
        textTransform: "none",
        borderRadius: 3,
        ...(props.fullWidth && {
          [`& .${buttonClasses.endIcon}`]: {
            position: "absolute",
            right: 0,
            mr: "10px",
          },
        }),
        ...(props.sx ?? {}),
      }}
      onClick={(event) => {
        setCopied(true);
        copyText(code);
        if (typeof props.onClick === "function") props.onClick(event);
      }}
    >
      {code}
    </Button>
  );
}

function ListItemFeature(props: { text: string; checkbox?: boolean }) {
  return (
    <ListItem disablePadding>
      <Show when={props.checkbox}>
        <ListItemIcon sx={{ minWidth: 35 }}>
          <CheckBoxIcon />
        </ListItemIcon>
      </Show>
      <ListItemText>{props.text} </ListItemText>
    </ListItem>
  );
}

function ListItemComponents(props: { start?: boolean }) {
  const [amount, setAmount] = createSignal(10);
  let interval: number | undefined;
  let started = false;
  createEffect(() => {
    if (!props.start || started) return;
    started = true;
    interval = window.setInterval(() => {
      setAmount(amount() + 1);
      if (amount() === 30) {
        return clearInterval(interval);
      }
    }, 80);
  });
  onCleanup(() => clearInterval(interval));
  return <ListItemFeature text={`+${amount()} Components`} />;
}

export default function HomePage() {
  const theme = useTheme();
  const [finished, setFinished] = createSignal(false);
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const typingEffectActions = createRef<TypingsEffectActionsRef>();
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={0} sx={{ mt: "25%" }}>
          <Grid
            item
            sm={12}
            md={8}
            sx={{
              ...(isDownMd() && {
                flexBasis: "100%",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }),
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontWeight: 600,
                [theme.breakpoints.down("md")]: {
                  fontSize: "2.50rem",
                },
                [theme.breakpoints.down(450)]: {
                  fontSize: "2rem",
                },
                [theme.breakpoints.down(400)]: {
                  fontSize: "1.75rem",
                },
                [theme.breakpoints.down(350)]: {
                  fontSize: "1.60rem",
                },
              }}
            >
              The ideal{" "}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                Solid.js
              </Box>{" "}
              UI <br />
              library{" "}
              <Box
                component="span"
                sx={{
                  ...(finished() && {
                    cursor: "pointer",
                  }),
                }}
                onClick={() => {
                  if (finished()) {
                    setFinished(false);
                    typingEffectActions.ref.restart();
                  }
                }}
              >
                <TypingEffect
                  actionsRef={typingEffectActions}
                  effects={[
                    {
                      type: "delay",
                      ms: 1200,
                    },
                    {
                      type: "write",
                      text: "for your app",
                    },
                    {
                      type: "delay",
                      ms: 1000,
                    },
                    {
                      type: "erase",
                      length: "app".length,
                    },
                    {
                      type: "write",
                      text: "site",
                    },
                    {
                      type: "delay",
                      ms: 2000,
                    },
                    {
                      type: "erase",
                      length: "your site".length,
                    },
                    {
                      type: "write",
                      text: "you.",
                      onFinish: () => setFinished(true),
                    },
                  ]}
                />
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary, my: 3 }}
            >
              A port of Material UI design (
              <Link href="https://mui.com" target="_blank">
                MUI
              </Link>
              ) built with Solid.js.
            </Typography>{" "}
            <Stack
              direction={isDownMd() ? "column" : "row"}
              spacing={2}
              sx={{
                alignItems: "center",
              }}
            >
              <Button<typeof RouterLink>
                variant="contained"
                size="large"
                component={RouterLink}
                href="/getting-started/installation"
                onMouseEnter={tryPreload}
                fullWidth={isXs()}
              >
                Get started
              </Button>
              <Show when={!isDownMd()}>
                <Typography>or</Typography>
              </Show>
              <InstallButton fullWidth={isXs()} />
            </Stack>
          </Grid>
          <Show when={isDownMd()}>
            <Grid xs={12}>
              <Divider sx={{ mt: 5 }} />
            </Grid>
          </Show>
          <Grid
            item
            sm={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              ...(isDownMd() && {
                flexBasis: "100%",
                mt: 5,
              }),
            }}
          >
            <Show when={!isDownMd()}>
              <Divider orientation={"vertical"} />
            </Show>

            <List
              disablePadding
              dense
              sx={{
                pl: 3,
                [`& .${Typography}`]: {
                  fontSize: 25,
                  fontWeight: 200,
                },
              }}
            >
              <ListItemFeature text="Typescript" checkbox />
              <ListItemFeature text="Material Design" checkbox />
              <ListItemFeature text="Styled Components" checkbox />
              <Fade in={finished()} timeout={1000}>
                <ListItemComponents start={finished()} />
              </Fade>
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
