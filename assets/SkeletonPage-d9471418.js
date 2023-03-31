var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-fc0e8384.js";import{C as m}from"./ComponentInfo-866f98ce.js";import{S as p}from"./copyText-0585a785.js";import{c as t}from"./ErrorPage-899a3c74.js";import"./ListItemText-6803f35f.js";import"./Link-a8ec2a4e.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

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
