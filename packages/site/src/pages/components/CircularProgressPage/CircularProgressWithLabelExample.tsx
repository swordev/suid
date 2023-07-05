import { CircularProgress, Box, Typography } from "@suid/material";
import { CircularProgressProps } from "@suid/material/CircularProgress";
import { createSignal, onCleanup } from "solid-js";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = createSignal(10);

  const timer = setInterval(() => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : prevProgress + 10
    );
  }, 800);

  onCleanup(() => {
    clearInterval(timer);
  });

  return <CircularProgressWithLabel value={progress()} />;
}
