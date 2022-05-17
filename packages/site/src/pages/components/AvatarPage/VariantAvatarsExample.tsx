import AssignmentIcon from "@suid/icons-material/Assignment";
import Avatar from "@suid/material/Avatar";
import Stack from "@suid/material/Stack";
import { deepOrange, green } from "@suid/material/colors";

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
        }}
        variant="square"
      >
        N
      </Avatar>
      <Avatar
        sx={{
          bgcolor: green[500],
        }}
        variant="rounded"
      >
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
