var c=Object.defineProperty;var n=(t,m)=>c(t,"name",{value:m,configurable:!0});import{S as a}from"./copyText-bcdf63f6.js";import{C as i}from"./ComponentInfo-62712aad.js";import{Q as p,P as s,w as d,d as e,t as l}from"./index-02d32149.js";import"./Link-11e90053.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";const I=l("<div>"),r=p(s)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function o(){return(()=>{const t=I();return d(t,e(a,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(o,"BasicStack");o.code=`import { Paper, Stack } from "@suid/material";
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
`;function x(){return e(i,{get name(){return a.name},examples:[{bgcolor:"contrasted",component:o}]})}n(x,"StackPage");export{x as default};
