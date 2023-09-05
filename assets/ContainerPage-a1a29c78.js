var i=Object.defineProperty;var e=(r,a)=>i(r,"name",{value:a,configurable:!0});import{d as n,a4 as m,B as s,C as o}from"./index-23102c99.js";import{C as p}from"./ComponentInfo-d72a4890.js";import"./Link-c9724eca.js";import"./copyText-5dc13f81.js";import"./PaperCode-80dd34f9.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import { Box, Container, CssBaseline } from "@suid/material";

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
