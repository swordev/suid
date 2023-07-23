import renameMuiImports from "../../src/transforms/renameMuiImports.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (actual: string, expected: string) =>
  expect(await transform(actual, [renameMuiImports])).toBe(
    await format(expected)
  );

describe("renameMuiImports", () => {
  it("transforms mui imports", async () => {
    await e(
      "import Button from '@mui/material/Button'",
      "import Button from '@suid/material/Button'"
    );
  });
  it("transforms only one imports", async () => {
    await e(
      `
        import Button1 from '@mui/material/Button'
        import Button2 from 'thirdparty/material/Button'
      `,
      `
        import Button1 from '@suid/material/Button'
        import Button2 from 'thirdparty/material/Button'
      `
    );
  });
  it("keeps the import", async () => {
    await e(
      "import Button from 'thirdparty/material/Button'",
      "import Button from 'thirdparty/material/Button'"
    );
  });
  it("replaces by default import", async () => {
    await e(
      "import { any } from '@mui/base'",
      `import any from "@suid/base/any";`
    );
  });
  it("replaces by other module", async () => {
    await e(
      "import { isHostComponent } from '@mui/base'",
      `import isHostComponent from "@suid/base/utils/isHostComponent";`
    );
  });
});
