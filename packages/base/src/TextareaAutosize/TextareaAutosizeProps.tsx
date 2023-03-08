import * as ST from "@suid/types";

export type TextareaAutosizeTypeMap<
  P = {},
  D extends ST.ElementType = "div"
> = {
  name: "MuiTextareaAutosize";
  defaultPropNames: "minRows";
  selfProps: {
    ref?: ST.Ref<HTMLTextAreaElement>;

    /**
     * Maximum number of rows to display.
     */
    maxRows?: string | number;

    /**
     * Minimum number of rows to display.
     * @default 1
     */
    minRows?: string | number;
  };
  props: P &
    TextareaAutosizeTypeMap["selfProps"] &
    Omit<ST.PropsOf<"textarea">, "children" | "rows">;
  defaultComponent: D;
};

export type TextareaAutosizeProps<
  D extends ST.ElementType = TextareaAutosizeTypeMap["defaultComponent"],
  P = {}
> = ST.OverrideProps<TextareaAutosizeTypeMap<P, D>, D>;

export default TextareaAutosizeProps;
