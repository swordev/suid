var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{L as a}from"./Link-89c3f0b3.js";import{c as t,T as n}from"./ErrorPage-7e24a11e.js";import{P as s}from"./PageNav-9ce4881d.js";import{P as m}from"./PaperCode-386a1ad7.js";import"./ListItemText-97540f66.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";const p=`// @refresh
import { Button } from "@suid/material";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function v(){return[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),t(n,{variant:"body1",sx:{mt:2},get children(){return["For a completed usage guide, please go to"," ",t(a,{href:"https://mui.com",target:"_blank",children:"MUI"}),"."]}}),t(n,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),t(m,{language:"tsx",get value(){return p.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}}),t(s,{sx:{mt:2}})]}r(v,"UsagePage");export{v as default};
