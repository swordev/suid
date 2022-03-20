export type ShadowValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export type Shadows = {
  [value in ShadowValue]: string;
};

const cache: Record<string, string> = {};
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createCssShadow(...px: number[]) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`,
  ].join(",");
}

const shadows = [
  () => "none",
  () => createCssShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  () => createCssShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  () => createCssShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  () => createCssShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  () => createCssShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  () => createCssShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  () => createCssShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  () => createCssShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  () => createCssShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  () => createCssShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  () => createCssShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  () => createCssShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  () => createCssShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  () => createCssShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  () => createCssShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  () => createCssShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  () => createCssShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  () => createCssShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  () => createCssShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  () => createCssShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  () => createCssShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  () => createCssShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  () => createCssShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  () => createCssShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];

export function createShadows() {
  return new Proxy([], {
    get: (target, p) => {
      if (typeof p !== "string" || isNaN(Number(p))) return target[p as any];
      if (p in cache) return cache[p as string];
      return (cache[p as string] = shadows[p as any]());
    },
  }) as any as Shadows;
}
