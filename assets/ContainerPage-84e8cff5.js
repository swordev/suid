var i=Object.defineProperty;var e=(r,a)=>i(r,"name",{value:a,configurable:!0});import{d as n,a4 as m,B as s,C as o}from"./index-5e971977.js";import{C as p}from"./ComponentInfo-62d0bf60.js";import"./Link-cfb16ae5.js";import"./copyText-2bb7dc12.js";import"./PaperCode-8af144e1.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import { Box, Container, CssBaseline } from "@suid/material";

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
