var i=Object.defineProperty;var e=(c,n)=>i(c,"name",{value:n,configurable:!0});import{C as o}from"./CircularProgress-0befe465.js";import{C as s}from"./ComponentInfo-fb88dbff.js";import{S as a}from"./copyText-fe3f5d44.js";import{c as r}from"./ErrorPage-7e24a11e.js";import"./ListItemText-97540f66.js";import"./Link-89c3f0b3.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function t(){return r(a,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(t,"CircularColor");t.code=`import { CircularProgress, Stack } from "@suid/material";

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
