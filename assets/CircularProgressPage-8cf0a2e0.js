var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-be5b1a01.js";import{C as i}from"./ComponentInfo-62712aad.js";import{S as a}from"./copyText-bcdf63f6.js";import{d as r}from"./index-02d32149.js";import"./Link-11e90053.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";function n(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
