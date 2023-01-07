var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{B as t}from"./ListItemText-f1fd78c0.js";import{C as i}from"./ComponentInfo-3f416a39.js";import{u as p,c as r}from"./ErrorPage-ac5239e5.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function n(){const e=p();return r(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import { Box } from "@suid/material";
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
