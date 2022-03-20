import{L as r}from"./copyText.3f9916b4.js";import{C as t}from"./ComponentInfo.6103a8aa.js";import{B as i}from"./index.ae27f545.js";import{d as n}from"./vendor.6d0a7b46.js";import"./PaperCode.139f695a.js";function e(){return n(i,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:o=>o.preventDefault(),get children(){return[n(r,{href:"#",children:"Link"}),n(r,{href:"#",color:"inherit",children:'color="inherit"'}),n(r,{href:"#",variant:"body2",children:'variant="body2"'})]}})}e.code=`import Box from "@suid/material/Box";
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
`;function p(){return n(t,{get name(){return r.name},docsName:"links",examples:[e]})}export{p as default};
