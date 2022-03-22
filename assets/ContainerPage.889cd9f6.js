var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{J as m,B as s,C as o}from"./index.92fa0107.js";import{C as p}from"./ComponentInfo.56c7f4e3.js";import{d as n}from"./vendor.7f6460ea.js";import"./copyText.5a395040.js";import"./PaperCode.b58d60ed.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
