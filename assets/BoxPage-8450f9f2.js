var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{B as t}from"./ListItemText-7861bce7.js";import{C as i}from"./ComponentInfo-d01e77a6.js";import{g as p,c as r}from"./ErrorPage-5efa7331.js";import"./Link-b6cacc18.js";import"./copyText-9e269238.js";import"./IconButton-7ca039fe.js";import"./Paper-b94e5972.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function n(){const e=p();return r(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import { Box } from "@suid/material";
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
`;function b(){return r(i,{get name(){return t.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:n,title:!1}]})}o(b,"BoxPage");export{b as default};
