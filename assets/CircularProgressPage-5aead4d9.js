var n=Object.defineProperty;var e=(c,i)=>n(c,"name",{value:i,configurable:!0});import{C as o}from"./CircularProgress-6f240ec9.js";import{C as s}from"./ComponentInfo-1eac72a6.js";import{S as a}from"./copyText-dae2e1ef.js";import{c as r}from"./ErrorPage-eb59dadb.js";import"./ListItemText-be55e132.js";import"./Link-123f7416.js";import"./IconButton-c6b31999.js";import"./Paper-32f89a64.js";import"./PaperCode-b3aeccfd.js";import"./PageNav-652b02ba.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function w(){return r(s,{get name(){return o.name},docsName:"progress",examples:[t]})}e(w,"CircularProgressPage");export{w as default};
