import { describe, expect, it } from "vitest";
export { describe, expect, it };

// dont escape string snapshots
// https://github.com/vitest-dev/vitest/issues/2339
// see also patches/vitest+0.25.2.patch

expect.addSnapshotSerializer({
  serialize(val) {
    return val
  },
  test(val) {
    return (typeof val == "string")
  },
})
