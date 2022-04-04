/*@refresh skip*/
import { createMemo, createRoot, mergeProps, on, Show, splitProps } from "solid-js";
import { isServer } from "solid-js/web";
import { pathIntegration, staticIntegration } from "./integration";
import { createBranches, createRouteContext, createRouterContext, getRouteMatches, RouteContextObj, RouterContextObj, useHref, useLocation, useNavigate, useResolvedPath, useRoute, useRouter } from "./routing";
import { joinPaths } from "./utils";
export const Router = (props) => {
    const { source, url, base, data, out } = props;
    const integration = source || (isServer ? staticIntegration({ value: url || "" }) : pathIntegration());
    const routerState = createRouterContext(integration, base, data, out);
    return (<RouterContextObj.Provider value={routerState}>{props.children}</RouterContextObj.Provider>);
};
export const Routes = (props) => {
    const router = useRouter();
    const parentRoute = useRoute();
    const branches = createMemo(() => createBranches(props.children, joinPaths(parentRoute.pattern, props.base || ""), Outlet));
    const matches = createMemo(() => getRouteMatches(branches(), router.location.pathname));
    if (router.out) {
        router.out.matches.push(matches().map(({ route, path, params }) => ({
            originalPath: route.originalPath,
            pattern: route.pattern,
            path,
            params
        })));
    }
    const disposers = [];
    let root;
    const routeStates = createMemo(on(matches, (nextMatches, prevMatches, prev) => {
        let equal = prevMatches && nextMatches.length === prevMatches.length;
        const next = [];
        for (let i = 0, len = nextMatches.length; i < len; i++) {
            const prevMatch = prevMatches && prevMatches[i];
            const nextMatch = nextMatches[i];
            if (prev && prevMatch && nextMatch.route.pattern === prevMatch.route.pattern) {
                next[i] = prev[i];
            }
            else {
                equal = false;
                if (disposers[i]) {
                    disposers[i]();
                }
                createRoot(dispose => {
                    disposers[i] = dispose;
                    next[i] = createRouteContext(router, next[i - 1] || parentRoute, () => routeStates()[i + 1], () => matches()[i]);
                });
            }
        }
        disposers.splice(nextMatches.length).forEach(dispose => dispose());
        if (prev && equal) {
            return prev;
        }
        root = next[0];
        return next;
    }));
    return (<Show when={routeStates() && root}>
      {route => <RouteContextObj.Provider value={route}>{route.outlet()}</RouteContextObj.Provider>}
    </Show>);
};
export const useRoutes = (routes, base) => {
    return () => <Routes base={base}>{routes}</Routes>;
};
export const Route = (props) => props;
export const Outlet = () => {
    const route = useRoute();
    return (<Show when={route.child}>
      {child => <RouteContextObj.Provider value={child}>{child.outlet()}</RouteContextObj.Provider>}
    </Show>);
};
function LinkBase(props) {
    const [, rest] = splitProps(props, ["children", "to", "href", "state"]);
    const href = useHref(() => props.to);
    return (<a {...rest} href={href() || props.href} state={JSON.stringify(props.state)}>
      {props.children}
    </a>);
}
export function Link(props) {
    const to = useResolvedPath(() => props.href);
    return <LinkBase {...props} to={to()}/>;
}
export function NavLink(props) {
    props = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, props);
    const [, rest] = splitProps(props, ["activeClass", "inactiveClass", "end"]);
    const location = useLocation();
    const to = useResolvedPath(() => props.href);
    const isActive = createMemo(() => {
        const to_ = to();
        if (to_ === undefined) {
            return false;
        }
        const path = to_.split(/[?#]/, 1)[0].toLowerCase();
        const loc = location.pathname.toLowerCase();
        return props.end ? path === loc : loc.startsWith(path);
    });
    return (<LinkBase {...rest} to={to()} classList={{ [props.inactiveClass]: !isActive(), [props.activeClass]: isActive() }} aria-current={isActive() ? "page" : undefined}/>);
}
export function Navigate(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const { href, state } = props;
    const path = typeof href === "function" ? href({ navigate, location }) : href;
    navigate(path, { replace: true, state });
    return null;
}
