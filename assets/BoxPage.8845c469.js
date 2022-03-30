var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{u as i,B as t}from"./index.8a208475.js";import{C as p}from"./ComponentInfo.b33c029f.js";import{a as n}from"./vendor.7d03e054.js";import"./Link.09367311.js";import"./copyText.60242f1f.js";import"./PaperCode.3ea7de34.js";function r(){const e=i();return n(t,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(r,"BoxSx");r.code=`import Box from "@suid/material/Box";
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
`;function f(){return n(p,{get name(){return t.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:r,title:!1}]})}o(f,"BoxPage");export{f as default};
