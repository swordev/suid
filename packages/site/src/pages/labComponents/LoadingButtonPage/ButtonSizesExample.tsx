import { LoadingButton } from "@suid/lab";
import { Box, Checkbox, FormControlLabel, Stack } from "@suid/material";
import { createSignal } from "solid-js";

export default function ButtonSizes() {
  const [isLoading, setIsLoading] = createSignal(false);
  return (
    <Stack spacing={4} direction="column">
      <Box sx={{ "& button": { m: 1 } }}>
        <div>
          <LoadingButton loading={isLoading()} size="small">
            Small
          </LoadingButton>
          <LoadingButton loading={isLoading()} size="medium">
            Medium
          </LoadingButton>
          <LoadingButton loading={isLoading()} size="large">
            Large
          </LoadingButton>
        </div>
        <div>
          <LoadingButton loading={isLoading()} variant="outlined" size="small">
            Small
          </LoadingButton>
          <LoadingButton loading={isLoading()} variant="outlined" size="medium">
            Medium
          </LoadingButton>
          <LoadingButton loading={isLoading()} variant="outlined" size="large">
            Large
          </LoadingButton>
        </div>
        <div>
          <LoadingButton loading={isLoading()} variant="contained" size="small">
            Small
          </LoadingButton>
          <LoadingButton
            loading={isLoading()}
            variant="contained"
            size="medium"
          >
            Medium
          </LoadingButton>
          <LoadingButton loading={isLoading()} variant="contained" size="large">
            Large
          </LoadingButton>
        </div>
      </Box>
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
