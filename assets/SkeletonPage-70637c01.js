var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-81469339.js";import{C as m}from"./ComponentInfo-fec5820b.js";import{S as p}from"./copyText-d95d75bf.js";import{c as t}from"./ErrorPage-8beed0e1.js";import"./ListItemText-dfc8992a.js";import"./Link-3859a10b.js";import"./IconButton-0456b81e.js";import"./Paper-e344694e.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function V(){return t(m,{get name(){return r.name},examples:[e]})}n(V,"SkeletonPage");export{V as default};
