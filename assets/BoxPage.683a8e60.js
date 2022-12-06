var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{i,d as t,B as n}from"./index.28506464.js";import{C as p}from"./ComponentInfo.6ce91a5c.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";function r(){const e=i();return t(n,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(r,"BoxSx");r.code=`import { Box } from "@suid/material";
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
`;function x(){return t(p,{get name(){return n.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:r,title:!1}]})}o(x,"BoxPage");export{x as default};
