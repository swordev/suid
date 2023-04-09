var c=Object.defineProperty;var n=(t,m)=>c(t,"name",{value:m,configurable:!0});import{S as a}from"./copyText-7d5196c4.js";import{C as i}from"./ComponentInfo-031a9ae7.js";import{X as p,P as s,x as d,d as e,e as l}from"./index-4edd6e97.js";import"./Link-c0b2074e.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";const I=l("<div>"),r=p(s)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function o(){return(()=>{const t=I();return d(t,e(a,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(o,"BasicStack");o.code=`import { Paper, Stack } from "@suid/material";
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
`;function k(){return e(i,{get name(){return a.name},examples:[{bgcolor:"contrasted",component:o}]})}n(k,"StackPage");export{k as default};
