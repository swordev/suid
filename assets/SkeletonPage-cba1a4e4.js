var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-e082cfd4.js";import{C as m}from"./ComponentInfo-1975fef8.js";import{S as p}from"./copyText-57789ef1.js";import{c as t}from"./ErrorPage-5efa7331.js";import"./ListItemText-f8fa2031.js";import"./Link-3e81837a.js";import"./IconButton-8fca2301.js";import"./Paper-b94e5972.js";import"./PaperCode-13566785.js";import"./PageNav-3db91a50.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

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
