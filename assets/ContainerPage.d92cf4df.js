var a=Object.defineProperty;var e=(t,i)=>a(t,"name",{value:i,configurable:!0});import{X as m,B as s,C as o}from"./index.90bba7b1.js";import{C as p}from"./ComponentInfo.5f5b447b.js";import{a as n}from"./vendor.37d14b95.js";import"./Link.cc833b14.js";import"./copyText.78cd2380.js";import"./PaperCode.759a44a2.js";function r(){return[n(m,{}),n(o,{maxWidth:"sm",get children(){return n(s,{sx:{bgcolor:"#cfe8fc",height:"400px"}})}})]}e(r,"SimpleContainer");r.code=`import Box from "@suid/material/Box";
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
