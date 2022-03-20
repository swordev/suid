import{d as n}from"./index.ae27f545.js";import{S as a,C as e}from"./ComponentInfo.6103a8aa.js";import{d as t}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function o(){return t(a,{spacing:2,direction:"row",get children(){return[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]}})}o.code=`import Button from "@suid/material/Button";
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
`;function m(){return t(e,{get name(){return n.name},docsName:"buttons",examples:[o]})}export{m as default};
