import { Typography, Pagination, Stack } from "@suid/material";
import { createSignal } from "solid-js";

export default function PaginationControlled() {
  const [page, setPage] = createSignal(1);

  return (
    <Stack spacing={2}>
      <Typography>Page: {page()}</Typography>
      <Pagination
        count={10}
        page={page()}
        onChange={(_, value) => setPage(value)}
      />
    </Stack>
  );
}
