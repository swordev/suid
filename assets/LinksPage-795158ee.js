var a=Object.defineProperty;var r=(e,i)=>a(e,"name",{value:i,configurable:!0});import{L as t}from"./Link-89c3f0b3.js";import{C as m}from"./ComponentInfo-fb88dbff.js";import{B as l}from"./ListItemText-97540f66.js";import{c as n}from"./ErrorPage-7e24a11e.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function o(){return n(l,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:e=>e.preventDefault(),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}r(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
