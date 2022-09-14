var o=Object.defineProperty;var a=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,aH as n}from"./index.bec6ff41.js";import{C as c}from"./ComponentInfo.efebf197.js";import{S as m}from"./copyText.479cad90.js";import"./Link.e4f8d3dd.js";import"./PaperCode.b90d4cda.js";function e(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}a(e,"Variants");e.code=`import Skeleton from "@suid/material/Skeleton";
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
`;function s(){return t(c,{get name(){return n.name},examples:[e]})}a(s,"SkeletonPage");export{s as default};
