import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Fade from "@suid/material/Fade";
import Paper from "@suid/material/Paper";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export function Icon() {
  const theme = useTheme();

  return (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: "1",
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
}
export default function SimpleFade() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Box sx={{ height: 180 }}>
      <Button onClick={() => setChecked(!checked())}>
        {checked() ? "true" : "false"}
      </Button>
      <Box sx={{ display: "flex" }}>
        <Fade in={checked()}>
          <Icon />
        </Fade>
      </Box>
    </Box>
  );
}
