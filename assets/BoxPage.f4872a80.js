var a=Object.defineProperty;var o=(e,m)=>a(e,"name",{value:m,configurable:!0});import{u as i,B as r}from"./index.f8c435ad.js";import{C as p}from"./ComponentInfo.056394a0.js";import{d as t}from"./vendor.7f6460ea.js";import"./copyText.f8718ad2.js";import"./Grid.67791fa5.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";function n(){const e=i();return t(r,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(n,"BoxSx");n.code=`import Box from "@suid/material/Box";
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
`;function g(){return t(p,{get name(){return r.name},docsApiName:"components/box",moreExamples:!1,examples:[n]})}o(g,"BoxPage");export{g as default};
