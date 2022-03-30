var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{U as m,B as s,C as o}from"./index.575706a7.js";import{C as p}from"./ComponentInfo.94932f37.js";import{a as n}from"./vendor.7d03e054.js";import"./Link.d3ce06b2.js";import"./copyText.ce384d40.js";import"./PaperCode.2d840087.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
`;function B(){return n(p,{get name(){return o.name},examples:[{bgcolor:"contrasted",component:r}]})}e(B,"ContainerPage");export{B as default};
