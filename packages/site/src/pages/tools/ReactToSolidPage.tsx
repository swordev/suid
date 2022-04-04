import react2solid from "@suid/codemod/react2solid";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Grid from "@suid/material/Grid";
import Typography from "@suid/material/Typography";
import { createSignal } from "solid-js";
import CodeEditor from "~/components/CodeEditor";
import PageNav from "~/components/PageNav";

const defaultCode = `import * as React from "react"
import Button from "@mui/Button/Button"

export default function Counter() {
  const [state, setState] = React.useState(0)
  return <Button onClick={() => setState(state + 1)}>{state}</Button>
}
`;

const localStorageInputCodeKey = "react2solid-input-code";

export default function ReactToSolidPage() {
  const localInputCode = localStorage.getItem(localStorageInputCodeKey);
  const [inputCode, setInputCode] = createSignal(
    localInputCode?.length ? localInputCode : defaultCode
  );
  const [outputCode, setOutputCode] = createSignal("");
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        React to Solid
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Transform your MUI React code to SUID SolidJS.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography component="h3" variant="h6" sx={{ mt: 2, mb: 1 }}>
            Input React code
          </Typography>
          <CodeEditor
            fileName="react.tsx"
            value={inputCode()}
            onChange={(code) => {
              localStorage.setItem(localStorageInputCodeKey, code);
              setInputCode(code);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h3" variant="h6" sx={{ mt: 2, mb: 1 }}>
            Output SolidJS code
          </Typography>
          <CodeEditor fileName="solid.tsx" value={outputCode()} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <Button
              variant="outlined"
              sx={{ p: 2, minWidth: 150 }}
              fullWidth
              size="large"
              onClick={() => {
                let result = inputCode();
                try {
                  result = react2solid({
                    "file.tsx": inputCode(),
                  })["file.tsx"];
                } catch (error) {
                  console.error(error);
                }
                setOutputCode(result);
              }}
            >
              Transform
            </Button>
          </Box>
        </Grid>
      </Grid>
      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
