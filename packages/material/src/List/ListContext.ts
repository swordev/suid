import { createContext, useContext } from "solid-js";

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

export default ListContext;
