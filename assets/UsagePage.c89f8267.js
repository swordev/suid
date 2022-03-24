var a=Object.defineProperty;var e=(n,o)=>a(n,"name",{value:o,configurable:!0});import{T as r}from"./index.f8c435ad.js";import{P as i}from"./PageNav.b89c04b0.js";import{P as s}from"./PaperCode.7d7cfa10.js";import{d as t}from"./vendor.7f6460ea.js";import"./Grid.67791fa5.js";var m=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function g(){return[t(r,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(s,{language:"tsx",get value(){return m.split(/\r?\n/).filter(n=>!n.trim().startsWith("// eslint-disable")).join(`
`)}}),t(i,{sx:{mt:2}})]}e(g,"UsagePage");export{g as default};
