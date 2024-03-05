import { LoadingButton } from "@suid/lab";
import { Checkbox, FormControlLabel, Stack } from "@suid/material";
import { createSignal } from "solid-js";

export default function ColorLoadingButtonsExample() {
  const [isLoading, setIsLoading] = createSignal(false);
  return (
    <Stack spacing={4} direction="column">
      <Stack spacing={2} direction="row">
        <LoadingButton loading={isLoading()} color="secondary">
          Secondary
        </LoadingButton>
        <LoadingButton
          loading={isLoading()}
          variant="contained"
          color="success"
        >
          Success
        </LoadingButton>
        <LoadingButton loading={isLoading()} variant="outlined" color="error">
          Error
        </LoadingButton>
      </Stack>
      <Stack spacing={2} direction="row" justifyContent={"center"}>
        <FormControlLabel
          label={"Is loading"}
          control={
            <Checkbox
              checked={isLoading()}
              onChange={(_, value) => setIsLoading(value)}
            />
          }
        />
      </Stack>
    </Stack>
  );
}
