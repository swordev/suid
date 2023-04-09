var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,b9 as n}from"./index-4edd6e97.js";import{C as c}from"./ComponentInfo-031a9ae7.js";import{S as m}from"./copyText-7d5196c4.js";import"./Link-c0b2074e.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import { Skeleton, Stack } from "@suid/material";

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
