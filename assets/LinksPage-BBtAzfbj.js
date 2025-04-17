var a=Object.defineProperty;var e=(r,i)=>a(r,"name",{value:i,configurable:!0});import{L as t}from"./Link-DW3jl7Y4.js";import{C as l}from"./ComponentInfo-BSVXmdCc.js";import{h as n,B as s}from"./index-Bo6RAevH.js";import"./copyText-Bu12eD7D.js";import"./PaperCode-Bp4T0X-x.js";function o(){return n(s,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:e(r=>r.preventDefault(),"onClick"),get children(){return[n(t,{href:"#",target:"none",children:"Link"}),n(t,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(t,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}e(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
`;function d(){return n(l,{get name(){return t.name},docsName:"links",examples:[o]})}e(d,"LinksPage");export{d as default};
