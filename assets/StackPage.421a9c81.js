var c=Object.defineProperty;var n=(t,m)=>c(t,"name",{value:m,configurable:!0});import{S as a}from"./copyText.ce384d40.js";import{C as i}from"./ComponentInfo.94932f37.js";import{r as p,a as e,t as s}from"./vendor.7d03e054.js";import{s as d,P as l}from"./index.575706a7.js";import"./Link.d3ce06b2.js";import"./PaperCode.2d840087.js";const u=s("<div></div>"),r=d(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function o(){return(()=>{const t=u.cloneNode(!0);return p(t,e(a,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(o,"BasicStack");o.code=`import Paper from "@suid/material/Paper";
import Stack from "@suid/material/Stack";
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
