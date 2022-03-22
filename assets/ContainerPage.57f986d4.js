var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{J as m,B as s,C as o}from"./index.dc490824.js";import{C as p}from"./ComponentInfo.b0d22fd9.js";import{d as n}from"./vendor.7f6460ea.js";import"./copyText.450be6ec.js";import"./PaperCode.8a4eb3f4.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
