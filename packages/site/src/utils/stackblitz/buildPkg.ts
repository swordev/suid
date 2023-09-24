import pkgFile from "./template/package.json?raw";

type Pkg = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

export default function buildPkg(
  options: {
    appCode?: string;
  } = {}
) {
  const pkg: Pkg = JSON.parse(pkgFile);

  if (pkg.dependencies)
    for (const name in pkg.dependencies) {
      pkg.dependencies[name] = SUID_VERSIONS[name] || "*";
    }

  if (pkg.devDependencies)
    for (const name in pkg.devDependencies) {
      pkg.devDependencies[name] = SUID_VERSIONS[name] || "*";
    }

  if (pkg.peerDependencies)
    for (const name in pkg.peerDependencies) {
      pkg.peerDependencies[name] = SUID_VERSIONS[name] || "*";
    }

  pkg.dependencies = {
    ...(pkg.dependencies || {}),
    ...SUID_PKG_NAMES.reduce(
      (result, name) => {
        if (options.appCode?.includes(name))
          result[name] = SUID_VERSIONS[name] || "*";
        return result;
      },
      {} as Record<string, string>
    ),
  };
  return pkg;
}
