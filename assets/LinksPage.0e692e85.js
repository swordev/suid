var a=Object.defineProperty;var r=(t,i)=>a(t,"name",{value:i,configurable:!0});import{L as e}from"./Link.31d00855.js";import{C as l}from"./ComponentInfo.e0618143.js";import{d as n,B as m}from"./index.cd31afdd.js";import"./copyText.a47b39a4.js";import"./PaperCode.801a8a33.js";function o(){return n(m,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:t=>t.preventDefault(),get children(){return[n(e,{href:"#",target:"none",children:"Link"}),n(e,{href:"#",color:"inherit",target:"none",children:'color="inherit"'}),n(e,{href:"#",variant:"body2",target:"none",children:'variant="body2"'})]}})}r(o,"BasicLinks");o.code=`import Box from "@suid/material/Box";
import Link from "@suid/material/Link";

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
`;function h(){return n(l,{get name(){return e.name},docsName:"links",examples:[o]})}r(h,"LinksPage");export{h as default};
