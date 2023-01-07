var a=Object.defineProperty;var r=(e,i)=>a(e,"name",{value:i,configurable:!0});import{L as t}from"./Link-eef663fe.js";import{C as m}from"./ComponentInfo-3f416a39.js";import{B as l}from"./ListItemText-f1fd78c0.js";import{c as n}from"./ErrorPage-ac5239e5.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function o(){return n(l,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:e=>e.preventDefault(),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}r(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

export default function BasicLinks() {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
      onClick={(event) => event.preventDefault()}
    >
      <Link href="#" target="none">
        Link
      </Link>
      <Link href="#" color="inherit" target="none">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2" target="none">
        {'variant="body2"'}
      </Link>
    </Box>
  );
}
`;function v(){return n(m,{get name(){return t.name},docsName:"links",examples:[o]})}r(v,"LinksPage");export{v as default};
