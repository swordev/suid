var o=Object.defineProperty;var n=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as r}from"./Skeleton-3d8226d3.js";import{C as m}from"./ComponentInfo-3f416a39.js";import{S as p}from"./copyText-13339847.js";import{c as t}from"./ErrorPage-ac5239e5.js";import"./ListItemText-f1fd78c0.js";import"./Link-eef663fe.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function e(){return t(p,{spacing:1,get children(){return[t(r,{variant:"text"}),t(r,{variant:"circular",width:40,height:40}),t(r,{variant:"rectangular",width:210,height:118})]}})}n(e,"Variants");e.code=`import { Skeleton, Stack } from "@suid/material";

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
