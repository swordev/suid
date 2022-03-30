var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{U as m,B as s,C as o}from"./index.c57144ef.js";import{C as p}from"./ComponentInfo.f7f7392b.js";import{a as n}from"./vendor.7d03e054.js";import"./Link.a158817a.js";import"./copyText.1fa6c8bf.js";import"./PaperCode.71992af9.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
