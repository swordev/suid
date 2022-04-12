export function getDependencyName(name: string) {
  const ver = SUID_VERSIONS[name];
  return ver.includes("-") ? `${name}@${ver}` : name;
}
