var a=Object.defineProperty;var o=(e,i)=>a(e,"name",{value:i,configurable:!0});import{L as r}from"./copyText.dc36e479.js";import{C as l}from"./ComponentInfo.c82d36ec.js";import{B as m}from"./index.fc750031.js";import{d as n}from"./vendor.fdf05c31.js";import"./PaperCode.f089d6bb.js";function t(){return n(m,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:e=>e.preventDefault(),get children(){return[n(r,{href:"#",children:"Link"}),n(r,{href:"#",color:"inherit",children:'color="inherit"'}),n(r,{href:"#",variant:"body2",children:'variant="body2"'})]}})}o(t,"Links");t.code=`import Box from "@suid/material/Box";
import Link from "@suid/material/Link";

export default function Links() {
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
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>
  );
}
`;function h(){return n(l,{get name(){return r.name},docsName:"links",examples:[t]})}o(h,"LinksPage");export{h as default};
