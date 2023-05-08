import { ChangeEventHandler } from "@suid/types";
import { Accessor, createContext } from "solid-js";
import { ResolvedJSXElement } from "solid-js/types/reactive/signal";

export interface IBottomNavigationContext {
  onChange: Accessor<ChangeEventHandler<HTMLDivElement, any> | undefined>;
  showLabels: Accessor<boolean>;
  selectedValue: Accessor<any>;
  getIndex: (element: ResolvedJSXElement) => number;
}

const BottomNavigationContext = createContext<IBottomNavigationContext>({
  onChange: () => () => undefined,
  showLabels: () => false,
  selectedValue: () => undefined,
  getIndex: () => 0,
});

export default BottomNavigationContext;
