import CheckIcon from "@suid/icons-material/Check";
import HomeIcon from "@suid/icons-material/Home";
import RefreshIcon from "@suid/icons-material/Refresh";
import SearchIcon from "@suid/icons-material/Search";
import Link from "@suid/material/Link";
import Stack from "@suid/material/Stack";

export default function Example() {
  return (
    <Stack spacing={2} direction="row">
      <RefreshIcon />
      <CheckIcon />
      <HomeIcon />
      <SearchIcon />
      <Link href="https://mui.com/components/material-icons/" target="_blank">
        ...
      </Link>
    </Stack>
  );
}
