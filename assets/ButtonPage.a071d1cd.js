var i=Object.defineProperty;var o=(a,e)=>i(a,"name",{value:e,configurable:!0});import{d as n}from"./index.52e9424c.js";import{C as u}from"./ComponentInfo.4a323a22.js";import{S as c}from"./copyText.fb75f941.js";import{d as t}from"./vendor.7f6460ea.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";function r(){return t(c,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o(r,"BasicButtons");r.code=`import Button from "@suid/material/Button";
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
`;function x(){return t(u,{get name(){return n.name},docsName:"buttons",examples:[r]})}o(x,"ButtonPage");export{x as default};
