import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactUseEffect, {
  ReplaceReactUseEffectOptions,
} from "../../src/transforms/replaceReactUseEffect.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const e = async (
  code: string,
  expected: string,
  options?: ReplaceReactUseEffectOptions
) =>
  expect(
    await transform(code, [
      (source) =>
        findReactObjects(source, ["useEffect"]).map((v) =>
          replaceReactUseEffect(v.node, options)
        ),
    ])
  ).toBe(await format(expected));

describe("replaceReactUseEffect", () => {
  it("transforms by createEffect", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {})
      `,
      `
        import * as React from "react";
        import { createEffect } from "solid-js";
        createEffect(() => {})
      `
    );
  });
  it("transforms by createEffectWithCleaning", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {
          console.log('effect');
          return function() { console.log('cleanup') }
        }, [a])
      `,
      `
      import * as React from "react";
      import createEffectWithCleaning from "@suid/system/createEffectWithCleaning";
      createEffectWithCleaning(
        on(
          () => [a],
          () => {
            console.log('effect');
            return function() { console.log('cleanup') }
          }
        )
      )
    `
    );
  });
  it("transforms by onMount", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {}, [])
      `,
      `
        import * as React from "react";
        import { onMount } from "solid-js";
        onMount(() => {})
    `
    );
  });
  it("transforms by onMountWithCleaning", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {
          console.log('effect');
          return () => console.log('cleanup')
        }, [])
      `,
      `
        import * as React from "react";
        import onMountWithCleaning from "@suid/system/onMountWithCleaning";
        onMountWithCleaning(() => {
          console.log('effect');
          return () => console.log('cleanup')
        })
      `
    );
  });
  it("transforms by createEffect without dependencies", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {
          console.log('effect');
        }, [a, b, c])
      `,
      `
        import * as React from "react";
        import { createEffect } from "solid-js";
        createEffect(() => {
          console.log('effect');
        })
      `,
      {
        removeDependencies: true,
      }
    );
  });
  it("transforms by onCleanup", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {
          return () => console.log('cleanup');
        }, [])
      `,
      `
        import * as React from "react";
        import { onCleanup } from "solid-js";
        onCleanup(() => console.log('cleanup'))
      `
    );
  });
  it("transforms by createRenderEffect", async () => {
    await e(
      `
        import * as React from "react";
        React.useEffect(() => {
          console.log("effect")
        }, [a])
      `,
      `
        import * as React from "react";
        import { createRenderEffect } from "solid-js";
        createRenderEffect(() => {
          console.log('effect')
        })
      `,
      {
        functionName: "createRenderEffect",
        removeDependencies: true,
      }
    );
  });
});
