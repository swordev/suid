var o=Object.defineProperty;var e=(n,s)=>o(n,"name",{value:s,configurable:!0});import{A as t}from"./Alert-362eaf8a.js";import{C as c}from"./ComponentInfo-3f416a39.js";import{S as a}from"./copyText-13339847.js";import{c as r}from"./ErrorPage-ac5239e5.js";import"./IconButton-1112bc6d.js";import"./ListItemText-f1fd78c0.js";import"./Paper-3e60930a.js";import"./Link-eef663fe.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function i(){return r(a,{sx:{width:"100%"},spacing:2,get children(){return[r(t,{severity:"error",children:"This is an error alert — check it out!"}),r(t,{severity:"warning",children:"This is a warning alert — check it out!"}),r(t,{severity:"info",children:"This is an info alert — check it out!"}),r(t,{severity:"success",children:"This is a success alert — check it out!"})]}})}e(i,"BasicAlerts");i.code=`import { Alert, Stack } from "@suid/material";

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
