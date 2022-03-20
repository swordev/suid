import{T as t}from"./index.ae27f545.js";import{P as r}from"./PaperCode.139f695a.js";import{d as n}from"./vendor.6d0a7b46.js";var o=`// @refresh
import Button from "@suid/material/Button";
import { render } from "solid-js/web";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, document.getElementById("root")!);
`;function l(){return[n(t,{component:"h1",variant:"h4",sx:{mt:1},children:"Usage"}),n(t,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Quick usage"}),n(r,{language:"tsx",get value(){return o.split(/\r?\n/).filter(e=>!e.trim().startsWith("// eslint-disable")).join(`
`)}})]}export{l as default};
