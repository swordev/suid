var i=Object.defineProperty;var o=(r,e)=>i(r,"name",{value:e,configurable:!0});import{d as n}from"./index.46c6e864.js";import{C as u}from"./ComponentInfo.93772529.js";import{S as c}from"./copyText.be5726eb.js";import{a as t}from"./vendor.37d14b95.js";import"./Link.dc0b269f.js";import"./PaperCode.b67ee88b.js";function a(){return t(c,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o(a,"BasicButtons");a.code=`import Button from "@suid/material/Button";
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
