var i=Object.defineProperty;var n=(t,m)=>i(t,"name",{value:m,configurable:!0});import{S as o}from"./copyText-fe3f5d44.js";import{C as c}from"./ComponentInfo-fb88dbff.js";import{O as p,P as s,c as e,t as d}from"./ErrorPage-7e24a11e.js";import{P as l}from"./Paper-355f0f45.js";import"./ListItemText-97540f66.js";import"./Link-89c3f0b3.js";import"./IconButton-72e073de.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const I=d("<div></div>"),r=p(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function a(){return(()=>{const t=I.cloneNode(!0);return s(t,e(o,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(a,"BasicStack");a.code=`import { Paper, Stack } from "@suid/material";
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
`;function A(){return e(c,{get name(){return o.name},examples:[{bgcolor:"contrasted",component:a}]})}n(A,"StackPage");export{A as default};
