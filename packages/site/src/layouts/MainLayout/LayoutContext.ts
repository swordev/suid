import { DeepPartial } from "@suid/types";
import { merge } from "@suid/utils/merge";
import { createContext, useContext } from "solid-js";
import { createMutable } from "solid-js/store";

type Options = {
  darkMode: boolean;
  drawer: {
    open: boolean;
    openState: boolean;
    permanent: boolean;
    width: number;
  };
};

export const defaultOptions: Options = {
  darkMode: true,
  drawer: {
    open: true,
    openState: false,
    permanent: true,
    width: 0,
  },
};

const LayoutContext = createContext(defaultOptions);

export function createLayoutMutable(input: DeepPartial<Options> = {}) {
  return createMutable(merge({}, defaultOptions, input)) as Options;
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export default LayoutContext;
