var i=Object.defineProperty;var o=(a,e)=>i(a,"name",{value:e,configurable:!0});import{d as n}from"./index.f8c435ad.js";import{C as u}from"./ComponentInfo.056394a0.js";import{S as c}from"./copyText.f8718ad2.js";import{d as t}from"./vendor.7f6460ea.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";import"./Grid.67791fa5.js";function r(){return t(c,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o(r,"BasicButtons");r.code=`import Button from "@suid/material/Button";
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
`;function v(){return t(u,{get name(){return n.name},docsName:"buttons",examples:[r]})}o(v,"ButtonPage");export{v as default};
