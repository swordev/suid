var t=Object.defineProperty;var e=(n,s)=>t(n,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress.d830aaad.js";import{C as a}from"./ComponentInfo.894fff2d.js";import{S as i}from"./copyText.b50803cd.js";import{d as r}from"./index.f602409d.js";import"./Link.1afd586a.js";import"./PaperCode.56a1402e.js";function c(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(c,"CircularColor");c.code=`import CircularProgress from "@suid/material/CircularProgress";
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
