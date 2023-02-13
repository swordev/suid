var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{L as a}from"./Link-3859a10b.js";import{c as t,T as n}from"./ErrorPage-8beed0e1.js";import{P as m}from"./PageNav-c18acd6c.js";import{P as s}from"./PaperCode-74962817.js";import"./ListItemText-dfc8992a.js";import"./copyText-d95d75bf.js";import"./IconButton-0456b81e.js";import"./Paper-e344694e.js";import"./_commonjsHelpers-0119a68f.js";const p=`// @refresh
import { Button } from "@suid/material";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function y(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(a,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(s,{language:"tsx",get value(){return p.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(m,{sx:{mt:2}})]}r(y,"UsagePage");export{y as default};
