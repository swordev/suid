import Box from "@suid/material/Box";
import Link from "@suid/material/Link";
import Typography from "@suid/material/Typography";
import { snakeCase, uncapitalize } from "@suid/utils/string";
import { Component, createMemo, mapArray, Show } from "solid-js";
import ComponentCode from "~/components/ComponentCode";
import PageNav from "~/components/PageNav";
import PaperCode from "~/components/PaperCode";

export default function ComponentInfo(props: {
  name: string;
  scope?: string;
  examples?: Component[];
  docsName?: string;
  docsApiName?: string;
  moreExamples?: boolean;
  prevPage?: { text: string; href: string };
  nextPage?: { text: string; href: string };
}) {
  const name = createMemo(() => snakeCase(uncapitalize(props.name)));
  const docsName = createMemo(() => props.docsName ?? name());
  const docsApiPath = createMemo(() => {
    if (typeof props.docsApiName === "string") {
      if (props.docsApiName.includes("/")) {
        return props.docsApiName;
      } else {
        return `api/${props.docsApiName}`;
      }
    } else {
      return `api/${name()}`;
    }
  });
  const moreExamples = createMemo(() => props.moreExamples ?? true);
  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mt: 1 }}>
        {props.name}
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Learn more on{" "}
        <Link href={`https://mui.com/${docsApiPath()}`} target="_blank">
          MUI docs
        </Link>
        .
      </Typography>

      <Typography component="h2" variant="h5" sx={{ my: 2 }}>
        Import
      </Typography>

      <PaperCode
        language="tsx"
        sx={{
          mb: 3,
        }}
        value={`import ${props.name} from "@suid/${props.scope ?? "material"}/${
          props.name
        }"`}
      />

      <Show when={!!props.examples?.length}>
        <Typography component="h2" variant="h5" sx={{ my: 2 }}>
          Examples
        </Typography>
        {mapArray(
          () => props.examples,
          (c) => (
            <Box sx={{ mb: 2 }}>
              <ComponentCode name={props.name} component={c} />
            </Box>
          )
        )}
      </Show>

      <Show when={moreExamples()}>
        <Box sx={{ mt: 2 }}>
          <Link
            href={`https://mui.com/components/${docsName()}`}
            target="_blank"
          >
            More examples
          </Link>
        </Box>
      </Show>
      <PageNav sx={{ mt: 2 }} />
    </>
  );
}
