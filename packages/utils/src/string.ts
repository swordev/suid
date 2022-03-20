export function snakeCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function capitalize(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

export function uncapitalize(value: string) {
  return value[0].toLowerCase() + value.slice(1);
}
