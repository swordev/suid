var c=Object.defineProperty;var n=(t,m)=>c(t,"name",{value:m,configurable:!0});import{S as a}from"./copyText.2d7a9d56.js";import{C as i}from"./ComponentInfo.3840199b.js";import{x as s,P as p,a6 as d,d as e,t as l}from"./index.41b0e3d9.js";import"./Link.99ddcb16.js";import"./PaperCode.ca66f3be.js";const I=l("<div></div>"),r=s(p)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function o(){return(()=>{const t=I.cloneNode(!0);return d(t,e(a,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(o,"BasicStack");o.code=`import { Paper, Stack } from "@suid/material";
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
`;function S(){return e(i,{get name(){return a.name},examples:[{bgcolor:"contrasted",component:o}]})}n(S,"StackPage");export{S as default};
