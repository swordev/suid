const colors = { cyan: 36, yellow: 33 };

export default function colorize(
  text: string,
  color: "cyan" | "yellow" = "cyan"
) {
  const colorCode = colors[color];
  return `\x1b[${colorCode}m${text}\x1b[0m`;
}
