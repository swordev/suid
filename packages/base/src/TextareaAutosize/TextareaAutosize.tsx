import { TextareaAutosizeTypeMap } from ".";
import createComponentFactory from "./../createComponentFactory";
import createEffectWithCleaning from "@suid/system/createEffectWithCleaning";
import createRef from "@suid/system/createRef";
import { debounce, unstable_ownerWindow as ownerWindow } from "@suid/utils";
import {
  createSignal,
  createEffect,
  on,
  splitProps,
  mergeProps,
  JSX,
} from "solid-js";

const $ = createComponentFactory<TextareaAutosizeTypeMap>()({
  name: "MuiTextareaAutosize",
  selfPropNames: ["ref", "maxRows", "minRows"],
});

function getStyleValue(
  computedStyle: CSSStyleDeclaration,
  property: keyof CSSStyleDeclaration
) {
  return parseInt(computedStyle[property] as string, 10) || 0;
}

const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)",
  } as JSX.CSSProperties,
};

const TextareaAutosize = $.defineComponent(function (props) {
  const ref = createRef<HTMLTextAreaElement>(props);

  const [, other] = splitProps(props, ["maxRows", "minRows", "style", "value"]);

  const baseProps = mergeProps({ minRows: 1 }, props);

  let shadowRef!: HTMLTextAreaElement;
  const renders = { current: 0 };
  const [state, setState] = createSignal<{
    overflow?: boolean;
    outerHeightStyle?: number;
  }>({});

  const syncHeight = () => {
    const input = ref.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === "0px") {
      return;
    }

    shadowRef.style.width = computedStyle.width;
    shadowRef.value = input.value || props.placeholder || "x";

    if (shadowRef.value.slice(-1) === "\n") {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      shadowRef.value += " ";
    }

    const boxSizing = computedStyle["boxSizing"];
    const padding =
      getStyleValue(computedStyle, "paddingBottom") +
      getStyleValue(computedStyle, "paddingTop");
    const border =
      getStyleValue(computedStyle, "borderBottomWidth") +
      getStyleValue(computedStyle, "borderTopWidth");

    // The height of the inner content
    const innerHeight = shadowRef.scrollHeight;

    // Measure height of a textarea with a single row
    shadowRef.value = "x";
    const singleRowHeight = shadowRef.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;

    if (baseProps.minRows) {
      outerHeight = Math.max(
        Number(baseProps.minRows) * singleRowHeight,
        outerHeight
      );
    }
    if (props.maxRows) {
      outerHeight = Math.min(
        Number(props.maxRows) * singleRowHeight,
        outerHeight
      );
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle =
      outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;

    setState((prevState) => {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (
        renders.current < 20 &&
        ((outerHeightStyle > 0 &&
          Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1) ||
          prevState.overflow !== overflow)
      ) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle,
        };
      }

      if (process.env.NODE_ENV !== "production") {
        if (renders.current === 20) {
          console.error(
            [
              "MUI: Too many re-renders. The layout is unstable.",
              "TextareaAutosize limits the number of renders to prevent an infinite loop.",
            ].join("\n")
          );
        }
      }

      return prevState;
    });
  };

  createEffectWithCleaning(() => {
    syncHeight();
    const handleResize = debounce(() => {
      renders.current = 0;
      syncHeight();
    });
    const containerWindow = ownerWindow(ref.current);
    containerWindow.addEventListener("resize", handleResize);
    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(ref.current);
    }
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });

  createEffect(
    on(
      () => [props.value],
      () => {
        renders.current = 0;
        syncHeight();
      }
    )
  );

  const style1 = mergeProps(
    {
      get height() {
        return `${state().outerHeightStyle}px`;
      },
      get overflow() {
        return state().overflow ? "hidden" : null;
      },
    },
    () => props.style
  ) as JSX.CSSProperties;

  const style2 = mergeProps(styles.shadow, () => props.style, {
    padding: 0,
  }) as JSX.CSSProperties;

  return (
    <>
      <textarea
        ref={ref}
        // Apply the rows prop to get a "correct" first SSR paint
        rows={baseProps.minRows}
        style={style1}
        {...other}
      />
      <textarea
        aria-hidden
        class={props.class}
        readOnly
        ref={shadowRef}
        tabIndex={-1}
        style={style2}
      />
    </>
  );
}, false);

export default TextareaAutosize;
