var s=Object.defineProperty;var r=(t,m)=>s(t,"name",{value:m,configurable:!0});import{C as a}from"./ComponentInfo-5876f613.js";import{B as e}from"./ListItemText-7ae6925f.js";import{S as i}from"./copyText-44d22b15.js";import{g as p,c as o}from"./ErrorPage-e9c3e4c4.js";import"./Link-0694c7ad.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function n(){const t=p();return o(i,{direction:"row",get sx(){return{[`${e}`]:{bgcolor:t.palette.background.paper,boxShadow:t.shadows[1],width:50,height:50,mx:1}}},get children(){return[o(e,{}),o(e,{sx:{mt:3}}),o(e,{mt:3}),o(e,{marginTop:3})]}})}r(n,"BoxSysProps");n.code=`import { Box, Stack } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";

export default function BoxSysProps() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        [\`\${Box}\`]: {
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          width: 50,
          height: 50,
          mx: 1,
        },
      }}
    >
      <Box />
      <Box sx={{ mt: 3 }} />
      <Box mt={3} />
      <Box marginTop={3} />
    </Stack>
  );
}
`;function T(){return o(a,{importInfo:!1,name:"Properties",docsApiName:"system/properties",moreExamples:!1,examples:[{title:"Box example",bgcolor:"contrasted",component:n}]})}r(T,"PropertiesPage");export{T as default};
