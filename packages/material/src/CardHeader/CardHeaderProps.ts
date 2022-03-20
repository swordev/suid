import { Theme } from "..";
import { OverridableComponent, OverrideProps } from "../OverridableComponent";
import { TypographyProps } from "../Typography";
import { CardHeaderClasses } from "./cardHeaderClasses";
import { SxProps } from "@suid/system";
import { ElementType } from "@suid/types";
import { JSXElement } from "solid-js";

export interface CardHeaderTypeMap<
  Props = {},
  DefaultComponent extends ElementType = "div",
  TitleTypographyComponent extends ElementType = "span",
  SubheaderTypographyComponent extends ElementType = "span"
> {
  name: "MuiCardHeader";
  defaultPropNames: "disableTypography";
  selfProps: {
    /**
     * The action to display in the card header.
     */
    action?: JSXElement;
    /**
     * The Avatar element to display.
     */
    avatar?: JSXElement;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardHeaderClasses>;
    /**
     * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
     * This can be useful to render an alternative Typography variant by wrapping
     * the `title` text, and optional `subheader` text
     * with the Typography component.
     * @default false
     */
    disableTypography?: boolean;
    /**
     * The content of the component.
     */
    subheader?: JSXElement;
    /**
     * These props will be forwarded to the subheader
     * (as long as disableTypography is not `true`).
     */
    subheaderTypographyProps?: TypographyProps<
      SubheaderTypographyComponent,
      { component?: SubheaderTypographyComponent }
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The content of the component.
     */
    title?: JSXElement;
    /**
     * These props will be forwarded to the title
     * (as long as disableTypography is not `true`).
     */
    titleTypographyProps?: TypographyProps<
      TitleTypographyComponent,
      { component?: TitleTypographyComponent }
    >;
  };
  props: Props & CardHeaderTypeMap["selfProps"];
  defaultComponent: DefaultComponent;
}

export interface OverridableCardHeader
  extends OverridableComponent<CardHeaderTypeMap> {
  <
    DefaultComponent extends ElementType = CardHeaderTypeMap["defaultComponent"],
    Props = {},
    TitleTypographyComponent extends ElementType = "span",
    SubheaderTypographyComponent extends ElementType = "span"
  >(
    props: CardHeaderPropsWithComponent<
      DefaultComponent,
      Props,
      TitleTypographyComponent,
      SubheaderTypographyComponent
    >
  ): Element;
}

export type CardHeaderProps<
  DefaultComponent extends ElementType = CardHeaderTypeMap["defaultComponent"],
  Props = {},
  TitleTypographyComponent extends ElementType = "span",
  SubheaderTypographyComponent extends ElementType = "span"
> = OverrideProps<
  CardHeaderTypeMap<
    Props,
    DefaultComponent,
    TitleTypographyComponent,
    SubheaderTypographyComponent
  >,
  DefaultComponent
>;

export type CardHeaderPropsWithComponent<
  DefaultComponent extends ElementType = CardHeaderTypeMap["defaultComponent"],
  Props = {},
  TitleTypographyComponent extends ElementType = "span",
  SubheaderTypographyComponent extends ElementType = "span"
> = {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: DefaultComponent;
} & CardHeaderProps<
  DefaultComponent,
  Props,
  TitleTypographyComponent,
  SubheaderTypographyComponent
>;
