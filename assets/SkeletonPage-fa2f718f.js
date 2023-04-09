var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,b9 as n}from"./index-d23866de.js";import{C as c}from"./ComponentInfo-1aac651c.js";import{S as m}from"./copyText-288aae3f.js";import"./Link-af594e99.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import { Skeleton, Stack } from "@suid/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function d(){return t(c,{get name(){return n.name},examples:[a]})}e(d,"SkeletonPage");export{d as default};
