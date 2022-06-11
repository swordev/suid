var t=Object.defineProperty;var e=(n,s)=>t(n,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress.8e71291d.js";import{C as a}from"./ComponentInfo.b4aab114.js";import{S as i}from"./copyText.3eadc357.js";import{d as r}from"./index.5728258e.js";import"./Link.5c554c09.js";import"./PaperCode.6e925dac.js";function c(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(c,"CircularColor");c.code=`import CircularProgress from "@suid/material/CircularProgress";
import Stack from "@suid/material/Stack";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;function f(){return r(a,{get name(){return o.name},docsName:"progress",examples:[c]})}e(f,"CircularProgressPage");export{f as default};
