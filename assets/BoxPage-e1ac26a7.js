var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{B as t}from"./ListItemText-0f600c95.js";import{C as i}from"./ComponentInfo-255fb34b.js";import{g as p,c as r}from"./ErrorPage-eb59dadb.js";import"./Link-aba4ea2c.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./Paper-32f89a64.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";function n(){const e=p();return r(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import { Box } from "@suid/material";
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
