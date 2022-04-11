import Alert from "@suid/material/Alert";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { buttonBaseClasses } from "@suid/material/ButtonBase";
import CircularProgress from "@suid/material/CircularProgress";
import Grid from "@suid/material/Grid";
import Skeleton from "@suid/material/Skeleton";
import Typography from "@suid/material/Typography";
import { createSignal, lazy, Show } from "solid-js";
import PageNav from "~/components/PageNav";

const defaultCode = `import * as React from "react"
import Button from "@mui/material/Button"

export default function Counter() {
  const [state, setState] = React.useState(0)
  return <Button onClick={() => setState(state + 1)}>{state}</Button>
}
`;

const localStorageInputCodeKey = "react2solid-input-code";

export default function ReactToSolidPage() {
  const localInputCode = localStorage.getItem(localStorageInputCodeKey);
  const [readyInputEditor, setReadyInputEditor] = createSignal(false);
  const [readyOutputEditor, setReadyOutputEditor] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const defaultInputCode = localInputCode?.length
    ? localInputCode
    : defaultCode;
  const [inputCode, setInputCode] = createSignal(defaultInputCode);
  const [outputCode, setOutputCode] = createSignal("");

  const CodeEditor = lazy(() => import("~/components/CodeEditor"));

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        React to Solid
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Transform your MUI React code to SUID SolidJS.
      </Typography>

      <Alert severity="info" sx={{ mt: 2 }}>
        You can also transform your code from the console: npx @suid/codemod
      </Alert>

      <Grid container spacing={2}>
        <Grid item xs={12} xl={6}>
          <Typography component="h3" variant="h6" sx={{ mt: 2, mb: 1 }}>
            Input React code
          </Typography>
          <Show when={!readyInputEditor()}>
            <Skeleton variant="rectangular" height={400} />
          </Show>
          <CodeEditor
            fileName="react.tsx"
            defaultValue={defaultInputCode}
            onReady={() => setReadyInputEditor(true)}
            onChange={(code) => {
              localStorage.setItem(localStorageInputCodeKey, code);
              setInputCode(code);
            }}
          />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Typography component="h3" variant="h6" sx={{ mt: 2, mb: 1 }}>
            Output SolidJS code
          </Typography>
          <Show when={!readyOutputEditor()}>
            <Skeleton variant="rectangular" height={400} />
          </Show>
          <CodeEditor
            fileName="solid.tsx"
            value={outputCode()}
            onReady={() => setReadyOutputEditor(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <Button
              variant="outlined"
              sx={{ p: 2, minWidth: 150 }}
              fullWidth
              size="large"
              className={loading() ? buttonBaseClasses.disabled : ""}
              onMouseEnter={() => {
                import("@suid/codemod/utils/applyTransforms");
                import("@suid/codemod/transforms/transformReactSource");
              }}
              onClick={async () => {
                let result = inputCode();
                setLoading(true);
                try {
                  const applyTransforms = await import(
                    "@suid/codemod/utils/applyTransforms"
                  );
                  const transformReactSource = await import(
                    "@suid/codemod/transforms/transformReactSource"
                  );
                  result = applyTransforms.default(inputCode(), [
                    transformReactSource.default,
                  ]);
                } catch (error) {
                  console.error(error);
                } finally {
                  setTimeout(() => {
                    setOutputCode(result);
                    setLoading(false);
                  }, 500);
                }
              }}
            >
              <Show when={loading()} fallback="Transform">
                Transforming
                <CircularProgress
                  sx={{ width: 40, opacity: 0.8, position: "absolute" }}
                />
              </Show>
            </Button>
          </Box>
        </Grid>
      </Grid>

      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
