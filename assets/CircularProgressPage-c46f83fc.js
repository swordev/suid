var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-685882f2.js";import{C as a}from"./ComponentInfo-e4c2edcd.js";import{S as i}from"./copyText-6fc3e7c5.js";import{d as r}from"./index-348f88e2.js";import"./Link-8d117d85.js";import"./PaperCode-884c7b1b.js";function n(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
