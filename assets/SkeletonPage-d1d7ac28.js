var o=Object.defineProperty;var a=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,aZ as n}from"./index-348f88e2.js";import{C as c}from"./ComponentInfo-e4c2edcd.js";import{S as m}from"./copyText-6fc3e7c5.js";import"./Link-8d117d85.js";import"./PaperCode-884c7b1b.js";function e(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}a(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function S(){return t(c,{get name(){return n.name},examples:[e]})}a(S,"SkeletonPage");export{S as default};
