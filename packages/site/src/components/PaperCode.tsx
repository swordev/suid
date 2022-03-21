import { useTheme } from "@suid/material";
import Paper from "@suid/material/Paper";
import Code, { CodeProps } from "~/components/Code/Code";

export default function PaperCode(props: CodeProps) {
  const theme = useTheme();
  return (
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
  );
}
