var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-558a78e6.js";import{C as i}from"./ComponentInfo-bf8f3e44.js";import{S as a}from"./copyText-64309802.js";import{d as r}from"./index-2ade038b.js";import"./Link-b969f3af.js";import"./PaperCode-2146d787.js";import"./_commonjsHelpers-0119a68f.js";function n(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function P(){return r(i,{get name(){return o.name},docsName:"progress",examples:[n]})}e(P,"CircularProgressPage");export{P as default};
