import type { Component, JSX } from "solid-js";
import type { Location, LocationChangeSignal, Navigator, RouteDataFunc, RouteDefinition, RouterIntegration } from "./types";
declare module "solid-js" {
    namespace JSX {
        interface AnchorHTMLAttributes<T> {
            state?: string;
            noScroll?: boolean;
            replace?: boolean;
        }
    }
}
export declare type RouterProps = {
    base?: string;
    data?: RouteDataFunc;
    children: JSX.Element;
    out?: object;
} & ({
    url?: never;
    source?: RouterIntegration | LocationChangeSignal;
} | {
    source?: never;
    url: string;
});
export declare const Router: (props: RouterProps) => JSX.Element;
export interface RoutesProps {
    base?: string;
    children: JSX.Element;
}
export declare const Routes: (props: RoutesProps) => JSX.Element;
export declare const useRoutes: (routes: RouteDefinition | RouteDefinition[], base?: string | undefined) => () => JSX.Element;
export declare type RouteProps = {
    path: string;
    children?: JSX.Element;
    data?: RouteDataFunc;
} & ({
    element?: never;
    component: Component;
} | {
    component?: never;
    element?: JSX.Element;
    preload?: () => void;
});
export declare const Route: (props: RouteProps) => JSX.Element;
export declare const Outlet: () => JSX.Element;
export interface LinkProps extends Omit<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, "state"> {
    href: string;
    replace?: boolean;
    noScroll?: boolean;
    state?: unknown;
}
export declare function Link(props: LinkProps): JSX.Element;
export interface NavLinkProps extends LinkProps {
    inactiveClass?: string;
    activeClass?: string;
    end?: boolean;
}
export declare function NavLink(props: NavLinkProps): JSX.Element;
export interface NavigateProps {
    href: ((args: {
        navigate: Navigator;
        location: Location;
    }) => string) | string;
    state?: unknown;
}
export declare function Navigate(props: NavigateProps): null;
