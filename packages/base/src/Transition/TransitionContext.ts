import { createContext } from "solid-js";

export type TransitionProps = {
  in: boolean;
  onEnter: () => void;
  onExited: () => void;
};

export const TransitionContext = createContext<TransitionProps | undefined>();
