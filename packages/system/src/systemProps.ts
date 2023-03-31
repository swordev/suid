import createSystemProps from "./createSystemProps";
import { Theme } from "./createTheme";
import { StyledPropsBase } from "./styledProps";

const systemProps = createSystemProps();

export type SystemPropName = keyof typeof systemProps;
export const systemPropNames = Object.keys(systemProps) as SystemPropName[];

type SystemStyledPropName = Extract<SystemPropName, keyof StyledPropsBase>;
export type SystemExtraPropName = Exclude<SystemPropName, SystemStyledPropName>;

export type SystemExtraPropsBase = Partial<{
  [K in SystemExtraPropName]: Parameters<(typeof systemProps)[K]>[0];
}>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type SystemProps<T = Theme> = Pick<
  StyledPropsBase,
  SystemStyledPropName
> &
  SystemExtraPropsBase;

export default systemProps;
