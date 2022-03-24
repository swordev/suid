var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{O as m,B as s,C as o}from"./index.52e9424c.js";import{C as p}from"./ComponentInfo.4a323a22.js";import{d as n}from"./vendor.7f6460ea.js";import"./copyText.fb75f941.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
`;function B(){return n(p,{get name(){return o.name},examples:[r]})}e(B,"ContainerPage");export{B as default};
