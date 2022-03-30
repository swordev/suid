var i=Object.defineProperty;var o=(r,e)=>i(r,"name",{value:e,configurable:!0});import{d as n}from"./index.c57144ef.js";import{C as u}from"./ComponentInfo.f7f7392b.js";import{S as c}from"./copyText.1fa6c8bf.js";import{a as t}from"./vendor.7d03e054.js";import"./Link.a158817a.js";import"./PaperCode.71992af9.js";function a(){return t(c,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o(a,"BasicButtons");a.code=`import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
`;function x(){return t(u,{get name(){return n.name},docsName:"buttons",examples:[a]})}o(x,"ButtonPage");export{x as default};
