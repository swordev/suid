var o=Object.defineProperty;var a=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,aY as n}from"./index-02d32149.js";import{C as c}from"./ComponentInfo-62712aad.js";import{S as m}from"./copyText-bcdf63f6.js";import"./Link-11e90053.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";function e(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}a(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function d(){return t(c,{get name(){return n.name},examples:[e]})}a(d,"SkeletonPage");export{d as default};
