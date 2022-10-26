import { Link, Typography } from "@suid/material";
import PageNav from "~/components/PageNav";
import PaperCode from "~/components/PaperCode";
import example from "./UsagePage/Example?raw";

export default function UsagePage() {
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        Usage
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        For a completed usage guide, please go to{" "}
        <Link href="https://mui.com" target="_blank">
          MUI
        </Link>
        .
      </Typography>
      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        Quick usage
      </Typography>
      <PaperCode
        language="tsx"
        value={example
          .split(/\r?\n/)
          .filter((v) => !v.trim().startsWith("// eslint-disable"))
          .join("\n")}
      />
      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
