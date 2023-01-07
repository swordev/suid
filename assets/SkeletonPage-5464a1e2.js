var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-2f547679.js";import{C as m}from"./ComponentInfo-fb88dbff.js";import{S as p}from"./copyText-fe3f5d44.js";import{c as t}from"./ErrorPage-7e24a11e.js";import"./ListItemText-97540f66.js";import"./Link-89c3f0b3.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function C(){return t(m,{get name(){return r.name},examples:[e]})}n(C,"SkeletonPage");export{C as default};
