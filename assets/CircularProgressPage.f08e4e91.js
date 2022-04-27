var t=Object.defineProperty;var e=(n,s)=>t(n,"name",{value:s,configurable:!0});import{C as o}from"./CircularProgress.4036943a.js";import{C as a}from"./ComponentInfo.3428de0d.js";import{S as i}from"./copyText.aa624b45.js";import{d as r}from"./index.bf44a517.js";import"./Link.6e331fd6.js";import"./PaperCode.aa36a556.js";function c(){return r(i,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[r(o,{color:"secondary"}),r(o,{color:"success"}),r(o,{color:"inherit"})]}})}e(c,"CircularColor");c.code=`import CircularProgress from "@suid/material/CircularProgress";
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
