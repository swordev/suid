import {
  Stack,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@suid/material";
import { createSignal, For } from "solid-js";

export default function DynamicSelectExample() {
  const [value, setValue] = createSignal(1);
  const [length, setLength] = createSignal(1);
  const items = () =>
    Array.from({ length: length() }).map((_, index) => index + 1);

  return (
    <Stack spacing={3}>
      <TextField
        label="Length"
        type="number"
        value={length()}
        onChange={(event: any) => setLength(Number(event.target.value))}
      />
      <FormControl fullWidth>
        <InputLabel>Value</InputLabel>
        <Select
          value={value()}
          label="Value"
          onChange={(event) => setValue(event.target.value as any)}
        >
          <For each={items()}>
            {(item) => <MenuItem value={item}>{item}</MenuItem>}
          </For>
        </Select>
        <Box sx={{ py: 2 }}>
          <>
            value: {value()} ({typeof value()})
          </>
        </Box>
      </FormControl>
    </Stack>
  );
}
