var s=Object.defineProperty;var r=(t,m)=>s(t,"name",{value:m,configurable:!0});import{C as a}from"./ComponentInfo-91f42892.js";import{B as e}from"./ListItemText-a46102d3.js";import{S as i}from"./copyText-47aa0270.js";import{g as p,c as o}from"./ErrorPage-5efa7331.js";import"./Link-bbcecfa2.js";import"./IconButton-4b14ca52.js";import"./Paper-b94e5972.js";import"./PaperCode-7dd2d056.js";import"./PageNav-f0077685.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-7d64fa3f.js";import"./vite.config.ts-faa4c0cf.js";function n(){const t=p();return o(i,{direction:"row",get sx(){return{[`${e}`]:{bgcolor:t.palette.background.paper,boxShadow:t.shadows[1],width:50,height:50,mx:1}}},get children(){return[o(e,{}),o(e,{sx:{mt:3}}),o(e,{mt:3}),o(e,{marginTop:3})]}})}r(n,"BoxSysProps");n.code=`import { Box, Stack } from "@suid/material";
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
