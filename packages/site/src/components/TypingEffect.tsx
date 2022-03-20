import Box from "@suid/material/Box";
import createElementRef from "@suid/system/createElementRef";
import { RefProp } from "@suid/system/createRef";
import { createSignal, onCleanup, onMount, Show } from "solid-js";

type WriteEffectOptions = {
  text: string;
  speed?: number;
  onFinish?: () => void;
};

function writeEffect(element: HTMLElement, options: WriteEffectOptions) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < options.text.length) {
      element.append(options.text.charAt(index));
      index++;
    } else {
      clearInterval(interval);
      options.onFinish?.();
    }
  }, options.speed ?? 150);
  return interval;
}

type EraseEffectOptions = {
  length: number;
  speed?: number;
  onFinish?: () => void;
};

function eraseEffect(element: HTMLElement, options: EraseEffectOptions) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < options.length) {
      element.innerText = element.innerText.slice(0, -1);
      index++;
    } else {
      clearInterval(interval);
      options.onFinish?.();
    }
  }, options.speed ?? 150);
  return interval;
}

type DelayEffectOptions = {
  ms: number;
  onFinish?: () => void;
};

function delayEffect(options: DelayEffectOptions) {
  return setTimeout(() => {
    options.onFinish?.();
  }, options.ms);
}

type EffectOptions =
  | ({
      type: "write";
    } & WriteEffectOptions)
  | ({
      type: "erase";
    } & EraseEffectOptions)
  | ({
      type: "delay";
    } & DelayEffectOptions);

function runEffect(element: HTMLElement, options: EffectOptions) {
  if (options.type === "write") {
    return writeEffect(element, options);
  } else if (options.type === "erase") {
    return eraseEffect(element, options);
  } else if (options.type === "delay") {
    return delayEffect(options);
  } else {
    throw new Error(`Invalid effect type: ${options["type"]}`);
  }
}

export type TypingsEffectActionsRef = {
  restart: () => void;
  stop: () => void;
};

export default function TypingEffect(props: {
  effects: EffectOptions[];
  actionsRef?: RefProp<TypingsEffectActionsRef>;
}) {
  const element = createElementRef();
  const [finished, setFinished] = createSignal(false);
  let effectIndex = 0;
  let intervals: number[] = [];
  const actions = {
    restart: () => {
      effectIndex = 0;
      actions.stop();
      element.ref.innerText = "";
      setFinished(false);
      runNextEffect(onFinish);
    },
    stop: () => {
      for (const interval of intervals) {
        clearInterval(interval);
        clearTimeout(interval);
      }
    },
  };

  props.actionsRef?.(actions);

  const runNextEffect = (onFinish?: (next: boolean) => void) => {
    const effect = props.effects[effectIndex++];
    if (effect) {
      const interval = runEffect(element.ref, {
        ...effect,
        onFinish: () => {
          intervals = intervals.filter((v) => v !== interval);
          onFinish?.(effectIndex in props.effects);
          effect.onFinish?.();
        },
      });
      intervals.push(interval);
    }
  };

  const onFinish = (next: boolean) => {
    if (next) {
      runNextEffect(onFinish);
    } else {
      setFinished(true);
    }
  };

  onMount(async () => {
    actions.restart();
  });

  onCleanup(() => {
    actions.stop();
  });

  return (
    <Box sx={{ display: "inline-block" }}>
      <Box>
        <span ref={element}></span>
        <Show when={!finished()}>
          <Box
            component={"span"}
            sx={{
              fontWeight: 400,
              ml: "0.6px",
              animation: "blink-$id .5s step-end infinite alternate",
              "@keyframes blink-$id": {
                50: { color: "transparent" },
              } as any,
            }}
          >
            |
          </Box>
        </Show>
      </Box>
    </Box>
  );
}
