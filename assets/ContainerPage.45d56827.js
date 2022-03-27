var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{U as m,B as s,C as o}from"./index.ecd65d7c.js";import{C as p}from"./ComponentInfo.a5c59a7e.js";import{d as n}from"./vendor.5273475d.js";import"./copyText.95a83221.js";import"./PaperCode.33519cb3.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
`;function d(){return n(p,{get name(){return o.name},examples:[{bgcolor:"contrasted",component:r}]})}e(d,"ContainerPage");export{d as default};
