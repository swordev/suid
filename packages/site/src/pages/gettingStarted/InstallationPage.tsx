import Typography from "@suid/material/Typography";
import PageNav from "~/components/PageNav";
import PaperCode from "~/components/PaperCode";

export default function InstallationPage() {
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        Installation
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Basic guide to install the library.
      </Typography>

      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        SUID Material
      </Typography>
      <PaperCode language="bash" value="npm install @suid/material" />

      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        SUID Icons Material
      </Typography>

      <PaperCode language="bash" value="npm install @suid/icons-material" />

      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        Required dependencies
      </Typography>
      <PaperCode language="bash" value="npm install solid-js" />

      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        Development dependencies
      </Typography>

      <PaperCode
        language="bash"
        value="npm install typescript vite vite-plugin-solid"
      />

      <Typography component="h2" variant="h5" sx={{ mt: 2, mb: 1 }}>
        Roboto font
      </Typography>
      <PaperCode
        language="html"
        value={`<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>`}
      />

      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
