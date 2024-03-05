import { LoadingButton } from "@suid/lab";
import { Checkbox, FormControlLabel, Stack } from "@suid/material";
import { createSignal } from "solid-js";

export default function BasicButtons() {
  const [isLoading, setIsLoading] = createSignal(true);
  return (
    <>
      <Stack spacing={4} direction="column">
        <Stack spacing={2} direction="row">
          <LoadingButton loading={isLoading()} variant="text">
            Text
          </LoadingButton>
          <LoadingButton loading={isLoading()} variant="contained">
            Contained
          </LoadingButton>
          <LoadingButton loading={isLoading()} variant="outlined">
            Outlined
          </LoadingButton>
          <LoadingButton loading={isLoading()} variant="outlined">
            Outlined
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
    </>
  );
}
