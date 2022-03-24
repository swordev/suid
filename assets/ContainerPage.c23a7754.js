var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{O as m,B as s,C as o}from"./index.f8c435ad.js";import{C as p}from"./ComponentInfo.056394a0.js";import{d as n}from"./vendor.7f6460ea.js";import"./copyText.f8718ad2.js";import"./Grid.67791fa5.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
`;function g(){return n(p,{get name(){return o.name},examples:[r]})}e(g,"ContainerPage");export{g as default};
