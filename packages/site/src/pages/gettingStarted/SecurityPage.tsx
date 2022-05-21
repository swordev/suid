import Link from "@suid/material/Link";
import Typography from "@suid/material/Typography";
import PageNav from "~/components/PageNav";
import PaperCode from "~/components/PaperCode";
import example from "./SecurityPage/Example?raw";

export default function SecurityPage() {
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        Security
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        SUID creates {"<style>"} tags dynamically for each component. This can be an issue if you have a strict{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank">
          Content Security Policy
        </Link>
        set. In such case you need to instruct SUID to apply a{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles" target="_blank">
          nonce
        </Link>
        attribute to its {"<style>"} tags.
      </Typography>
      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        Setting a nonce
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
