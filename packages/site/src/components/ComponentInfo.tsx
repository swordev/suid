import Box from "@suid/material/Box";
import Link from "@suid/material/Link";
import Typography from "@suid/material/Typography";
import useTheme from "@suid/material/styles/useTheme";
import capitalize from "@suid/utils/capitalize";
import snakeCase from "@suid/utils/snakeCase";
import uncapitalize from "@suid/utils/uncapitalize";
import {
  Component,
  createMemo,
  JSXElement,
  mapArray,
  Match,
  Show,
  Switch,
} from "solid-js";
import ComponentCode from "~/components/ComponentCode";
import PageNav from "~/components/PageNav";
import PaperCode from "~/components/PaperCode";

export default function ComponentInfo(props: {
  name: string;
  scope?: string;
  body?: JSXElement;
  examples?: (
    | Component
    | { component: Component; bgcolor?: string; title?: string | false }
  )[];
  /**
   * @default true
   */
  importInfo?: boolean;
  docsName?: string;
  docsApiName?: string;
  moreExamples?: boolean;
  prevPage?: { text: string; href: string };
  nextPage?: { text: string; href: string };
}) {
  const name = createMemo(() => snakeCase(uncapitalize(props.name)));
  const theme = useTheme();
  const docsName = () => props.docsName ?? name();
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
        <Show when={!props.body} fallback={props.body}>
          Learn more on{" "}
          <Link href={`https://mui.com/${docsApiPath()}`} target="_blank">
            MUI docs
          </Link>
          .
        </Show>
      </Typography>

      <Show when={props.importInfo ?? true}>
        <Typography component="h2" variant="h5" sx={{ my: 2 }}>
          Import
        </Typography>

        <PaperCode
          language="tsx"
          sx={{
            mb: 3,
          }}
          value={`import ${props.name} from "@suid/${
            props.scope ?? "material"
          }/${props.name}"`}
        />
      </Show>

      <Show when={!!props.examples?.length}>
        <Typography component="h2" variant="h5" sx={{ my: 2 }}>
          {props.examples?.length === 1 ? "Example" : "Examples"}
        </Typography>
        {mapArray(
          () =>
            props.examples?.map((v) =>
              typeof v === "function" ? { component: v } : v
            ),
          (example) => (
            <Box sx={{ mb: 2 }}>
              <Switch>
                <Match when={typeof example.title === "string"}>
                  <Typography component="h3" variant="h6" sx={{ my: 2 }}>
                    {example.title}
                  </Typography>
                </Match>
                <Match
                  when={
                    example.title !== false &&
                    !/^Example(\d+)?$/.test(example.component.name)
                  }
                >
                  <Typography component="h3" variant="h6" sx={{ my: 2 }}>
                    {capitalize(
                      snakeCase(
                        uncapitalize(
                          example.component.name.replace(/Example$/, " ")
                        )
                      )
                    ).replaceAll("-", " ")}
                  </Typography>
                </Match>
              </Switch>
              <ComponentCode
                name={props.name}
                component={example.component}
                sx={{
                  ...(example.bgcolor === "contrasted" && {
                    bgcolor:
                      theme.palette.mode === "light"
                        ? "#E7EBF0"
                        : "rgb(43 53 65)",
                  }),
                  ...(example.bgcolor &&
                    example.bgcolor !== "contrasted" && {
                      bgcolor: example.bgcolor,
                    }),
                }}
              />
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
