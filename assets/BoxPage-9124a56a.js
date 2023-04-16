var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{i,d as t,B as n}from"./index-2ade038b.js";import{C as p}from"./ComponentInfo-bf8f3e44.js";import"./Link-b969f3af.js";import"./copyText-64309802.js";import"./PaperCode-2146d787.js";import"./_commonjsHelpers-0119a68f.js";function r(){const e=i();return t(n,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(r,"BoxSx");r.code=`import { Box } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";

export default function BoxSx() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          opacity: 0.9,
        },
      }}
    />
  );
}
`;function f(){return t(p,{get name(){return n.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:r,title:!1}]})}o(f,"BoxPage");export{f as default};
