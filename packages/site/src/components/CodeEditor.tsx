import Box from "@suid/material/Box";
import createElementRef from "@suid/system/createElementRef";
import { editor, Uri } from "monaco-editor";
import { createEffect, onCleanup, onMount } from "solid-js";
import setupEditor from "~/components/CodeEditor/setupEditor";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";

export default function CodeEditor(props: {
  fileName: string;
  value?: string;
  language?: string;
  onChange?: (code: string) => void;
}) {
  setupEditor();

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
      props.onChange?.(model.getLinesContent().join("\n"));
    });
  });

  createEffect(() => {
    editorInstance?.updateOptions({
      theme: layoutContext.darkMode ? "vs-dark" : "vs-light",
    });
  });
  createEffect(() => {
    editorInstance?.getModel()?.setValue(props.value || "");
  });
  return <Box style={{ width: "100%", height: "400px" }} ref={element} />;
}
