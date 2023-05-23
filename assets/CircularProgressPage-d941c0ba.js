var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-c69ef2a5.js";import{C as a}from"./ComponentInfo-c32346de.js";import{S as i}from"./copyText-d7b508be.js";import{d as r}from"./index-570dda9b.js";import"./Link-4c8cf3cb.js";import"./PaperCode-1953c3c7.js";function n(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
