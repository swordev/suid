import CodeRoundedIcon from "@suid/icons-material/CodeRounded";
import ContentCopyRoundedIcon from "@suid/icons-material/ContentCopyRounded";
import { useTheme } from "@suid/material";
import IconButton from "@suid/material/IconButton";
import Paper from "@suid/material/Paper";
import Stack from "@suid/material/Stack";
import { Component, createMemo, createSignal, Show } from "solid-js";
import PaperCode from "~/components/PaperCode";
import copyText from "~/utils/copyText";

export default function ComponentCode(props: { component: Component }) {
  const [codeVisible, setCodeVisible] = createSignal(false);
  const code = createMemo(() => (props.component as any).code);
  const theme = useTheme();
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          p: 3,
          border: 1,
          borderColor:
            theme.palette.grey[theme.palette.mode === "dark" ? 800 : 300],
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
        <IconButton onClick={() => setCodeVisible(!codeVisible())} size="small">
          <CodeRoundedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={() => copyText((props.component as any).code)}
          size="small"
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
