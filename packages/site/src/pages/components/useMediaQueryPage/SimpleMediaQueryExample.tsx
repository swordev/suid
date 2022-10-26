import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{`(min-width:600px) matches: ${matches()}`}</span>;
}
