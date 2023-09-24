var I=Object.defineProperty;var n=(t,s)=>I(t,"name",{value:s,configurable:!0});import{S as i}from"./copyText-676cc977.js";import{C as g}from"./ComponentInfo-b324653a.js";import{R as a,L as c,E as m,h as e,t as d,ai as u}from"./index-dcf73f67.js";import"./Link-1d61b786.js";import"./PaperCode-2aa6fb01.js";const f=d("<div>"),r=a(c)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function l(){return(()=>{const t=f();return m(t,e(i,{spacing:2,get children(){return[e(r,{children:"Item 1"}),e(r,{children:"Item 2"}),e(r,{children:"Item 3"})]}})),t})()}n(l,"BasicStack");l.code=`import { Paper, Stack } from "@suid/material";
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
`;const y=d("<div>"),o=a(c)(({theme:t})=>({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function p(){return(()=>{const t=y();return m(t,e(i,{direction:"row",get divider(){return e(u,{orientation:"vertical",flexItem:!0})},spacing:2,get children(){return[e(o,{children:"Item 1"}),e(o,{children:"Item 2"}),e(o,{children:"Item 3"})]}})),t})()}n(p,"DividerStack");p.code=`import { Divider, Paper, Stack } from "@suid/material";
import { styled } from "@suid/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
`;function A(){return e(g,{get name(){return i.name},examples:[{bgcolor:"contrasted",component:l},{bgcolor:"contrasted",title:"Dividers",component:p}]})}n(A,"StackPage");export{A as default};
