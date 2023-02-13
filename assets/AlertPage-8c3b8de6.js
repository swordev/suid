var o=Object.defineProperty;var e=(n,s)=>o(n,"name",{value:s,configurable:!0});import{A as t}from"./Alert-c3386bdd.js";import{C as c}from"./ComponentInfo-fec5820b.js";import{S as a}from"./copyText-d95d75bf.js";import{c as r}from"./ErrorPage-8beed0e1.js";import"./IconButton-0456b81e.js";import"./ListItemText-dfc8992a.js";import"./Paper-e344694e.js";import"./Link-3859a10b.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function i(){return r(a,{sx:{width:"100%"},spacing:2,get children(){return[r(t,{severity:"error",children:"This is an error alert — check it out!"}),r(t,{severity:"warning",children:"This is a warning alert — check it out!"}),r(t,{severity:"info",children:"This is an info alert — check it out!"}),r(t,{severity:"success",children:"This is a success alert — check it out!"})]}})}e(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

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
