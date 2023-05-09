import ListItem from "../ListItem/ListItem";
import ListItemButton from "../ListItemButton/ListItemButton";
import ListItemText from "../ListItemText/ListItemText";
import { styled } from "../styles";
import { For, JSXElement, createSignal } from "solid-js";
import { render } from "solid-testing-library";
import { bench, describe } from "vitest";

const randomValues = Array.from({ length: 300 }).map(() =>
  Math.random().toString()
);

export function List(props: { onItem: (item: string) => JSXElement }) {
  const [items] = createSignal(randomValues);
  const onItem = props.onItem;
  return <For each={items()}>{onItem}</For>;
}

function StyledDiv(props: { children: JSXElement }) {
  return <div>{props.children}</div>;
}
function Div(props: { children: JSXElement }) {
  return <StyledDiv>{props.children}</StyledDiv>;
}

const SuidDiv = styled("div")();

const iterations = 100;

describe("List", () => {
  bench(
    "solid-element",
    () => {
      const { unmount } = render(() => (
        <For each={randomValues}>
          {(item) => (
            <div>
              <div>
                <div>{item}</div>
              </div>
            </div>
          )}
        </For>
      ));
      unmount();
    },
    {
      iterations,
    }
  );
  bench(
    "solid-component",
    () => {
      const { unmount } = render(() => (
        <For each={randomValues}>
          {(item) => (
            <Div>
              <Div>
                <Div>{item}</Div>
              </Div>
            </Div>
          )}
        </For>
      ));
      unmount();
    },
    {
      iterations,
    }
  );
  bench(
    "suid-div",
    () => {
      const { unmount } = render(() => (
        <For each={randomValues}>
          {(item) => (
            <SuidDiv>
              <SuidDiv>
                <SuidDiv>{item}</SuidDiv>
              </SuidDiv>
            </SuidDiv>
          )}
        </For>
      ));
      unmount();
    },
    {
      iterations,
    }
  );
  bench(
    "suid-list-item",
    () => {
      const { unmount } = render(() => (
        <For each={randomValues}>
          {(item) => (
            <ListItem>
              <ListItemText>
                <ListItemButton>{item}</ListItemButton>
              </ListItemText>
            </ListItem>
          )}
        </For>
      ));
      unmount();
    },
    {
      iterations,
    }
  );
});
