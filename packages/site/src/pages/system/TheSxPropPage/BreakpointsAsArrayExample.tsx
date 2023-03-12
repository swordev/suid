import { Box } from "@suid/material";

export default function BreakpointsAsArray() {
  return (
    <div>
      <Box sx={{ width: [100, 200, 300] }}>
        This box has a responsive width.
      </Box>
    </div>
  );
}
