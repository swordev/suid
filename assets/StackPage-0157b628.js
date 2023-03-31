var i=Object.defineProperty;var n=(t,a)=>i(t,"name",{value:a,configurable:!0});import{S as o}from"./copyText-0585a785.js";import{C as c}from"./ComponentInfo-866f98ce.js";import{R as p,U as s,c as e,t as d}from"./ErrorPage-899a3c74.js";import{P as l}from"./Paper-c50e815b.js";import"./ListItemText-6803f35f.js";import"./Link-a8ec2a4e.js";import"./IconButton-9bf679c9.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const I=d("<div></div>",2),r=p(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function m(){return(()=>{const t=I.cloneNode(!0);return s(t,e(o,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(m,"BasicStack");m.code=`import { Paper, Stack } from "@suid/material";
import styled from "@suid/material/styles/styled";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
`;function B(){return e(c,{get name(){return o.name},examples:[{bgcolor:"contrasted",component:m}]})}n(B,"StackPage");export{B as default};
