var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-f5c8fe4b.js";import{C as a}from"./ComponentInfo-68714048.js";import{S as i}from"./copyText-e97058d2.js";import{d as r}from"./index-2f74ebef.js";import"./Link-5d1cdde5.js";import"./PaperCode-9c99fcf6.js";function n(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
