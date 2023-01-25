var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{B as t}from"./ListItemText-7ae6925f.js";import{C as i}from"./ComponentInfo-5876f613.js";import{g as p,c as r}from"./ErrorPage-e9c3e4c4.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function n(){const e=p();return r(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import { Box } from "@suid/material";
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
