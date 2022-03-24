import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import { SxPropsObject } from "@suid/system/sxProps";
import { createMemo } from "solid-js";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-tsx";
import "./style.scss";

export type CodeProps = {
  value: string;
  language: string;
  preProps?: { sx?: SxPropsObject };
  sx?: SxPropsObject;
};

export default function Code(props: CodeProps) {
  const theme = useTheme();
  const themeClassName = createMemo(() =>
    theme.palette.mode === "dark"
      ? "prism-vsc-dark-plus"
      : "prism-material-light"
  );
  const code = createMemo(() =>
    Prism.highlight(
      props.value,
      Prism.languages[props.language],
      props.language
    )
  );

  const context = useLayoutContext();

  return (
    <Box
      component="pre"
      sx={{
        m: 0,
        overflow: "auto",
        maxWidth: `calc(100vw - ${24 * 2}px - ${
          (context.drawer.permanent && context.drawer.open ? 1 : 0) *
          context.drawer.width
        }px)`,
        ...(props.preProps?.sx || {}),
      }}
    >
      <Box
        component="code"
        innerHTML={code()}
        classList={{ [themeClassName()]: true }}
        sx={{ ...(props.sx || {}) }}
      />
    </Box>
  );
}
