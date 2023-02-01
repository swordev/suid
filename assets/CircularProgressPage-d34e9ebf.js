var n=Object.defineProperty;var e=(c,i)=>n(c,"name",{value:i,configurable:!0});import{C as o}from"./CircularProgress-b52b5526.js";import{C as s}from"./ComponentInfo-ad863d1e.js";import{S as a}from"./copyText-cec38e2f.js";import{c as r}from"./ErrorPage-5efa7331.js";import"./ListItemText-4b7359c5.js";import"./Link-1858147a.js";import"./IconButton-e9aa5297.js";import"./Paper-b94e5972.js";import"./PaperCode-9e9dd566.js";import"./PageNav-421e26ff.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function w(){return r(s,{get name(){return o.name},docsName:"progress",examples:[t]})}e(w,"CircularProgressPage");export{w as default};
