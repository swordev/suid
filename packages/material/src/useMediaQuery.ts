import { Theme, useTheme } from "./styles";
import { Accessor, createSignal, onCleanup } from "solid-js";

const mediaPrefix = "@media ";

export default function useMediaQuery(
  queryInput: string | ((theme: Theme) => string)
): Accessor<boolean> {
  let queryInputString =
    typeof queryInput === "function" ? queryInput(useTheme()) : queryInput;
  if (queryInputString.startsWith(mediaPrefix))
    queryInputString = queryInputString.slice(mediaPrefix.length);
  const query = window.matchMedia(queryInputString);
  const [matches, setMatches] = createSignal(query.matches);
  const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
  if (query.addEventListener) {
    query.addEventListener("change", listener);
  } else {
    // [support] Safari < 14
    query.addListener(listener);
  }
  onCleanup(() => query.removeEventListener("change", listener));
  return matches;
}
