var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress.5e5c0aaf.js";import{C as a}from"./ComponentInfo.4db125cf.js";import{S as i}from"./copyText.f7152695.js";import{d as r}from"./index.587a1a49.js";import"./Link.687f6c0c.js";import"./PaperCode.04f8488e.js";function n(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
