import renameMuiImports from "../../src/transforms/renameMuiImports";
import format from "../format";
import transform from "../transform";

const t = (code: string) => transform(code, [renameMuiImports]);

describe("renameMuiImports", () => {
  it("transforms mui imports", () => {
    expect(t("import Button from '@mui/material/Button'")).toBe(
      format("import Button from '@suid/material/Button'")
    );
  });
  it("transforms only one imports", () => {
    expect(
      t(`
        import Button1 from '@mui/material/Button'
        import Button2 from 'thirdparty/material/Button'
      `)
    ).toBe(
      format(`
        import Button1 from '@suid/material/Button'
        import Button2 from 'thirdparty/material/Button'
      `)
    );
  });
  it("keeps the import", () => {
    expect(t("import Button from 'thirdparty/material/Button'")).toBe(
      format("import Button from 'thirdparty/material/Button'")
    );
  });
  it("replaces by default import", () => {
    expect(t("import { any } from '@mui/base'")).toBe(
      format(`import any from "@suid/base/any";`)
    );
  });
  it("replaces by other module", () => {
    expect(t("import { isHostComponent } from '@mui/base'")).toBe(
      format(`import isHostComponent from "@suid/base/utils/isHostComponent";`)
    );
  });
});
