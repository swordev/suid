import { ClassListProp } from "../createClassListEffect";
import { ElementType, OverrideProps } from "@suid/types";
import { JSXElement } from "solid-js";

export interface DynamicSelfProps {
  children?: JSXElement;
  component?: ElementType;
  classList?: ClassListProp;
}

export interface DynamicTypeMap<P = {}, D extends ElementType = "div"> {
  props: P & DynamicSelfProps;
  defaultComponent: D;
}

export type DynamicProps<
  D extends ElementType = DynamicTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<DynamicTypeMap<P, D>, D>;
