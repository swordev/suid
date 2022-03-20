import { createContext, useContext } from "solid-js";
import { createMutable } from "solid-js/store";

export interface ListContext {
  dense: boolean;
  disableGutters?: boolean;
  alignItems?: "flex-start" | "center";
}

const ListContext = createContext<ListContext>({
  dense: false,
});

export function useListContext() {
  return useContext(ListContext);
}

export function createListContextMutable(data: ListContext) {
  return createMutable(data);
}

export default ListContext;
