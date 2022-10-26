import CodeRoundedIcon from "@suid/icons-material/CodeRounded";
import ContentCopyRoundedIcon from "@suid/icons-material/ContentCopyRounded";
import { useTheme } from "@suid/material";
import { IconButton, Paper, Stack, useMediaQuery } from "@suid/material";
import createSvgIcon from "@suid/material/utils/createSvgIcon";
import { SxPropsObject } from "@suid/system/sxProps";
import { Component, createMemo, createSignal, Show } from "solid-js";
import PaperCode from "~/components/PaperCode";
import copyText from "~/utils/copyText";
import openProject from "~/utils/stackblitz/openProject";

const StackblitzIcon = createSvgIcon(
  () => (
    <path d="M8.13378 16.1087H0L14.8696 0L10.8662 11.1522L19 11.1522L4.13043 27.2609L8.13378 16.1087Z" />
  ),
  "Stackblitz"
);

export default function ComponentCode(props: {
  name?: string;
  component: Component;
  sx?: SxPropsObject;
}) {
  const [codeVisible, setCodeVisible] = createSignal(false);
  const theme = useTheme();
  const code = createMemo(() => (props.component as any).code);
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Paper
        elevation={0}
        square={sm()}
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          overflow: "auto",
          p: 3,
          border: 1,
          borderColor:
            theme.palette.grey[theme.palette.mode === "dark" ? 800 : 300],
          ...(sm() && {
            mx: -3,
            borderLeft: 0,
            borderRight: 0,
          }),
          ...(props.sx || {}),
        }}
      >
        <props.component />
      </Paper>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{
          pt: 1,
          justifyContent: "end",
        }}
      >
        <IconButton size="small" onClick={() => setCodeVisible(!codeVisible())}>
          <CodeRoundedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => copyText((props.component as any).code)}
        >
          <ContentCopyRoundedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            openProject({
              title: props.name,
              appCode: code(),
            });
          }}
        >
          <StackblitzIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <Show when={codeVisible()}>
        <br />
        <PaperCode value={code()} language="tsx" />
      </Show>
    </>
  );
}
