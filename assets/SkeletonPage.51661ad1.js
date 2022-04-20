var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,O as n}from"./index.f066d7c4.js";import{C as c}from"./ComponentInfo.7775a3fa.js";import{S as m}from"./copyText.9e62f2b8.js";import"./Link.17fad16b.js";import"./PaperCode.c3bb63a6.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import Skeleton from "@suid/material/Skeleton";
import Stack from "@suid/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function s(){return t(c,{get name(){return n.name},examples:[a]})}e(s,"SkeletonPage");export{s as default};
