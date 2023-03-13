var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{B as t}from"./ListItemText-be55e132.js";import{C as i}from"./ComponentInfo-1eac72a6.js";import{g as p,c as r}from"./ErrorPage-eb59dadb.js";import"./Link-123f7416.js";import"./copyText-dae2e1ef.js";import"./IconButton-c6b31999.js";import"./Paper-32f89a64.js";import"./PaperCode-b3aeccfd.js";import"./PageNav-652b02ba.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function n(){const e=p();return r(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import { Box } from "@suid/material";
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
