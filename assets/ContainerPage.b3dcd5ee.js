var i=Object.defineProperty;var e=(r,a)=>i(r,"name",{value:a,configurable:!0});import{d as n,aq as m,B as s,C as o}from"./index.587a1a49.js";import{C as p}from"./ComponentInfo.4db125cf.js";import"./Link.687f6c0c.js";import"./copyText.f7152695.js";import"./PaperCode.04f8488e.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import { Box, Container, CssBaseline } from "@suid/material";

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "400px" }} />
      </Container>
    </>
  );
}
`;function d(){return n(p,{get name(){return o.name},examples:[{bgcolor:"contrasted",component:t}]})}e(d,"ContainerPage");export{d as default};
