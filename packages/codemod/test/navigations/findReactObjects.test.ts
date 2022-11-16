import findReactObjects from "../../src/navigations/findReactObjects";
import createProject from "../../src/utils/createProject";
//import { describe, expect, it } from "../vitest";
import { describe, expect, it } from "vitest";

// based on src/utils/applyTransforms.ts

const t = (input: string) => {
  const project = createProject();
  const sourceFile = project.createSourceFile("file.tsx", input, {
    overwrite: true,
  });
  console.log("sourceFile", sourceFile);
  const reactObjects = findReactObjects(sourceFile);
  console.log("reactObjects", reactObjects);
  return reactObjects.map(({ name, node }) => ({
    name,
    nodePos: node.getPos(),
  }));
};

describe("findReactObjects", () => {
  it("handles multiple react imports", () => {
    expect(
      t(`
        import * as React from "react";
        import { useState } from "react";
        var x = React.useEffect
        var x = useState
      `)
    ).toMatchInlineSnapshot(`
      [
        {
          "name": "useEffect",
          "nodePos": 105,
        },
        {
          "name": "useState",
          "nodePos": 130,
        },
      ]
    `);
  });
  it("handles multiple react imports with duplicates", () => {
    expect(
      t(`
        import * as React from "react";
        import { useState } from "react";
        var x = React.useState
        var x = useState
      `)
    ).toMatchInlineSnapshot(`
      [
        {
          "name": "useState",
          "nodePos": 105,
        },
        {
          "name": "useState",
          "nodePos": 129,
        },
      ]
    `);
  });
});
