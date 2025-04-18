var a=Object.defineProperty;var r=(e,o)=>a(e,"name",{value:o,configurable:!0});import{L as i}from"./Link-Ci3uEOYa.js";import{h as t,k as n,P as m}from"./index-NCmNIr1K.js";import{P as s}from"./PaperCode-BKLbHUJT.js";import"./copyText-C_G9kHbS.js";const p=`// @refresh
import { Button } from "@suid/material";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

render(() => <App />, document.getElementById("root")!);
`;function h(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(i,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(s,{language:"tsx",get value(){return p.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(m,{sx:{mt:2}})]}r(h,"UsagePage");export{h as default};
