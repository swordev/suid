import { ArrowBack, ArrowForward } from "@suid/icons-material";
import { Pagination, PaginationItem, Stack } from "@suid/material";

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBack, next: ArrowForward }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
