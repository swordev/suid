var i=Object.defineProperty;var n=(t,a)=>i(t,"name",{value:a,configurable:!0});import{S as o}from"./copyText-60efa3b1.js";import{C as c}from"./ComponentInfo-8409ab48.js";import{R as p,U as s,c as e,t as d}from"./ErrorPage-8328033b.js";import{P as l}from"./Paper-a16bc6e4.js";import"./ListItemText-2a1d0b71.js";import"./Link-84ba8a82.js";import"./IconButton-220611a6.js";import"./PaperCode-fb6e5c62.js";import"./PageNav-3f6af208.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const I=d("<div></div>",2),r=p(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function m(){return(()=>{const t=I.cloneNode(!0);return s(t,e(o,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(m,"BasicStack");m.code=`import { Paper, Stack } from "@suid/material";
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
