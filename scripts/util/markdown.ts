export function markdownTable(
  header: { value: string; align?: "center" }[],
  bodyRows: string[][]
) {
  const rows = [header.map((h) => h.value), ...bodyRows];
  const lengths: number[] = [];

  for (let colIndex = 0; colIndex < header.length; ++colIndex) {
    let length = 0;
    for (let rowIndex = 0; rowIndex < rows.length; ++rowIndex) {
      const rowLength = rows[rowIndex][colIndex].length;
      if (rowLength > length) length = rowLength;
    }
    lengths.push(length);
  }

  const wrap = (v: string[]) => `| ${v.join(" | ")} |`;
  const dividerLine = wrap(
    header.map((v, colIndex) => {
      if (header[colIndex].align === "center") {
        return ":" + "-".repeat(Math.max(1, lengths[colIndex] - 2)) + ":";
      } else {
        return "-".repeat(lengths[colIndex]);
      }
    })
  );

  const [headerLine, ...rowLines] = rows.map((cols) =>
    wrap(cols.map((v, colIndex) => v.padEnd(lengths[colIndex], " ")))
  );

  return [headerLine, dividerLine, ...rowLines].join("\n");
}
