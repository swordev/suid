var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-0f312b1d.js";import{C as m}from"./ComponentInfo-8409ab48.js";import{S as p}from"./copyText-60efa3b1.js";import{c as t}from"./ErrorPage-8328033b.js";import"./ListItemText-2a1d0b71.js";import"./Link-84ba8a82.js";import"./IconButton-220611a6.js";import"./Paper-a16bc6e4.js";import"./PaperCode-fb6e5c62.js";import"./PageNav-3f6af208.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

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
