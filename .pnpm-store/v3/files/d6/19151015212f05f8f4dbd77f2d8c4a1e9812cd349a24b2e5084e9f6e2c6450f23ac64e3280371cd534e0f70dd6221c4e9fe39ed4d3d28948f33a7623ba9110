'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var solidJs = require('solid-js');

const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const BooleanAttributes = new Set(booleans);
new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
const Aliases = {
  className: "class",
  htmlFor: "for"
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  '<': '\\u003C',
  '>': '\\u003E',
  '/': '\\u002F',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\0': '\\0',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === 'function') {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case 'Number':
        case 'String':
        case 'Boolean':
        case 'Date':
        case 'RegExp':
          return;
        case 'Array':
          thing.forEach(walk);
          break;
        case 'Set':
        case 'Map':
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function (key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function (entry) {
    return entry[1] > 1;
  }).sort(function (a, b) {
    return b[1] - a[1];
  }).forEach(function (entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case 'Number':
      case 'String':
      case 'Boolean':
        return "Object(" + stringify(thing.valueOf()) + ")";
      case 'RegExp':
        return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
      case 'Date':
        return "new Date(" + thing.getTime() + ")";
      case 'Array':
        var members = thing.map(function (v, i) {
          return i in thing ? stringify(v) : '';
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
        return "[" + members.join(',') + tail + "]";
      case 'Set':
      case 'Map':
        return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function (key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(',') + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function (name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case 'Number':
        case 'String':
        case 'Boolean':
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case 'RegExp':
          values_1.push(thing.toString());
          break;
        case 'Date':
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case 'Array':
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function (v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case 'Set':
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function (v) {
            return "add(" + stringify(v) + ")";
          }).join('.'));
          break;
        case 'Map':
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function (_a) {
            var k = _a[0],
                v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join('.'));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
          Object.keys(thing).forEach(function (key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = '';
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === 'string') return stringifyString(thing);
  if (thing === void 0) return 'void 0';
  if (thing === 0 && 1 / thing < 0) return '-0';
  var str = String(thing);
  if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 0xd800 && code <= 0xdfff) {
      var next = str.charCodeAt(i + 1);
      if (code <= 0xdbff && next >= 0xdc00 && next <= 0xdfff) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

const REPLACE_SCRIPT = `function $df(e,y,t,g){t=document.getElementById(e),g=document.getElementById("pl"+e),g&&g.replaceWith(...t.childNodes),_$HY.set(e,y||null)}`;
const FRAGMENT_REPLACE = /<!\[([\d-]+)\]>/;
function renderToString(code, options = {}) {
  let scripts = "";
  solidJs.sharedConfig.context = {
    id: options.renderId || "",
    count: 0,
    suspense: {},
    assets: [],
    nonce: options.nonce,
    writeResource(id, p, error) {
      if (error) return scripts += `_$HY.set("${id}", ${serializeError(p)});`;
      scripts += `_$HY.set("${id}", ${devalue(p)});`;
    }
  };
  let html = injectAssets(solidJs.sharedConfig.context.assets, resolveSSRNode(escape(code())));
  if (scripts.length) html = injectScripts(html, scripts, options.nonce);
  return html;
}
function renderToStringAsync(code, options = {}) {
  let scripts = "";
  const {
    nonce,
    renderId,
    timeoutMs = 30000
  } = options;
  const dedupe = new WeakMap();
  const context = solidJs.sharedConfig.context = {
    id: renderId || "",
    count: 0,
    resources: {},
    suspense: {},
    assets: [],
    async: true,
    nonce,
    writeResource(id, p, error) {
      if (error) return scripts += `_$HY.set("${id}", ${serializeError(p)});`;
      if (!p || typeof p !== "object" || !("then" in p)) return scripts += serializeSet(dedupe, id, p);
      p.then(d => scripts += serializeSet(dedupe, id, d)).catch(() => scripts += `_$HY.set("${id}", {});`);
    }
  };
  const timeout = new Promise((_, reject) => setTimeout(() => reject("renderToString timed out"), timeoutMs));
  function asyncWrap(fn) {
    return new Promise(resolve => {
      const registry = new Set();
      const cache = Object.create(null);
      solidJs.sharedConfig.context.registerFragment = register;
      const rendered = fn();
      if (!registry.size) resolve(rendered);
      function register(key) {
        registry.add(key);
        return (value = "", error) => {
          if (!registry.has(key)) return;
          cache[key] = value;
          registry.delete(key);
          if (error) scripts += `_$HY.set("${key}", Promise.resolve(${serializeError(error)}));`;else scripts += `_$HY.set("${key}", null);`;
          if (!registry.size) Promise.resolve().then(() => {
            let source = resolveSSRNode(rendered);
            let final = "";
            let match;
            while (match = source.match(FRAGMENT_REPLACE)) {
              final += source.substring(0, match.index);
              source = cache[match[1]] + source.substring(match.index + match[0].length);
            }
            resolve(final + source);
          });
          return true;
        };
      }
    });
  }
  return Promise.race([asyncWrap(() => escape(code())), timeout]).then(res => {
    let html = injectAssets(context.assets, resolveSSRNode(res));
    if (scripts.length) html = injectScripts(html, scripts, nonce);
    return html;
  });
}
function renderToStream(code, options = {}) {
  const {
    nonce,
    onCompleteShell,
    onCompleteAll,
    renderId
  } = options;
  const tmp = [];
  const tasks = [];
  const registry = new Map();
  const dedupe = new WeakMap();
  const checkEnd = () => {
    if (!registry.size && !completed) {
      writeTasks();
      onCompleteAll && onCompleteAll({
        write(v) {
          !completed && buffer.write(v);
        }
      });
      writable && writable.end();
      completed = true;
    }
  };
  const writeTasks = () => {
    if (tasks.length && !completed) {
      buffer.write(`<script${nonce ? ` nonce="${nonce}"` : ""}>${tasks.join(";")}</script>`);
      tasks.length = 0;
    }
    scheduled = false;
  };
  let writable;
  let completed = false;
  let scriptFlushed = false;
  let scheduled = true;
  let buffer = {
    write(payload) {
      tmp.push(payload);
    }
  };
  solidJs.sharedConfig.context = {
    id: renderId || "",
    count: 0,
    async: true,
    streaming: true,
    resources: {},
    suspense: {},
    assets: [],
    nonce,
    writeResource(id, p, error) {
      if (!scheduled) {
        Promise.resolve().then(writeTasks);
        scheduled = true;
      }
      if (error) return tasks.push(`_$HY.set("${id}", ${serializeError(p)})`);
      if (!p || typeof p !== "object" || !("then" in p)) return tasks.push(serializeSet(dedupe, id, p));
      tasks.push(`_$HY.init("${id}")`);
      p.then(d => {
        !completed && buffer.write(`<script${nonce ? ` nonce="${nonce}"` : ""}>${serializeSet(dedupe, id, d)}</script>`);
      }).catch(() => {
        !completed && buffer.write(`<script${nonce ? ` nonce="${nonce}"` : ""}>_$HY.set("${id}", {})</script>`);
      });
    },
    registerFragment(key) {
      registry.set(key, []);
      if (!scheduled) {
        Promise.resolve().then(writeTasks);
        scheduled = true;
      }
      tasks.push(`_$HY.init("${key}")`);
      return (value, error) => {
        if (registry.has(key)) {
          const keys = registry.get(key);
          registry.delete(key);
          if (waitForFragments(registry, key)) return;
          if ((value !== undefined || error) && !completed) {
            buffer.write(`<div hidden id="${key}">${value !== undefined ? value : " "}</div><script${nonce ? ` nonce="${nonce}"` : ""}>${!scriptFlushed ? REPLACE_SCRIPT : ""}${keys.length ? keys.map(k => `_$HY.unset("${k}");`) : ""}$df("${key}"${error ? "," + serializeError(error) : ""})</script>`);
            scriptFlushed = true;
          }
        }
        checkEnd();
        return true;
      };
    }
  };
  let html = resolveSSRNode(escape(code()));
  html = injectAssets(solidJs.sharedConfig.context.assets, html);
  Promise.resolve().then(() => {
    if (tasks.length) html = injectScripts(html, tasks.join(";"), nonce);
    buffer.write(html);
    tasks.length = 0;
    scheduled = false;
    onCompleteShell && onCompleteShell({
      write(v) {
        !completed && buffer.write(v);
      }
    });
  });
  return {
    pipe(w) {
      buffer = writable = w;
      tmp.forEach(chunk => buffer.write(chunk));
      if (completed) writable.end();else setTimeout(checkEnd);
    },
    pipeTo(w) {
      const encoder = new TextEncoder();
      const writer = w.getWriter();
      writable = {
        end() {
          writer.releaseLock();
          w.close();
        }
      };
      buffer = {
        write(payload) {
          writer.write(encoder.encode(payload));
        }
      };
      tmp.forEach(chunk => buffer.write(chunk));
      if (completed) writable.end();else setTimeout(checkEnd);
    }
  };
}
function Assets(props) {
  solidJs.sharedConfig.context.assets.push(() => NoHydration({
    get children() {
      return resolveSSRNode(props.children);
    }
  }));
  return ssr(`%%$${solidJs.sharedConfig.context.assets.length - 1}%%`);
}
function HydrationScript(props) {
  const {
    nonce
  } = solidJs.sharedConfig.context;
  solidJs.sharedConfig.context.assets.push(() => generateHydrationScript({
    nonce,
    ...props
  }));
  return ssr(`%%$${solidJs.sharedConfig.context.assets.length - 1}%%`);
}
function NoHydration(props) {
  const c = solidJs.sharedConfig.context;
  c.noHydrate = true;
  const children = props.children;
  c.noHydrate = false;
  return children;
}
function ssr(t, ...nodes) {
  if (nodes.length) {
    let result = "";
    for (let i = 0; i < t.length; i++) {
      result += t[i];
      const node = nodes[i];
      if (node !== undefined) result += resolveSSRNode(node);
    }
    t = result;
  }
  return {
    t
  };
}
function ssrClassList(value) {
  if (!value) return "";
  let classKeys = Object.keys(value),
      result = "";
  for (let i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key];
    if (!key || !classValue) continue;
    i && (result += " ");
    result += key;
  }
  return result;
}
function ssrStyle(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  let result = "";
  const k = Object.keys(value);
  for (let i = 0; i < k.length; i++) {
    const s = k[i];
    if (i) result += ";";
    result += `${s}:${escape(value[s], true)}`;
  }
  return result;
}
function ssrSpread(props, isSVG, skipChildren) {
  if (typeof props === "function") props = props();
  const keys = Object.keys(props);
  let result = "";
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    if (prop === "children") {
      !skipChildren && console.warn(`SSR currently does not support spread children.`);
      continue;
    }
    const value = props[prop];
    if (prop === "style") {
      result += `style="${ssrStyle(value)}"`;
    } else if (prop === "classList") {
      result += `class="${ssrClassList(value)}"`;
    } else if (BooleanAttributes.has(prop)) {
      if (value) result += prop;else continue;
    } else if (prop === "ref" || prop.slice(0, 2) === "on") {
      continue;
    } else {
      result += `${Aliases[prop] || prop}="${escape(value, true)}"`;
    }
    if (i !== keys.length - 1) result += " ";
  }
  return result;
}
function ssrBoolean(key, value) {
  return value ? " " + key : "";
}
function ssrHydrationKey() {
  const hk = getHydrationKey();
  return hk ? ` data-hk="${hk}"` : "";
}
function escape(s, attr) {
  const t = typeof s;
  if (t !== "string") {
    if (!attr && t === "function") return escape(s(), attr);
    if (attr && t === "boolean") return String(s);
    return s;
  }
  const delim = attr ? '"' : "<";
  const escDelim = attr ? "&quot;" : "&lt;";
  let iDelim = s.indexOf(delim);
  let iAmp = s.indexOf("&");
  if (iDelim < 0 && iAmp < 0) return s;
  let left = 0,
      out = "";
  while (iDelim >= 0 && iAmp >= 0) {
    if (iDelim < iAmp) {
      if (left < iDelim) out += s.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s.indexOf(delim, left);
    } else {
      if (left < iAmp) out += s.substring(left, iAmp);
      out += "&amp;";
      left = iAmp + 1;
      iAmp = s.indexOf("&", left);
    }
  }
  if (iDelim >= 0) {
    do {
      if (left < iDelim) out += s.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s.indexOf(delim, left);
    } while (iDelim >= 0);
  } else while (iAmp >= 0) {
    if (left < iAmp) out += s.substring(left, iAmp);
    out += "&amp;";
    left = iAmp + 1;
    iAmp = s.indexOf("&", left);
  }
  return left < s.length ? out + s.substring(left) : out;
}
function resolveSSRNode(node) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) return node.map(resolveSSRNode).join("");
  if (t === "object") return resolveSSRNode(node.t);
  if (t === "function") return resolveSSRNode(node());
  return String(node);
}
function getHydrationKey() {
  const hydrate = solidJs.sharedConfig.context;
  return hydrate && !hydrate.noHydrate && `${hydrate.id}${hydrate.count++}`;
}
function generateHydrationScript({
  eventNames = ["click", "input"],
  nonce
} = {}) {
  return `<script${nonce ? ` nonce="${nonce}"` : ""}>var e,t;e=window._$HY||(_$HY={events:[],completed:new WeakSet,r:{}}),t=e=>e&&e.hasAttribute&&(e.hasAttribute("data-hk")?e:t(e.host&&e.host instanceof Node?e.host:e.parentNode)),["${eventNames.join('","')}"].forEach((o=>document.addEventListener(o,(o=>{let s=o.composedPath&&o.composedPath()[0]||o.target,a=t(s);a&&!e.completed.has(a)&&e.events.push([a,o])})))),e.init=(t,o)=>{e.r[t]=[new Promise(((e,t)=>o=e)),o]},e.set=(t,o,s)=>{(s=e.r[t])&&s[1](o),e.r[t]=[o]},e.unset=t=>{delete e.r[t]},e.load=(t,o)=>{if(o=e.r[t])return o[0]};</script><!--xs-->`;
}
function injectAssets(assets, html) {
  for (let i = 0; i < assets.length; i++) {
    html = html.replace(`%%$${i}%%`, assets[i]());
  }
  return html;
}
function injectScripts(html, scripts, nonce) {
  const tag = `<script${nonce ? ` nonce="${nonce}"` : ""}>${scripts}</script>`;
  const index = html.indexOf("<!--xs-->");
  if (index > -1) {
    return html.slice(0, index) + tag + html.slice(index);
  }
  return html + tag;
}
function serializeError(error) {
  if (error.message) {
    const fields = {};
    const keys = Object.getOwnPropertyNames(error);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = error[key];
      if (!value || key !== "message" && typeof value !== "function") {
        fields[key] = value;
      }
    }
    return `Object.assign(new Error(${devalue(error.message)}), ${devalue(fields)})`;
  }
  return devalue(error);
}
function waitForFragments(registry, key) {
  for (const k of [...registry.keys()].reverse()) {
    if (key.startsWith(k)) {
      registry.get(k).push(key);
      return true;
    }
  }
  return false;
}
function serializeSet(registry, key, value) {
  const exist = registry.get(value);
  if (exist) return `_$HY.set("${key}", _$HY.r["${exist}"][0]);`;
  value !== null && typeof value === "object" && registry.set(value, key);
  return `_$HY.set("${key}", ${devalue(value)});`;
}
function pipeToNodeWritable(code, writable, options = {}) {
  if (options.onReady) {
    options.onCompleteShell = ({
      write
    }) => {
      options.onReady({
        write,
        startWriting() {
          stream.pipe(writable);
        }
      });
    };
  }
  const stream = renderToStream(code, options);
  if (!options.onReady) stream.pipe(writable);
}
function pipeToWritable(code, writable, options = {}) {
  if (options.onReady) {
    options.onCompleteShell = ({
      write
    }) => {
      options.onReady({
        write,
        startWriting() {
          stream.pipeTo(writable);
        }
      });
    };
  }
  const stream = renderToStream(code, options);
  if (!options.onReady) stream.pipeTo(writable);
}

const isServer = true;
function spread() {}
function Dynamic(props) {
  const [p, others] = solidJs.splitProps(props, ["component"]);
  const comp = p.component,
        t = typeof comp;
  if (comp) {
    if (t === "function") return comp(others);else if (t === "string") {
      const [local, sOthers] = solidJs.splitProps(others, ["children"]);
      return ssr([`<${comp}`, ' ', ">", `</${comp}>`], ssrHydrationKey(), ssrSpread(sOthers), local.children || "");
    }
  }
}
function Portal(props) {
  return "";
}

Object.defineProperty(exports, 'ErrorBoundary', {
  enumerable: true,
  get: function () { return solidJs.ErrorBoundary; }
});
Object.defineProperty(exports, 'For', {
  enumerable: true,
  get: function () { return solidJs.For; }
});
Object.defineProperty(exports, 'Index', {
  enumerable: true,
  get: function () { return solidJs.Index; }
});
Object.defineProperty(exports, 'Match', {
  enumerable: true,
  get: function () { return solidJs.Match; }
});
Object.defineProperty(exports, 'Show', {
  enumerable: true,
  get: function () { return solidJs.Show; }
});
Object.defineProperty(exports, 'Suspense', {
  enumerable: true,
  get: function () { return solidJs.Suspense; }
});
Object.defineProperty(exports, 'SuspenseList', {
  enumerable: true,
  get: function () { return solidJs.SuspenseList; }
});
Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function () { return solidJs.Switch; }
});
Object.defineProperty(exports, 'createComponent', {
  enumerable: true,
  get: function () { return solidJs.createComponent; }
});
Object.defineProperty(exports, 'mergeProps', {
  enumerable: true,
  get: function () { return solidJs.mergeProps; }
});
exports.Assets = Assets;
exports.Dynamic = Dynamic;
exports.HydrationScript = HydrationScript;
exports.NoHydration = NoHydration;
exports.Portal = Portal;
exports.escape = escape;
exports.generateHydrationScript = generateHydrationScript;
exports.getHydrationKey = getHydrationKey;
exports.isServer = isServer;
exports.pipeToNodeWritable = pipeToNodeWritable;
exports.pipeToWritable = pipeToWritable;
exports.renderToStream = renderToStream;
exports.renderToString = renderToString;
exports.renderToStringAsync = renderToStringAsync;
exports.resolveSSRNode = resolveSSRNode;
exports.spread = spread;
exports.ssr = ssr;
exports.ssrBoolean = ssrBoolean;
exports.ssrClassList = ssrClassList;
exports.ssrHydrationKey = ssrHydrationKey;
exports.ssrSpread = ssrSpread;
exports.ssrStyle = ssrStyle;
