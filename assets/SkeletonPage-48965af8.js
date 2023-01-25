var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-de73b0c4.js";import{C as m}from"./ComponentInfo-0bebdfdd.js";import{S as p}from"./copyText-94cbea7d.js";import{c as t}from"./ErrorPage-e9c3e4c4.js";import"./ListItemText-90f79698.js";import"./Link-0e989b73.js";import"./IconButton-2fc4716d.js";import"./Paper-154b1d70.js";import"./PaperCode-3ff01054.js";import"./PageNav-5acb3c23.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

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
