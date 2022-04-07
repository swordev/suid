import Box from "@suid/material/Box";
import useControlled from "@suid/material/utils/useControlled";
import createElementRef from "@suid/system/createElementRef";
import { SxPropsObject } from "@suid/system/sxProps";
import { editor, Uri } from "monaco-editor";
import { createEffect, onCleanup, onMount } from "solid-js";
import setupEditor from "~/components/CodeEditor/setupEditor";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";

export default function CodeEditor(props: {
  sx?: SxPropsObject;
  fileName: string;
  value?: string;
  defaultValue?: string;
  language?: string;
  onChange?: (code: string) => void;
  onReady?: () => void;
}) {
  setupEditor();

  const isControlled = props.value !== undefined;
  let setDefaultValueFlag = false;
  const [value, setValue] = useControlled({
    controlled: () => props.value,
    default: () => String(props.defaultValue),
    name: "CodeEditor",
  });

  const element = createElementRef();
  const layoutContext = useLayoutContext();
  let editorInstance: editor.IStandaloneCodeEditor | undefined;

  onCleanup(() => {
    editorInstance?.dispose();
  });

  onMount(() => {
    const uri = Uri.parse(`file://root/${props.fileName}`);
    editor.getModel(uri)?.dispose();
    const model = editor.createModel(
      props.value ?? "",
      props.language ?? "typescript",
      uri
    );
    editorInstance = editor.create(element.ref, {
      model,
      theme: layoutContext.darkMode ? "vs-dark" : "vs-light",
      minimap: {
        enabled: false,
      },
      automaticLayout: true,
    });
    editorInstance.onDidChangeModelContent(() => {
      const value = model.getLinesContent().join("\n");
      setValue(value);
      if (!setDefaultValueFlag) props.onChange?.(value);
    });
    props.onReady?.();
  });

  createEffect(() => {
    editorInstance?.updateOptions({
      theme: layoutContext.darkMode ? "vs-dark" : "vs-light",
    });
  });

  createEffect<boolean>((loadDefaultValue) => {
    if (isControlled || loadDefaultValue) {
      const v = value();
      if (typeof v === "string") {
        setDefaultValueFlag = loadDefaultValue;
        editorInstance?.getModel()?.setValue(v);
        setDefaultValueFlag = false;
      }
    }
    return false;
  }, true);

  return (
    <Box
      sx={{ width: "100%", height: "400px", ...(props.sx || {}) }}
      ref={element}
    />
  );
}
