var a=Object.defineProperty;var r=(t,i)=>a(t,"name",{value:i,configurable:!0});import{L as e}from"./Link.687f6c0c.js";import{C as l}from"./ComponentInfo.4db125cf.js";import{d as n,B as s}from"./index.587a1a49.js";import"./copyText.f7152695.js";import"./PaperCode.04f8488e.js";function o(){return n(s,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:t=>t.preventDefault(),get children(){return[n(e,{href:"#",target:"none",children:"Link"}),n(e,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(e,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}r(o,"BasicLinks");o.code=`import { Box, Link } from "@suid/material";

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
`;function k(){return n(l,{get name(){return e.name},docsName:"links",examples:[o]})}r(k,"LinksPage");export{k as default};
