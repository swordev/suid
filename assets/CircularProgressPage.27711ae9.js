var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress.b13e3283.js";import{C as a}from"./ComponentInfo.6ce91a5c.js";import{S as i}from"./copyText.f0626c1f.js";import{d as r}from"./index.28506464.js";import"./Link.d0d1f610.js";import"./PaperCode.4d4bb9ba.js";function n(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function f(){return r(a,{get name(){return o.name},docsName:"progress",examples:[n]})}e(f,"CircularProgressPage");export{f as default};
