import FaceIcon from "@suid/icons-material/Face";
import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
