var a=Object.defineProperty;var e=(o,i)=>a(o,"name",{value:i,configurable:!0});import{L as r}from"./copyText.f8718ad2.js";import{C as m}from"./ComponentInfo.056394a0.js";import{B as l}from"./index.f8c435ad.js";import{d as n}from"./vendor.7f6460ea.js";import"./Grid.67791fa5.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";function t(){return n(l,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:o=>o.preventDefault(),get children(){return[n(r,{href:"#",children:"Link"}),n(r,{href:"#",color:"inherit",children:'color="inherit"'}),n(r,{href:"#",variant:"body2",children:'variant="body2"'})]}})}e(t,"Links");t.code=`import Box from "@suid/material/Box";
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
`;function u(){return n(m,{get name(){return r.name},docsName:"links",examples:[t]})}e(u,"LinksPage");export{u as default};
