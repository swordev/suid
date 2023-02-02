var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-e082cfd4.js";import{C as m}from"./ComponentInfo-5e8c6946.js";import{S as p}from"./copyText-b5a6c090.js";import{c as t}from"./ErrorPage-5efa7331.js";import"./ListItemText-adc949a3.js";import"./Link-849ade78.js";import"./IconButton-c537b21b.js";import"./Paper-b94e5972.js";import"./PaperCode-c69528b8.js";import"./PageNav-450b952c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-7d64fa3f.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

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
