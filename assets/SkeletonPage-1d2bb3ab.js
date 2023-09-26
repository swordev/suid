var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{h as t,y as n}from"./index-5ff6d9be.js";import{C as c}from"./ComponentInfo-3547844d.js";import{S as m}from"./copyText-525d45c6.js";import"./Link-4d633cf7.js";import"./PaperCode-4f370aa8.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import { Skeleton, Stack } from "@suid/material";

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
