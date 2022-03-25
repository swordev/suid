var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{V as m,B as s,C as o}from"./index.056b5311.js";import{C as p}from"./ComponentInfo.52981497.js";import{d as n}from"./vendor.5273475d.js";import"./copyText.224c2700.js";import"./PaperCode.9a1fe640.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
`;function d(){return n(p,{get name(){return o.name},examples:[r]})}e(d,"ContainerPage");export{d as default};
