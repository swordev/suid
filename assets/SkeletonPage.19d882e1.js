var o=Object.defineProperty;var a=(r,i)=>o(r,"name",{value:i,configurable:!0});import{a0 as n}from"./index.fc750031.js";import{C as m}from"./ComponentInfo.c82d36ec.js";import{S as c}from"./copyText.dc36e479.js";import{d as t}from"./vendor.fdf05c31.js";import"./PaperCode.f089d6bb.js";function e(){return t(c,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}a(e,"Variants");e.code=`import Skeleton from "@suid/material/Skeleton";
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
`;function k(){return t(m,{get name(){return n.name},examples:[e]})}a(k,"SkeletonPage");export{k as default};
