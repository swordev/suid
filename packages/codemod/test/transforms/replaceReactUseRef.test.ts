//import { StringDecoder } from "string_decoder";
import findReactObjects from "../../src/navigations/findReactObjects";
import replaceReactUseRef from "../../src/transforms/replaceReactUseRef";
import format from "../format";
import transform from "../transform";
import { describe, expect, it } from "../vitest";

const t = (code: string) =>
  transform(code, [
    (source) =>
      findReactObjects(source, ["useRef"]).map((v) =>
        replaceReactUseRef(v.node)
      ),
  ]);

describe("replaceReactUseRef", () => {
  it("transforms to let", () => {
    expect(
      t(`
        import React from 'react';

        const topLevelRef = React.useRef(0)
        const
          topLevelNoRef1 = 1,
          topLevelRef2 = React.useRef("2"),
          topLevelNoRef3 = 3,
          topLevelRef4 = React.useRef([4]);

        export default function App() {
          const divRef = React.useRef<HTMLDivElement>(null)
          const divRefDefaultUndefined = React.useRef<HTMLDivElement>()
          const divRefDefaultString = React.useRef<HTMLDivElement>("asdf")
          const divRefDefaultNumber = React.useRef<HTMLDivElement>(123)
          const divRefDefaultTrue = React.useRef<HTMLDivElement>(true)
          const divRefDefaultFalse = React.useRef<HTMLDivElement>(false)
          console.log(divRef.current)
          const
            ref1 = React.useRef("1"),
            noref2 = "2",
            ref3 = React.useRef<number>(3),
            noref4 = 4,
            ref5 = React.useRef<number | null>(5),
            noref6 = 6;
          const
            ref7 = React.useRef<number | null | undefined>(7),
            ref8 = React.useRef(8);
          return (
            <div ref={divRef}>
              <h2>App</h2>
              <div ref={divRefDefaultUndefined}>divRefDefaultUndefined</div>
              <div>ref1.current = {ref1.current}</div>
              <div>ref3.current = {ref3.current}</div>
              <div>noref2 = {noref2}</div>
              <div>noref4 = {noref4}</div>
            </div>
          )
        }
      `)
    ).toMatchInlineSnapshot(`
      import React from "react";
      var topLevelRef = 0;
      var topLevelNoRef1 = 1;
      var topLevelRef2 = "2";
      var topLevelNoRef3 = 3;
      var topLevelRef4 = [4];
      export default function App() {
        var divRef: HTMLDivElement | null = null;
        var divRefDefaultUndefined: HTMLDivElement | undefined = undefined;
        var divRefDefaultString: HTMLDivElement | string = "asdf";
        var divRefDefaultNumber: HTMLDivElement | number = 123;
        var divRefDefaultTrue: HTMLDivElement | boolean = true;
        var divRefDefaultFalse: HTMLDivElement | boolean = false;
        console.log(divRef);
        var ref1 = "1";
        var noref2 = "2";
        var ref3: number = 3;
        var noref4 = 4;
        var ref5: number | null = 5;
        var noref6 = 6;
        var ref7: number | null | undefined = 7;
        var ref8 = 8;
        return (
          <div ref={divRef}>
            <h2>App</h2>
            <div ref={divRefDefaultUndefined}>divRefDefaultUndefined</div>
            <div>ref1.current = {ref1}</div>
            <div>ref3.current = {ref3}</div>
            <div>noref2 = {noref2}</div>
            <div>noref4 = {noref4}</div>
          </div>
        );
      }
    `);
  });
});
