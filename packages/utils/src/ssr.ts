export type SSRElement = { t: string };

export function isSSRElement(input: unknown): input is SSRElement {
  return (
    !!input &&
    typeof input === "object" &&
    "t" in input &&
    typeof input.t === "string" &&
    /^<[a-z]/i.test(input.t.trimStart())
  );
}

export function parseSSRElementAttr(
  html: string,
  attr: string
): { tag: { end: number }; attr?: { start: number; end: number } } {
  const tagEnd = html.indexOf(">");
  if (tagEnd === -1) throw new Error("Invalid SSR element");

  const tag = { end: tagEnd };
  const element = html.slice(0, tagEnd);
  const startAttrPattern = ` ${attr}="`;
  const startAttrIndex = element.indexOf(startAttrPattern);

  if (startAttrIndex !== -1) {
    const start = startAttrIndex + startAttrPattern.length;
    const length = element.slice(start).indexOf('"');
    if (length !== -1)
      return {
        tag,
        attr: {
          start,
          end: start + length,
        },
      };
  }

  return { tag };
}

export function getSSRElementAttr(
  html: string,
  attr: string
): string | undefined {
  const index = parseSSRElementAttr(html, attr);
  if (index.attr) {
    return html.slice(index.attr.start, index.attr.end);
  }
}

export function setSSRElementAttr(
  element: SSRElement,
  name: string,
  value: string | ((prev: string | undefined) => string)
) {
  const html = element.t;
  const index = parseSSRElementAttr(html, name);
  const resolveValue = (input?: string) =>
    typeof value === "function" ? value(input) : value;

  if (index.attr) {
    element.t =
      html.slice(0, index.attr.start) +
      resolveValue(html.slice(index.attr.start, index.attr.end)) +
      html.slice(index.attr.end);
  } else {
    element.t =
      html.slice(0, index.tag.end) +
      ` ${name}="${resolveValue()}"` +
      html.slice(index.tag.end);
  }
}
