var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{L as a}from"./Link-a8ec2a4e.js";import{c as t,T as n}from"./ErrorPage-899a3c74.js";import{P as m}from"./PageNav-ed290099.js";import{P as s}from"./PaperCode-789d0c94.js";import"./ListItemText-6803f35f.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./_commonjsHelpers-0119a68f.js";const p=`// @refresh
import { Button } from "@suid/material";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function y(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(a,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(s,{language:"tsx",get value(){return p.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(m,{sx:{mt:2}})]}r(y,"UsagePage");export{y as default};
