import{S as r,C as o}from"./ComponentInfo.6103a8aa.js";import{t as m,d as e,v as i}from"./vendor.6d0a7b46.js";import{s as c,p}from"./index.ae27f545.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const s=i("<div></div>"),n=c(p)(({theme:t})=>({...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function a(){return(()=>{const t=s.cloneNode(!0);return m(t,e(r,{spacing:2,get children(){return[e(n,{children:"Item 1"}),e(n,{children:"Item 2"}),e(n,{children:"Item 3"})]}})),t})()}a.code=`import Paper from "@suid/material/Paper";
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
`;function y(){return e(o,{get name(){return r.name},examples:[a]})}export{y as default};
