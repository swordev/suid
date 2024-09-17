var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{u as i,h as t,B as n}from"./index-QA7pP0xH.js";import{C as p}from"./ComponentInfo-Cp9In596.js";import"./Link-BRU1W-2I.js";import"./copyText-DYDM2w-T.js";import"./PaperCode-2wa1Y67L.js";function r(){const e=i();return t(n,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(r,"BoxSx");r.code=`import { Box } from "@suid/material";
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
