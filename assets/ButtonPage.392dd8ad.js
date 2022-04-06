var i=Object.defineProperty;var o=(e,r)=>i(e,"name",{value:r,configurable:!0});import{d as t,h as n}from"./index.a5663dcd.js";import{C as u}from"./ComponentInfo.04057912.js";import{S as c}from"./copyText.29c3a81d.js";import"./Link.b926d14d.js";import"./PaperCode.faf9fe6e.js";function a(){return t(c,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o(a,"BasicButtons");a.code=`import Button from "@suid/material/Button";
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
`;function f(){return t(u,{get name(){return n.name},docsName:"buttons",examples:[a]})}o(f,"ButtonPage");export{f as default};
