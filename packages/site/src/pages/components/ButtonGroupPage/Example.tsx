import Button from "@suid/material/Button";
import ButtonGroup from "@suid/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
