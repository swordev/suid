import { Box, Button, ButtonGroup } from "@suid/material";

function Buttons() {
  return (
    <>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </>
  );
}

export default function GroupSizesColors() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        <Buttons />
      </ButtonGroup>
      <ButtonGroup color="warning" aria-label="medium secondary button group">
        <Buttons />
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        <Buttons />
      </ButtonGroup>
    </Box>
  );
}
