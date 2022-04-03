var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{X as m,B as s,C as o}from"./index.5b3b4b7a.js";import{C as p}from"./ComponentInfo.bede338e.js";import{a as n}from"./vendor.37d14b95.js";import"./Link.9626be27.js";import"./copyText.d14c4ac4.js";import"./PaperCode.cf41c2a7.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
