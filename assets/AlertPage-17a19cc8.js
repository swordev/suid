var o=Object.defineProperty;var e=(n,s)=>o(n,"name",{value:s,configurable:!0});import{A as t}from"./Alert-69d419df.js";import{C as c}from"./ComponentInfo-ad863d1e.js";import{S as a}from"./copyText-cec38e2f.js";import{c as r}from"./ErrorPage-5efa7331.js";import"./IconButton-e9aa5297.js";import"./ListItemText-4b7359c5.js";import"./Paper-b94e5972.js";import"./Link-1858147a.js";import"./PaperCode-9e9dd566.js";import"./PageNav-421e26ff.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function i(){return r(a,{sx:{width:"100%"},spacing:2,get children(){return[r(t,{severity:"error",children:"This is an error alert — check it out!"}),r(t,{severity:"warning",children:"This is a warning alert — check it out!"}),r(t,{severity:"info",children:"This is an info alert — check it out!"}),r(t,{severity:"success",children:"This is a success alert — check it out!"})]}})}e(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

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
