var a=Object.defineProperty;var r=(e,o)=>a(e,"name",{value:o,configurable:!0});import{L as i}from"./Link.687f6c0c.js";import{d as t,T as n,_ as s}from"./index.587a1a49.js";import{P as l}from"./PaperCode.04f8488e.js";import"./copyText.f7152695.js";const m=`// @refresh
import { Button } from "@suid/material";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function h(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(i,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(l,{language:"tsx",get value(){return m.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(s,{sx:{mt:2}})]}r(h,"UsagePage");export{h as default};
