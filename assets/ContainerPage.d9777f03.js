var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{U as m,B as s,C as o}from"./index.c7352f5d.js";import{C as p}from"./ComponentInfo.fcf1cc11.js";import{d as n}from"./vendor.5273475d.js";import"./copyText.9135cd54.js";import"./PaperCode.7eea3671.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
