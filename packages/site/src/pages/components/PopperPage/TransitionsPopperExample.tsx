import Box from "@suid/material/Box";
import Fade from "@suid/material/Fade";
import Popper from "@suid/material/Popper";
import { createSignal } from "solid-js";

export default function TransitionsPopperExample() {
  const [open, setOpen] = createSignal(false);
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);
  const canBeOpen = () => open() && !!anchorEl();
  const id = () => (canBeOpen() ? "transition-popper" : undefined);

  return (
    <div>
      <button
        aria-describedby={id()}
        type="button"
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          setOpen((previousOpen) => !previousOpen);
        }}
      >
        Toggle Popper
      </button>
      <Popper id={id()} open={open()} anchorEl={anchorEl()} transition>
        <Fade>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Fade>
      </Popper>
    </div>
  );
}
