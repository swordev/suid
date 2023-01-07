var o=Object.defineProperty;var e=(n,s)=>o(n,"name",{value:s,configurable:!0});import{A as t}from"./Alert-8317057c.js";import{C as c}from"./ComponentInfo-fb88dbff.js";import{S as a}from"./copyText-fe3f5d44.js";import{c as r}from"./ErrorPage-7e24a11e.js";import"./IconButton-72e073de.js";import"./ListItemText-97540f66.js";import"./Paper-355f0f45.js";import"./Link-89c3f0b3.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function i(){return r(a,{sx:{width:"100%"},spacing:2,get children(){return[r(t,{severity:"error",children:"This is an error alert — check it out!"}),r(t,{severity:"warning",children:"This is a warning alert — check it out!"}),r(t,{severity:"info",children:"This is an info alert — check it out!"}),r(t,{severity:"success",children:"This is a success alert — check it out!"})]}})}e(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

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
`;function w(){return r(c,{get name(){return t.name},examples:[i]})}e(w,"AlertPage");export{w as default};
