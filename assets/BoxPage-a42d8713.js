var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{u as i,h as t,B as n}from"./index-dcf73f67.js";import{C as p}from"./ComponentInfo-b324653a.js";import"./Link-1d61b786.js";import"./copyText-676cc977.js";import"./PaperCode-2aa6fb01.js";function r(){const e=i();return t(n,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(r,"BoxSx");r.code=`import { Box } from "@suid/material";
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
`;function d(){return t(p,{get name(){return n.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:r,title:!1}]})}o(d,"BoxPage");export{d as default};
