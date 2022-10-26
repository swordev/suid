import ContentCopyRoundedIcon from "@suid/icons-material/ContentCopyRounded";
import { useTheme } from "@suid/material";
import { IconButton, Paper, Stack } from "@suid/material";
import { Show } from "solid-js";
import Code, { CodeProps } from "~/components/Code/Code";
import copyText from "~/utils/copyText";

export default function PaperCode(
  props: CodeProps & {
    toolbar?: boolean;
  }
) {
  const theme = useTheme();
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          maxHeight: 400,
          overflow: "auto",
          border: 1,
          bgcolor:
            theme.palette.mode === "dark" ? theme.palette.grey[900] : "white",
          borderColor:
            theme.palette.grey[theme.palette.mode === "dark" ? 800 : 300],
          ...(props.sx ?? {}),
        }}
      >
        <Code
          {...props}
          preProps={{
            ...(props.preProps || {}),
            sx: {
              p: 2,
              ...(props.preProps?.sx || {}),
            },
          }}
        />
      </Paper>
      <Show when={props.toolbar}>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{
            pt: 1,
            justifyContent: "end",
          }}
        >
          <IconButton size="small" onClick={() => copyText(props.value)}>
            <ContentCopyRoundedIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Show>
    </>
  );
}
