var o=Object.defineProperty;var a=(r,i)=>o(r,"name",{value:i,configurable:!0});import{a3 as n}from"./index.90bba7b1.js";import{C as m}from"./ComponentInfo.5f5b447b.js";import{S as c}from"./copyText.78cd2380.js";import{a as t}from"./vendor.37d14b95.js";import"./Link.cc833b14.js";import"./PaperCode.759a44a2.js";function e(){return t(c,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}a(e,"Variants");e.code=`import Skeleton from "@suid/material/Skeleton";
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
