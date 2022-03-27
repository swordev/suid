var a=Object.defineProperty;var e=(t,o)=>a(t,"name",{value:o,configurable:!0});import{T as r,v as i}from"./index.ecd65d7c.js";import{P as s}from"./PaperCode.33519cb3.js";import{d as n}from"./vendor.5273475d.js";var l=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function c(){return[n(r,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),n(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),n(s,{language:"tsx",get value(){return l.split(/\r?\n/).filter(t=>!t.trim().startsWith("// eslint-disable")).join(`
`)}}),n(i,{sx:{mt:2}})]}e(c,"UsagePage");export{c as default};
