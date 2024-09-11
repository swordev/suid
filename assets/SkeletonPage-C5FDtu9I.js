var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{h as t,y as n}from"./index-96nJ5ebr.js";import{C as c}from"./ComponentInfo-BBEqkhk-.js";import{S as m}from"./copyText-D9OMJUeU.js";import"./Link-BFVZF50d.js";import"./PaperCode-BS9cYccI.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import { Skeleton, Stack } from "@suid/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function S(){return t(c,{get name(){return n.name},examples:[a]})}e(S,"SkeletonPage");export{S as default};
