var o=Object.defineProperty;var r=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as n}from"./Skeleton.c0451e9e.js";import{C as m}from"./ComponentInfo.056394a0.js";import{S as c}from"./copyText.f8718ad2.js";import{d as t}from"./vendor.7f6460ea.js";import"./index.f8c435ad.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";import"./Grid.67791fa5.js";function e(){return t(c,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}r(e,"Variants");e.code=`import Skeleton from "@suid/material/Skeleton";
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
`;function g(){return t(m,{get name(){return n.name},examples:[e]})}r(g,"SkeletonPage");export{g as default};
