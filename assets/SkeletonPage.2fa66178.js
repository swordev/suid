var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,O as n}from"./index.a5663dcd.js";import{C as c}from"./ComponentInfo.04057912.js";import{S as m}from"./copyText.29c3a81d.js";import"./Link.b926d14d.js";import"./PaperCode.faf9fe6e.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import Skeleton from "@suid/material/Skeleton";
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
