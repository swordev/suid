var a=Object.defineProperty;var e=(n,o)=>a(n,"name",{value:o,configurable:!0});import{T as r}from"./index.d6a24491.js";import{P as i}from"./PaperCode.ca3f9047.js";import{d as t}from"./vendor.4f4857c8.js";var s=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function d(){return[t(r,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(i,{language:"tsx",get value(){return s.split(/\r?\n/).filter(n=>!n.trim().startsWith("// eslint-disable")).join(`
`)}})]}e(d,"UsagePage");export{d as default};
