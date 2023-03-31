import $generate from "@babel/generator";
import { parse, ParserOptions } from "@babel/parser";
import $traverse from "@babel/traverse";
import * as types from "@babel/types";
import type { Plugin } from "vite";

// https://github.com/babel/babel/issues/13855
const traverse: typeof $traverse = ($traverse as any).default;
const generate: typeof $generate = ($generate as any).default;

type SuidPluginOptions = {
  /**
   * @default ["@suid/base", "@suid/codemod", "@suid/css", "@suid/icons-material", "@suid/material", "@suid/styled-engine", "@suid/system", "@suid/types", "@suid/utils"]
   */
  disableOptimizeDeps?: string[];
  optimizeImports?: {
    /**
     * @default true
     */
    enabled?: boolean;
    /**
     * @default ["@suid/icons-material", "@suid/material"]
     */
    paths?: string[];
  };
  parserOptions?: ParserOptions;
};

const defaultOptions: SuidPluginOptions = {
  disableOptimizeDeps: [
    "@suid/base",
    "@suid/codemod",
    "@suid/css",
    "@suid/icons-material",
    "@suid/material",
    "@suid/styled-engine",
    "@suid/system",
    "@suid/types",
    "@suid/utils",
  ],
  optimizeImports: {
    enabled: true,
    paths: ["@suid/icons-material", "@suid/material"],
  },
  parserOptions: {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  },
};

export default function suidPlugin(inOptions: SuidPluginOptions = {}): Plugin {
  const options: SuidPluginOptions = {
    ...defaultOptions,
    ...inOptions,
    parserOptions: {
      ...defaultOptions.parserOptions,
      ...inOptions.parserOptions,
    },
    optimizeImports: {
      ...defaultOptions.optimizeImports,
      ...inOptions.optimizeImports,
    },
  };
  return {
    name: "suid",
    config: (config) => {
      const solidDeps = options.disableOptimizeDeps || [];
      return {
        optimizeDeps: {
          exclude: [...(config.optimizeDeps?.exclude || []), ...solidDeps],
        },
        ssr: {
          ...config.ssr,
          noExternal: [
            ...(Array.isArray(config.ssr?.noExternal)
              ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                config.ssr!.noExternal
              : []),
            ...solidDeps,
          ],
        },
      };
    },
    transform(code) {
      const transformIconImportsOptions = options.optimizeImports || {};
      if (
        transformIconImportsOptions.enabled &&
        transformIconImportsOptions.paths?.some((p) => code.includes(p))
      ) {
        return transform(code, options);
      }
    },
  };
}

function isCapitalized(value: string) {
  return value[0].toUpperCase() === value[0];
}

function isMaterialStylesImport(value: string) {
  return (
    !["useMediaQuery"].includes(value) &&
    (["StyledEngineProvider", "Breakpoint", "ThemeProvider", "Theme"].includes(
      value
    ) ||
      !isCapitalized(value))
  );
}

type ImportData = {
  specifier: string | Record<string, string>;
  path: string;
};

function getOptimizedImportPath(
  source: string,
  name: string,
  alias: string
): ImportData {
  if (source === "@suid/material") {
    if (isMaterialStylesImport(name)) {
      return {
        specifier: {
          [name]: alias,
        },
        path: `${source}/styles`,
      };
    }
  }
  return {
    specifier: alias,
    path: `${source}/${name}`,
  };
}

export function transform(code: string, options: SuidPluginOptions) {
  const ast = parse(code, options.parserOptions);

  traverse(ast, {
    enter(path) {
      const { node } = path;

      const optimize =
        types.isImportDeclaration(node) &&
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options.optimizeImports!.paths!.some((v) => v === node.source.value);

      if (!optimize) return;

      const imports = node.specifiers
        .map((spec) => {
          if (
            types.isImportSpecifier(spec) &&
            types.isIdentifier(spec.imported) &&
            types.isIdentifier(spec.local)
          ) {
            return getOptimizedImportPath(
              node.source.value,
              spec.imported.name,
              spec.local.name
            );
          }
        })
        .filter((v) => !!v) as ImportData[];

      path.replaceWithMultiple(
        imports.map((item) =>
          types.importDeclaration(
            typeof item.specifier === "string"
              ? [types.importDefaultSpecifier(types.identifier(item.specifier))]
              : [
                  ...Object.entries(item.specifier).map(([alias, specifier]) =>
                    types.importSpecifier(
                      types.identifier(specifier),
                      types.identifier(alias)
                    )
                  ),
                ],
            types.stringLiteral(item.path)
          )
        )
      );
    },
  });

  return generate(ast);
}
