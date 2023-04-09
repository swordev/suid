var a=Object.defineProperty;var t=(n,s)=>a(n,"name",{value:s,configurable:!0});import{A as r}from"./Alert-51ea1bf9.js";import{C as c}from"./ComponentInfo-031a9ae7.js";import{S as o}from"./copyText-7d5196c4.js";import{d as e}from"./index-4edd6e97.js";import"./Link-c0b2074e.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function i(){return e(o,{sx:{width:"100%"},spacing:2,get children(){return[e(r,{severity:"error",children:"This is an error alert — check it out!"}),e(r,{severity:"warning",children:"This is a warning alert — check it out!"}),e(r,{severity:"info",children:"This is an info alert — check it out!"}),e(r,{severity:"success",children:"This is a success alert — check it out!"})]}})}t(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

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
`;function k(){return e(c,{get name(){return r.name},examples:[i]})}t(k,"AlertPage");export{k as default};
