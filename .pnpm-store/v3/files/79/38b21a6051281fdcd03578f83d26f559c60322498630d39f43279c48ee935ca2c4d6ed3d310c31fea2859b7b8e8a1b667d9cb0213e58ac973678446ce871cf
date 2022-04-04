'use strict';

var core = require('@babel/core');
var ts = require('@babel/preset-typescript');
var solid = require('babel-preset-solid');
var fs = require('fs');
var mergeAnything = require('merge-anything');
var module$1 = require('module');
var solidRefresh = require('solid-refresh/babel.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ts__default = /*#__PURE__*/_interopDefaultLegacy(ts);
var solid__default = /*#__PURE__*/_interopDefaultLegacy(solid);
var solidRefresh__default = /*#__PURE__*/_interopDefaultLegacy(solidRefresh);

const require$1 = module$1.createRequire((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.cjs', document.baseURI).href)));

const runtimePublicPath = '/@solid-refresh';

const runtimeFilePath = require$1.resolve('solid-refresh/dist/solid-refresh.mjs');

const runtimeCode = fs.readFileSync(runtimeFilePath, 'utf-8');
/** Possible options for the extensions property */

function getExtension(filename) {
  const index = filename.lastIndexOf('.');
  return index < 0 ? '' : filename.substring(index);
}

function solidPlugin(options = {}) {
  let needHmr = false;
  let replaceDev = false;
  let projectRoot = process.cwd();
  return {
    name: 'solid',
    enforce: 'pre',

    config(userConfig, {
      command
    }) {
      // We inject the dev mode only if the user explicitely wants it or if we are in dev (serve) mode
      replaceDev = options.dev === true || options.dev !== false && command === 'serve';
      projectRoot = userConfig.root; // TODO: remove when fully removed from vite

      const legacyAlias = normalizeAliases(userConfig.alias);
      if (!userConfig.resolve) userConfig.resolve = {};
      userConfig.resolve.alias = [...legacyAlias, ...normalizeAliases(userConfig.resolve && userConfig.resolve.alias)]; // fix for bundling dev in production

      const nestedDeps = replaceDev ? ['solid-js', 'solid-js/web', 'solid-js/store', 'solid-js/html', 'solid-js/h'] : [];
      return {
        /**
         * We only need esbuild on .ts or .js files.
         * .tsx & .jsx files are handled by us
         */
        esbuild: {
          include: /\.ts$/
        },
        resolve: {
          conditions: ['solid', ...(replaceDev ? ['development'] : [])],
          dedupe: nestedDeps,
          alias: [{
            find: /^solid-refresh$/,
            replacement: runtimePublicPath
          }]
        },
        optimizeDeps: {
          include: nestedDeps
        }
      };
    },

    configResolved(config) {
      needHmr = config.command === 'serve' && config.mode !== 'production' && options.hot !== false;
    },

    resolveId(id) {
      if (id === runtimePublicPath) return id;
    },

    load(id) {
      if (id === runtimePublicPath) return runtimeCode;
    },

    async transform(source, id, transformOptions) {
      const isSsr = transformOptions && transformOptions.ssr;
      const currentFileExtension = getExtension(id);
      const extensionsToWatch = [...(options.extensions || []), '.tsx', '.jsx'];
      const allExtensions = extensionsToWatch.map(extension => // An extension can be a string or a tuple [extension, options]
      typeof extension === 'string' ? extension : extension[0]);

      if (!allExtensions.includes(currentFileExtension)) {
        return null;
      }

      const inNodeModules = /node_modules/.test(id);
      let solidOptions;

      if (options.ssr) {
        if (isSsr) {
          solidOptions = {
            generate: 'ssr',
            hydratable: true
          };
        } else {
          solidOptions = {
            generate: 'dom',
            hydratable: true
          };
        }
      } else {
        solidOptions = {
          generate: 'dom',
          hydratable: false
        };
      }

      const opts = {
        babelrc: false,
        configFile: false,
        root: projectRoot,
        filename: id,
        sourceFileName: id,
        presets: [[solid__default["default"], { ...solidOptions,
          ...(options.solid || {})
        }]],
        plugins: needHmr && !isSsr && !inNodeModules ? [[solidRefresh__default["default"], {
          bundler: 'vite'
        }]] : [],
        sourceMaps: true,
        // Vite handles sourcemap flattening
        inputSourceMap: false
      }; // We need to know if the current file extension has a typescript options tied to it

      const shouldBeProcessedWithTypescript = extensionsToWatch.some(extension => {
        if (typeof extension === 'string') {
          return extension.includes('tsx');
        }

        const [extensionName, extensionOptions] = extension;
        if (extensionName !== currentFileExtension) return false;
        return extensionOptions.typescript;
      });

      if (shouldBeProcessedWithTypescript) {
        opts.presets.push([ts__default["default"], options.typescript || {}]);
      } // Default value for babel user options


      let babelUserOptions = {};

      if (options.babel) {
        if (typeof options.babel === 'function') {
          const babelOptions = options.babel(source, id, isSsr);
          babelUserOptions = babelOptions instanceof Promise ? await babelOptions : babelOptions;
        } else {
          babelUserOptions = options.babel;
        }
      }

      const babelOptions = mergeAnything.mergeAndConcat(babelUserOptions, opts);
      const {
        code,
        map
      } = await core.transformAsync(source, babelOptions);
      return {
        code,
        map
      };
    }

  };
}
/**
 * This basically normalize all aliases of the config into
 * the array format of the alias.
 *
 * eg: alias: { '@': 'src/' } => [{ find: '@', replacement: 'src/' }]
 */

function normalizeAliases(alias = []) {
  return Array.isArray(alias) ? alias : Object.entries(alias).map(([find, replacement]) => ({
    find,
    replacement
  }));
}

module.exports = solidPlugin;
//# sourceMappingURL=index.cjs.map
