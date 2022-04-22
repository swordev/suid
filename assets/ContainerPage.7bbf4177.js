var a=Object.defineProperty;var e=(r,i)=>a(r,"name",{value:i,configurable:!0});import{d as n,ap as m,B as s,C as o}from"./index.831a2bb7.js";import{C as p}from"./ComponentInfo.e2cdfb54.js";import"./Link.8891fd7e.js";import"./copyText.1a7d19e7.js";import"./PaperCode.905e1cd4.js";function t(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(t,"SimpleContainer");t.code=`import Box from "@suid/material/Box";
import Container from "@suid/material/Container";
import CssBaseline from "@suid/material/CssBaseline";

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
