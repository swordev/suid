import { Box, Rating, Typography } from "@suid/material";
import { createSignal } from "solid-js";

export default function SimpleRating() {
  const [value, setValue] = createSignal<number | null>(2);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value()}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value()} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value()} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
