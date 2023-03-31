var a=Object.defineProperty;var e=(r,i)=>a(r,"name",{value:i,configurable:!0});import{L as t}from"./Link-a8ec2a4e.js";import{C as m}from"./ComponentInfo-866f98ce.js";import{B as p}from"./ListItemText-6803f35f.js";import{c as n}from"./ErrorPage-899a3c74.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";function o(){return n(p,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:r=>r.preventDefault(),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}e(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
`;function B(){return n(m,{get name(){return t.name},docsName:"links",examples:[o]})}e(B,"LinksPage");export{B as default};
