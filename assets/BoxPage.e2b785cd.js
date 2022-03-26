var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{u as i,B as r}from"./index.c7352f5d.js";import{C as p}from"./ComponentInfo.fcf1cc11.js";import{d as t}from"./vendor.5273475d.js";import"./copyText.9135cd54.js";import"./PaperCode.7eea3671.js";function n(){const e=i();return t(r,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import Box from "@suid/material/Box";
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
`;function d(){return t(p,{get name(){return r.name},docsApiName:"components/box",moreExamples:!1,examples:[n]})}o(d,"BoxPage");export{d as default};
