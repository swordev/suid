var a=Object.defineProperty;var e=(r,i)=>a(r,"name",{value:i,configurable:!0});import{L as t}from"./Link-1858147a.js";import{C as m}from"./ComponentInfo-ad863d1e.js";import{B as p}from"./ListItemText-4b7359c5.js";import{c as n}from"./ErrorPage-5efa7331.js";import"./copyText-cec38e2f.js";import"./IconButton-e9aa5297.js";import"./Paper-b94e5972.js";import"./PaperCode-9e9dd566.js";import"./PageNav-421e26ff.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function o(){return n(p,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:r=>r.preventDefault(),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}e(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
