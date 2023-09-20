var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,b1 as n}from"./index-4f3845ca.js";import{C as c}from"./ComponentInfo-f2cce80d.js";import{S as m}from"./copyText-6c23f4c9.js";import"./Link-104b46b3.js";import"./PaperCode-014a11cb.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import { Skeleton, Stack } from "@suid/material";

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
