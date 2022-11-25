import findReactObjects from "../../src/navigations/findReactObjects.js";
import replaceReactUseEffect, {
  ReplaceReactUseEffectOptions,
} from "../../src/transforms/replaceReactUseEffect.js";
import format from "../format.js";
import transform from "../transform.js";
import { describe, expect, it } from "vitest";

const t = (code: string, options?: ReplaceReactUseEffectOptions) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["useEffect"]).map((v) =>
        replaceReactUseEffect(v.node, options)
      ),
  ]);

describe("replaceReactUseEffect", () => {
  it("transforms by createEffect", () => {
    expect(
      t(`
        import * as React from "react";
        React.useEffect(() => {})
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import { createEffect } from "solid-js";
        createEffect(() => {})
      `)
    );
  });
  it("transforms by createEffectWithCleaning", () => {
    expect(
      t(`
        import * as React from "react";
        React.useEffect(() => {
          console.log('effect');
          return function() { console.log('cleanup') }
        }, [a])
      `)
    ).toBe(
      format(`
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
      `)
    );
  });
  it("transforms by onMount", () => {
    expect(
      t(`
        import * as React from "react";
        React.useEffect(() => {}, [])
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import { onMount } from "solid-js";
        onMount(() => {})
      `)
    );
  });
  it("transforms by onMountWithCleaning", () => {
    expect(
      t(`
        import * as React from "react";
        React.useEffect(() => {
          console.log('effect');
          return () => console.log('cleanup')
        }, [])
      `)
    ).toBe(
      format(`
        import * as React from "react";
        import onMountWithCleaning from "@suid/system/onMountWithCleaning";
        onMountWithCleaning(() => {
          console.log('effect');
          return () => console.log('cleanup')
        })
      `)
    );
  });
  it("transforms by createEffect without dependencies", () => {
    expect(
      t(
        `
        import * as React from "react";
        React.useEffect(() => {
          console.log('effect');
        }, [a, b, c])
      `,
        {
          removeDependencies: true,
        }
      )
    ).toBe(
      format(`
        import * as React from "react";
        import { createEffect } from "solid-js";
        createEffect(() => {
          console.log('effect');
        })
      `)
    );
  });
  it("transforms by onCleanup", () => {
    expect(
      t(
        `
        import * as React from "react";
        React.useEffect(() => {
          return () => console.log('cleanup');
        }, [])
      `
      )
    ).toBe(
      format(`
        import * as React from "react";
        import { onCleanup } from "solid-js";
        onCleanup(() => console.log('cleanup'))
      `)
    );
  });
  it("transforms by createRenderEffect", () => {
    expect(
      t(
        `
        import * as React from "react";
        React.useEffect(() => {
          console.log("effect")
        }, [a])
      `,
        {
          functionName: "createRenderEffect",
          removeDependencies: true,
        }
      )
    ).toBe(
      format(`
        import * as React from "react";
        import { createRenderEffect } from "solid-js";
        createRenderEffect(() => {
          console.log('effect')
        })
      `)
    );
  });
});
