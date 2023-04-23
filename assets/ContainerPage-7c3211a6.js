var i=Object.defineProperty;var e=(r,a)=>i(r,"name",{value:a,configurable:!0});import{d as n,a1 as m,B as s,C as o}from"./index-348f88e2.js";import{C as p}from"./ComponentInfo-e4c2edcd.js";import"./Link-8d117d85.js";import"./copyText-6fc3e7c5.js";import"./PaperCode-884c7b1b.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import { Box, Container, CssBaseline } from "@suid/material";

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
