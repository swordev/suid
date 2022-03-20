import Box from "@suid/material/Box";
import Popper from "@suid/material/Popper";
import { createMemo, createSignal } from "solid-js";

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const open = createMemo(() => !!anchorEl());
  const id = createMemo(() => (open() ? "simple-popper" : undefined));

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
