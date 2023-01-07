var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{L as a}from"./Link-eef663fe.js";import{c as t,T as n}from"./ErrorPage-ac5239e5.js";import{P as s}from"./PageNav-1c02f791.js";import{P as m}from"./PaperCode-dcb3e6cd.js";import"./ListItemText-f1fd78c0.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";const p=`// @refresh
import { Button } from "@suid/material";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function v(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(a,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(m,{language:"tsx",get value(){return p.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(s,{sx:{mt:2}})]}r(v,"UsagePage");export{v as default};
