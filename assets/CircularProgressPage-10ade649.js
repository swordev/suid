var n=Object.defineProperty;var e=(c,i)=>n(c,"name",{value:i,configurable:!0});import{C as o}from"./CircularProgress-b52b5526.js";import{C as s}from"./ComponentInfo-91f42892.js";import{S as a}from"./copyText-47aa0270.js";import{c as r}from"./ErrorPage-5efa7331.js";import"./ListItemText-a46102d3.js";import"./Link-bbcecfa2.js";import"./IconButton-4b14ca52.js";import"./Paper-b94e5972.js";import"./PaperCode-7dd2d056.js";import"./PageNav-f0077685.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-7d64fa3f.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

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
