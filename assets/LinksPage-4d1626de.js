var a=Object.defineProperty;var e=(r,i)=>a(r,"name",{value:i,configurable:!0});import{L as t}from"./Link-09b4138b.js";import{C as m}from"./ComponentInfo-f3f6ea7d.js";import{B as p}from"./ListItemText-0fefb047.js";import{c as n}from"./ErrorPage-50341dca.js";import"./copyText-7f91c599.js";import"./IconButton-78ead2c8.js";import"./Paper-992c85e1.js";import"./PaperCode-12d52286.js";import"./PageNav-b6a8a27e.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function o(){return n(p,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:r=>r.preventDefault(),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}e(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
