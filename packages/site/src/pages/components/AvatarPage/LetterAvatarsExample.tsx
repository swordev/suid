import Avatar from "@suid/material/Avatar";
import Stack from "@suid/material/Stack";
import { deepOrange, deepPurple } from "@suid/material/colors";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
        }}
      >
        N
      </Avatar>
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
        }}
      >
        OP
      </Avatar>
    </Stack>
  );
}
