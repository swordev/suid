var a=Object.defineProperty;var t=(n,s)=>a(n,"name",{value:s,configurable:!0});import{A as r}from"./Alert-6536d19d.js";import{C as c}from"./ComponentInfo-e4c2edcd.js";import{S as o}from"./copyText-6fc3e7c5.js";import{d as e}from"./index-348f88e2.js";import"./Link-8d117d85.js";import"./PaperCode-884c7b1b.js";function i(){return e(o,{sx:{width:"100%"},spacing:2,get children(){return[e(r,{severity:"error",children:"This is an error alert — check it out!"}),e(r,{severity:"warning",children:"This is a warning alert — check it out!"}),e(r,{severity:"info",children:"This is an info alert — check it out!"}),e(r,{severity:"success",children:"This is a success alert — check it out!"})]}})}t(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}
`;function d(){return e(c,{get name(){return r.name},examples:[i]})}t(d,"AlertPage");export{d as default};
