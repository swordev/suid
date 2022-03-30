var o=Object.defineProperty;var a=(r,i)=>o(r,"name",{value:i,configurable:!0});import{a1 as n}from"./index.8a208475.js";import{C as m}from"./ComponentInfo.b33c029f.js";import{S as c}from"./copyText.60242f1f.js";import{a as t}from"./vendor.7d03e054.js";import"./Link.09367311.js";import"./PaperCode.3ea7de34.js";function e(){return t(c,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}a(e,"Variants");e.code=`import Skeleton from "@suid/material/Skeleton";
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
`;function s(){return t(m,{get name(){return n.name},examples:[e]})}a(s,"SkeletonPage");export{s as default};
