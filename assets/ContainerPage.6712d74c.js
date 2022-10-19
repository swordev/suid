var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{d as n,ar as m,B as s,C as o}from"./index.ebda06dc.js";import{C as p}from"./ComponentInfo.9489377b.js";import"./Link.a3c9be61.js";import"./copyText.6e7b03c2.js";import"./PaperCode.717c24ae.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
