const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const $DEVCOMP = Symbol("solid-dev-component");
const DEV = {};
const ERROR = Symbol("error");
const UNOWNED = {
  context: null,
  owner: null
};
let Owner = null;
function createRoot(fn, detachedOwner) {
  detachedOwner && (Owner = detachedOwner);
  const owner = Owner,
        root = fn.length === 0 ? UNOWNED : {
    context: null,
    owner
  };
  Owner = root;
  let result;
  try {
    result = fn(() => {});
  } catch (err) {
    const fns = lookup(Owner, ERROR);
    if (!fns) throw err;
    fns.forEach(f => f(err));
  } finally {
    Owner = owner;
  }
  return result;
}
function createSignal(value, options) {
  return [() => value, v => {
    return value = typeof v === "function" ? v(value) : v;
  }];
}
function createComputed(fn, value) {
  Owner = {
    owner: Owner,
    context: null
  };
  try {
    fn(value);
  } catch (err) {
    const fns = lookup(Owner, ERROR);
    if (!fns) throw err;
    fns.forEach(f => f(err));
  } finally {
    Owner = Owner.owner;
  }
}
const createRenderEffect = createComputed;
function createEffect(fn, value) {}
function createReaction(fn) {
  return fn => {
    fn();
  };
}
function createMemo(fn, value) {
  Owner = {
    owner: Owner,
    context: null
  };
  let v;
  try {
    v = fn(value);
  } catch (err) {
    const fns = lookup(Owner, ERROR);
    if (!fns) throw err;
    fns.forEach(f => f(err));
  } finally {
    Owner = Owner.owner;
  }
  return () => v;
}
function createDeferred(source) {
  return source;
}
function createSelector(source, fn = equalFn) {
  return k => fn(k, source());
}
function batch(fn) {
  return fn();
}
const untrack = batch;
function on(deps, fn, options = {}) {
  const isArray = Array.isArray(deps);
  const defer = options.defer;
  return () => {
    if (defer) return undefined;
    let value;
    if (isArray) {
      value = [];
      for (let i = 0; i < deps.length; i++) value.push(deps[i]());
    } else value = deps();
    return fn(value);
  };
}
function onMount(fn) {}
function onCleanup(fn) {}
function onError(fn) {
  if (Owner === null) console.warn("error handlers created outside a `createRoot` or `render` will never be run");else if (Owner.context === null) Owner.context = {
    [ERROR]: [fn]
  };else if (!Owner.context[ERROR]) Owner.context[ERROR] = [fn];else Owner.context[ERROR].push(fn);
}
function getListener() {
  return null;
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  let ctx;
  return (ctx = lookup(Owner, context.id)) !== undefined ? ctx : context.defaultValue;
}
function getOwner() {
  return Owner;
}
function children(fn) {
  return createMemo(() => resolveChildren(fn()));
}
function runWithOwner(o, fn) {
  const prev = Owner;
  Owner = o;
  try {
    return fn();
  } finally {
    Owner = prev;
  }
}
function lookup(owner, key) {
  return owner ? owner.context && owner.context[key] !== undefined ? owner.context[key] : lookup(owner.owner, key) : undefined;
}
function resolveChildren(children) {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id) {
  return function provider(props) {
    return createMemo(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    });
  };
}
function requestCallback(fn, options) {
  return {
    id: 0,
    fn: () => {},
    startTime: 0,
    expirationTime: 0
  };
}
function mapArray(list, mapFn, options = {}) {
  const items = list();
  let s = [];
  if (items.length) {
    for (let i = 0, len = items.length; i < len; i++) s.push(mapFn(items[i], () => i));
  } else if (options.fallback) s = [options.fallback()];
  return () => s;
}
function getSymbol() {
  const SymbolCopy = Symbol;
  return SymbolCopy.observable || "@@observable";
}
function observable(input) {
  const $$observable = getSymbol();
  return {
    subscribe(observer) {
      if (!(observer instanceof Object) || observer == null) {
        throw new TypeError("Expected the observer to be an object.");
      }
      const handler = "next" in observer ? observer.next : observer;
      let complete = false;
      createComputed(() => {
        if (complete) return;
        const v = input();
        handler(v);
      });
      return {
        unsubscribe() {
          complete = true;
        }
      };
    },
    [$$observable]() {
      return this;
    }
  };
}
function from(producer) {
  const [s, set] = createSignal(undefined);
  if ("subscribe" in producer) {
    producer.subscribe(v => set(() => v));
  } else {
    producer(set);
  }
  return s;
}
function enableExternalSource(factory) {}

function resolveSSRNode(node) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) return node.map(resolveSSRNode).join("");
  if (t === "object") return resolveSSRNode(node.t);
  if (t === "function") return resolveSSRNode(node());
  return String(node);
}
const sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return sharedConfig.context ? { ...sharedConfig.context,
    id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
    count: 0
  } : undefined;
}
function createUniqueId() {
  const ctx = sharedConfig.context;
  if (!ctx) throw new Error(`createUniqueId cannot be used under non-hydrating context`);
  return `${ctx.id}${ctx.count++}`;
}
function createComponent(Comp, props) {
  if (sharedConfig.context && !sharedConfig.context.noHydrate) {
    const c = sharedConfig.context;
    setHydrateContext(nextHydrateContext());
    const r = Comp(props);
    setHydrateContext(c);
    return r;
  }
  return Comp(props);
}
function mergeProps(...sources) {
  const target = {};
  for (let i = 0; i < sources.length; i++) {
    const descriptors = Object.getOwnPropertyDescriptors(sources[i]);
    Object.defineProperties(target, descriptors);
  }
  return target;
}
function splitProps(props, ...keys) {
  const descriptors = Object.getOwnPropertyDescriptors(props),
        split = k => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key]);
        delete descriptors[key];
      }
    }
    return clone;
  };
  return keys.map(split).concat(split(Object.keys(descriptors)));
}
function simpleMap(props, wrap) {
  const list = props.each || [],
        len = list.length,
        fn = props.children;
  if (len) {
    let mapped = "";
    for (let i = 0; i < len; i++) mapped += resolveSSRNode(wrap(fn, list[i], i));
    return {
      t: mapped
    };
  }
  return props.fallback || "";
}
function For(props) {
  return simpleMap(props, (fn, item, i) => fn(item, () => i));
}
function Index(props) {
  return simpleMap(props, (fn, item, i) => fn(() => item, i));
}
function Show(props) {
  let c;
  return props.when ? typeof (c = props.children) === "function" ? c(props.when) : c : props.fallback || "";
}
function Switch(props) {
  let conditions = props.children;
  Array.isArray(conditions) || (conditions = [conditions]);
  for (let i = 0; i < conditions.length; i++) {
    const w = conditions[i].when;
    if (w) {
      const c = conditions[i].children;
      return typeof c === "function" ? c(w) : c;
    }
  }
  return props.fallback || "";
}
function Match(props) {
  return props;
}
function resetErrorBoundaries() {}
function ErrorBoundary(props) {
  let error, res;
  const ctx = sharedConfig.context;
  const id = ctx.id + ctx.count;
  onError(err => error = err);
  createMemo(() => res = props.children);
  if (error) {
    ctx.writeResource(id, error, true);
    setHydrateContext({ ...ctx,
      count: 0
    });
    const f = props.fallback;
    return typeof f === "function" && f.length ? f(error, () => {}) : f;
  }
  return res;
}
const SuspenseContext = createContext();
let resourceContext = null;
function createResource(source, fetcher, options = {}) {
  if (arguments.length === 2) {
    if (typeof fetcher === "object") {
      options = fetcher;
      fetcher = source;
      source = true;
    }
  } else if (arguments.length === 1) {
    fetcher = source;
    source = true;
  }
  const contexts = new Set();
  const id = sharedConfig.context.id + sharedConfig.context.count++;
  let resource = {};
  let value = options.initialValue;
  let p;
  let error;
  if (sharedConfig.context.async) {
    resource = sharedConfig.context.resources[id] || (sharedConfig.context.resources[id] = {});
    if (resource.ref) {
      if (!resource.data && !resource.ref[0].loading && !resource.ref[0].error) resource.ref[1].refetch();
      return resource.ref;
    }
  }
  const read = () => {
    if (error) throw error;
    if (resourceContext && p) resourceContext.push(p);
    const resolved = sharedConfig.context.async && sharedConfig.context.resources[id].data;
    if (!resolved && read.loading) {
      const ctx = useContext(SuspenseContext);
      if (ctx) {
        ctx.resources.set(id, read);
        contexts.add(ctx);
      }
    }
    return resolved ? sharedConfig.context.resources[id].data : value;
  };
  read.loading = false;
  read.error = undefined;
  function load() {
    const ctx = sharedConfig.context;
    if (!ctx.async) return read.loading = !!(typeof source === "function" ? source() : source);
    if (ctx.resources && id in ctx.resources && ctx.resources[id].data) {
      value = ctx.resources[id].data;
      return;
    }
    resourceContext = [];
    const lookup = typeof source === "function" ? source() : source;
    if (resourceContext.length) {
      p = Promise.all(resourceContext).then(() => fetcher(source(), {
        value
      }));
    }
    resourceContext = null;
    if (!p) {
      if (lookup == null || lookup === false) return;
      p = fetcher(lookup, {
        value
      });
    }
    if (p && "then" in p) {
      read.loading = true;
      if (ctx.writeResource) ctx.writeResource(id, p);
      return p.then(res => {
        read.loading = false;
        ctx.resources[id].data = res;
        p = null;
        notifySuspense(contexts);
        return res;
      }).catch(err => {
        read.loading = false;
        read.error = error = err;
        p = null;
        notifySuspense(contexts);
      });
    }
    ctx.resources[id].data = p;
    p = null;
    return ctx.resources[id].data;
  }
  load();
  return resource.ref = [read, {
    refetch: load,
    mutate: v => value = v
  }];
}
function refetchResources(info) {}
function lazy(fn) {
  let resolved;
  const p = fn();
  const contexts = new Set();
  p.then(mod => resolved = mod.default);
  const wrap = props => {
    const id = sharedConfig.context.id.slice(0, -1);
    if (resolved) return resolved(props);
    const ctx = useContext(SuspenseContext);
    const track = {
      loading: true,
      error: undefined
    };
    if (ctx) {
      ctx.resources.set(id, track);
      contexts.add(ctx);
    }
    if (sharedConfig.context.async) p.then(() => {
      track.loading = false;
      notifySuspense(contexts);
    });
    return "";
  };
  wrap.preload = () => p;
  return wrap;
}
function suspenseComplete(c) {
  for (const r of c.resources.values()) {
    if (r.loading) return false;
  }
  return true;
}
function notifySuspense(contexts) {
  for (const c of contexts) {
    if (suspenseComplete(c)) c.completed();
  }
  contexts.clear();
}
function enableScheduling() {}
function enableHydration() {}
function startTransition(fn) {
  fn();
}
function useTransition() {
  return [() => false, fn => {
    fn();
  }];
}
function SuspenseList(props) {
  return props.children;
}
function Suspense(props) {
  let done;
  const ctx = sharedConfig.context;
  const id = ctx.id + ctx.count;
  const o = Owner;
  const value = ctx.suspense[id] || (ctx.suspense[id] = {
    resources: new Map(),
    completed: () => {
      const res = runSuspense();
      if (suspenseComplete(value)) {
        done(resolveSSRNode(res));
      }
    }
  });
  function runSuspense() {
    setHydrateContext({ ...ctx,
      count: 0
    });
    return runWithOwner(o, () => {
      return createComponent(SuspenseContext.Provider, {
        value,
        get children() {
          return props.children;
        }
      });
    });
  }
  const res = runSuspense();
  if (suspenseComplete(value)) {
    ctx.writeResource(id, null);
    return res;
  }
  onError(err => {
    if (!done || !done(undefined, err)) throw err;
  });
  done = ctx.async ? ctx.registerFragment(id) : undefined;
  if (ctx.streaming) {
    setHydrateContext(undefined);
    const res = {
      t: `<span id="pl${id}">${resolveSSRNode(props.fallback)}</span>`
    };
    setHydrateContext(ctx);
    return res;
  } else if (ctx.async) {
    return {
      t: `<![${id}]>`
    };
  }
  setHydrateContext({ ...ctx,
    count: 0,
    id: ctx.id + "0.f"
  });
  return props.fallback;
}

export { $DEVCOMP, $PROXY, DEV, ErrorBoundary, For, Index, Match, Show, Suspense, SuspenseList, Switch, batch, children, createComponent, createComputed, createContext, createDeferred, createEffect, createMemo, createReaction, createRenderEffect, createResource, createRoot, createSelector, createSignal, createUniqueId, enableExternalSource, enableHydration, enableScheduling, equalFn, from, getListener, getOwner, lazy, mapArray, mergeProps, observable, on, onCleanup, onError, onMount, refetchResources, requestCallback, resetErrorBoundaries, runWithOwner, sharedConfig, splitProps, startTransition, untrack, useContext, useTransition };
