var a=Object.defineProperty;var e=(t,o)=>a(t,"name",{value:o,configurable:!0});import{T as r}from"./index.52e9424c.js";import{P as i}from"./PageNav.95afb7be.js";import{P as s}from"./PaperCode.35ccd2d7.js";import{d as n}from"./vendor.7f6460ea.js";var m=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function f(){return[n(r,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),n(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),n(s,{language:"tsx",get value(){return m.split(/\r?\n/).filter(t=>!t.trim().startsWith("// eslint-disable")).join(`
`)}}),n(i,{sx:{mt:2}})]}e(f,"UsagePage");export{f as default};
