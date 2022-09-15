var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{d as n,ar as m,B as s,C as o}from"./index.94b113cc.js";import{C as p}from"./ComponentInfo.235f309e.js";import"./Link.a08bb7e6.js";import"./copyText.b98a3edd.js";import"./PaperCode.4611f55b.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
