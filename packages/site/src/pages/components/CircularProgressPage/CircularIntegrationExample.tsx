import CheckIcon from "@suid/icons-material/Check";
import SaveIcon from "@suid/icons-material/Save";
import { CircularProgress, Box, Button, Fab } from "@suid/material";
import { green } from "@suid/material/colors";
import { createSignal, onCleanup } from "solid-js";

export default function CircularIntegration() {
  const [loading, setLoading] = createSignal(false);
  const [success, setSuccess] = createSignal(false);
  let timer: ReturnType<typeof setTimeout>;

  const buttonSx = () =>
    success()
      ? {
          bgcolor: green[500],
          "&:hover": {
            bgcolor: green[700],
          },
        }
      : undefined;

  onCleanup(() => {
    clearTimeout(timer);
  });

  const handleButtonClick = () => {
    if (!loading()) {
      setSuccess(false);
      setLoading(true);
      timer = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          m: 1,
          position: "relative",
        }}
      >
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx()}
          onClick={handleButtonClick}
        >
          {success() ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading() && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          m: 1,
          position: "relative",
        }}
      >
        <Button
          variant="contained"
          sx={buttonSx()}
          disabled={loading()}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading() && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
