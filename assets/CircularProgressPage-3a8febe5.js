var n=Object.defineProperty;var e=(c,i)=>n(c,"name",{value:i,configurable:!0});import{C as o}from"./CircularProgress-86a02191.js";import{C as s}from"./ComponentInfo-866f98ce.js";import{S as a}from"./copyText-0585a785.js";import{c as r}from"./ErrorPage-899a3c74.js";import"./ListItemText-6803f35f.js";import"./Link-a8ec2a4e.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

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
