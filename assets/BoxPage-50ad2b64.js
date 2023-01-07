var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{B as t}from"./ListItemText-97540f66.js";import{C as i}from"./ComponentInfo-fb88dbff.js";import{u as p,c as r}from"./ErrorPage-7e24a11e.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function n(){const e=p();return r(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import { Box } from "@suid/material";
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
`;function k(){return r(i,{get name(){return t.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:n,title:!1}]})}o(k,"BoxPage");export{k as default};
