var i=Object.defineProperty;var n=(t,a)=>i(t,"name",{value:a,configurable:!0});import{S as o}from"./copyText-44d22b15.js";import{C as c}from"./ComponentInfo-5876f613.js";import{R as p,U as s,c as e,t as d}from"./ErrorPage-e9c3e4c4.js";import{P as l}from"./Paper-154b1d70.js";import"./ListItemText-7ae6925f.js";import"./Link-0694c7ad.js";import"./IconButton-ff730f99.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const I=d("<div></div>",2),r=p(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function m(){return(()=>{const t=I.cloneNode(!0);return s(t,e(o,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(m,"BasicStack");m.code=`import { Paper, Stack } from "@suid/material";
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
