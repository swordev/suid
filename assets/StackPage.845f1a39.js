var i=Object.defineProperty;var n=(t,m)=>i(t,"name",{value:m,configurable:!0});import{S as a}from"./copyText.9135cd54.js";import{C as c}from"./ComponentInfo.fcf1cc11.js";import{r as s,d as e,t as p}from"./vendor.5273475d.js";import{s as d,w as l}from"./index.c7352f5d.js";import"./PaperCode.7eea3671.js";const u=p("<div></div>"),r=d(l)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function o(){return(()=>{const t=u.cloneNode(!0);return s(t,e(a,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(o,"BasicStack");o.code=`import Paper from "@suid/material/Paper";
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
`;function k(){return e(c,{get name(){return a.name},examples:[o]})}n(k,"StackPage");export{k as default};
