var a=Object.defineProperty;var e=(o,i)=>a(o,"name",{value:i,configurable:!0});import{L as r}from"./copyText.fb75f941.js";import{C as l}from"./ComponentInfo.4a323a22.js";import{B as m}from"./index.52e9424c.js";import{d as n}from"./vendor.7f6460ea.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";function t(){return n(m,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:o=>o.preventDefault(),get children(){return[n(r,{href:"#",children:"Link"}),n(r,{href:"#",color:"inherit",children:'color="inherit"'}),n(r,{href:"#",variant:"body2",children:'variant="body2"'})]}})}e(t,"Links");t.code=`import Box from "@suid/material/Box";
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
`;function L(){return n(l,{get name(){return r.name},docsName:"links",examples:[t]})}e(L,"LinksPage");export{L as default};
