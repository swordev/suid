import { Box, LinearProgress } from "@suid/material";
import { createSignal, onCleanup } from "solid-js";

export default function DeterminateExample() {
  const [progress, setProgress] = createSignal(0);

  const timer = setInterval(() => {
    setProgress((oldProgress) => {
      if (oldProgress === 100) {
        return 0;
      }
      const diff = Math.random() * 10;
      return Math.min(oldProgress + diff, 100);
    });
  }, 500);

  onCleanup(() => clearInterval(timer));

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress()} />
    </Box>
  );
}
