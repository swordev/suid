var a=Object.defineProperty;var e=(r,i)=>a(r,"name",{value:i,configurable:!0});import{L as t}from"./Link-aba4ea2c.js";import{C as m}from"./ComponentInfo-255fb34b.js";import{B as p}from"./ListItemText-0f600c95.js";import{c as n}from"./ErrorPage-eb59dadb.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./Paper-32f89a64.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";function o(){return n(p,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:r=>r.preventDefault(),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}e(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
