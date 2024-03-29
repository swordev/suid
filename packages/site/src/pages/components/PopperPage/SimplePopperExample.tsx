import { Box, Popper } from "@suid/material";
import { createSignal } from "solid-js";

export default function SimplePopperExample() {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const open = () => !!anchorEl();
  const id = () => (open() ? "simple-popper" : undefined);

  return (
    <div>
      <button
        aria-describedby={id()}
        type="button"
        onClick={(event) => {
          setAnchorEl(anchorEl() ? null : event.currentTarget);
        }}
      >
        Toggle Popper
      </button>
      <Popper id={id()} open={open()} anchorEl={anchorEl()}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}
