var i=Object.defineProperty;var e=(r,a)=>i(r,"name",{value:a,configurable:!0});import{h as n,H as m,B as s,J as o}from"./index-5ff6d9be.js";import{C as p}from"./ComponentInfo-3547844d.js";import"./Link-4d633cf7.js";import"./copyText-525d45c6.js";import"./PaperCode-4f370aa8.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import { Box, Container, CssBaseline } from "@suid/material";

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
