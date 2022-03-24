import CodeRoundedIcon from "@suid/icons-material/CodeRounded";
import ContentCopyRoundedIcon from "@suid/icons-material/ContentCopyRounded";
import { useTheme } from "@suid/material";
import IconButton from "@suid/material/IconButton";
import Paper from "@suid/material/Paper";
import Stack from "@suid/material/Stack";
import useMediaQuery from "@suid/material/useMediaQuery";
import { Component, createMemo, createSignal, Show } from "solid-js";
import PaperCode from "~/components/PaperCode";
import copyText from "~/utils/copyText";

export default function ComponentCode(props: { component: Component }) {
  const [codeVisible, setCodeVisible] = createSignal(false);
  const theme = useTheme();
  const code = createMemo(() => (props.component as any).code);
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Paper
        elevation={0}
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
      </Stack>
      <Show when={codeVisible()}>
        <br />
        <PaperCode value={code()} language="tsx" />
      </Show>
    </>
  );
}
