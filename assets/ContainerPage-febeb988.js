var i=Object.defineProperty;var e=(r,a)=>i(r,"name",{value:a,configurable:!0});import{d as n,a1 as m,B as s,C as o}from"./index-14be0450.js";import{C as p}from"./ComponentInfo-56622be5.js";import"./Link-f2dba49b.js";import"./copyText-255cfa2c.js";import"./PaperCode-7142a767.js";import"./_commonjsHelpers-0119a68f.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import { Box, Container, CssBaseline } from "@suid/material";

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
`;function g(){return n(p,{get name(){return o.name},examples:[{bgcolor:"contrasted",component:t}]})}e(g,"ContainerPage");export{g as default};
