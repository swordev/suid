var t=Object.defineProperty;var e=(c,s)=>t(c,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress-2701a7f7.js";import{C as i}from"./ComponentInfo-1aac651c.js";import{S as a}from"./copyText-288aae3f.js";import{d as r}from"./index-d23866de.js";import"./Link-af594e99.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";function n(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(n,"CircularColor");n.code=`import { CircularProgress, Stack } from "@suid/material";

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
