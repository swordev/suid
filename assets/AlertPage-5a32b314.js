var o=Object.defineProperty;var e=(n,s)=>o(n,"name",{value:s,configurable:!0});import{A as t}from"./Alert-4f0ad5ac.js";import{C as c}from"./ComponentInfo-d01e77a6.js";import{S as a}from"./copyText-9e269238.js";import{c as r}from"./ErrorPage-5efa7331.js";import"./IconButton-7ca039fe.js";import"./ListItemText-7861bce7.js";import"./Paper-b94e5972.js";import"./Link-b6cacc18.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function i(){return r(a,{sx:{width:"100%"},spacing:2,get children(){return[r(t,{severity:"error",children:"This is an error alert — check it out!"}),r(t,{severity:"warning",children:"This is a warning alert — check it out!"}),r(t,{severity:"info",children:"This is an info alert — check it out!"}),r(t,{severity:"success",children:"This is a success alert — check it out!"})]}})}e(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

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
`;function x(){return r(c,{get name(){return t.name},examples:[i]})}e(x,"AlertPage");export{x as default};
