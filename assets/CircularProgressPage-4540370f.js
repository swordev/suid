var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-b1bd925c.js";import{C as i}from"./ComponentInfo-031a9ae7.js";import{S as a}from"./copyText-7d5196c4.js";import{d as r}from"./index-4edd6e97.js";import"./Link-c0b2074e.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function n(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
