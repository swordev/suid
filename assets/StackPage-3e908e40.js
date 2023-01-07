var i=Object.defineProperty;var n=(t,m)=>i(t,"name",{value:m,configurable:!0});import{S as o}from"./copyText-13339847.js";import{C as c}from"./ComponentInfo-3f416a39.js";import{O as p,P as s,c as e,t as d}from"./ErrorPage-ac5239e5.js";import{P as l}from"./Paper-3e60930a.js";import"./ListItemText-f1fd78c0.js";import"./Link-eef663fe.js";import"./IconButton-1112bc6d.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";const I=d("<div></div>"),r=p(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function a(){return(()=>{const t=I.cloneNode(!0);return s(t,e(o,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(a,"BasicStack");a.code=`import { Paper, Stack } from "@suid/material";
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
