var n=Object.defineProperty;var e=(c,i)=>n(c,"name",{value:i,configurable:!0});import{C as o}from"./CircularProgress-b52b5526.js";import{C as s}from"./ComponentInfo-d01e77a6.js";import{S as a}from"./copyText-9e269238.js";import{c as r}from"./ErrorPage-5efa7331.js";import"./ListItemText-7861bce7.js";import"./Link-b6cacc18.js";import"./IconButton-7ca039fe.js";import"./Paper-b94e5972.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

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
