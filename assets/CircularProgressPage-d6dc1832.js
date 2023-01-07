var i=Object.defineProperty;var e=(c,n)=>i(c,"name",{value:n,configurable:!0});import{C as o}from"./CircularProgress-aa21508f.js";import{C as s}from"./ComponentInfo-3f416a39.js";import{S as a}from"./copyText-13339847.js";import{c as r}from"./ErrorPage-ac5239e5.js";import"./ListItemText-f1fd78c0.js";import"./Link-eef663fe.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function h(){return r(s,{get name(){return o.name},docsName:"progress",examples:[t]})}e(h,"CircularProgressPage");export{h as default};
