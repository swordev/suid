var n=Object.defineProperty;var e=(c,i)=>n(c,"name",{value:i,configurable:!0});import{C as o}from"./CircularProgress-a9bef537.js";import{C as s}from"./ComponentInfo-fec5820b.js";import{S as a}from"./copyText-d95d75bf.js";import{c as r}from"./ErrorPage-8beed0e1.js";import"./ListItemText-dfc8992a.js";import"./Link-3859a10b.js";import"./IconButton-0456b81e.js";import"./Paper-e344694e.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

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
