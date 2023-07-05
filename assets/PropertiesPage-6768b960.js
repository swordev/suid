var s=Object.defineProperty;var n=(t,m)=>s(t,"name",{value:m,configurable:!0});import{C as a}from"./ComponentInfo-1be43eb8.js";import{i,d as e,B as o}from"./index-758be31d.js";import{S as p}from"./copyText-10a4e128.js";import"./Link-532b1cef.js";import"./PaperCode-40407633.js";function r(){const t=i();return e(p,{direction:"row",get sx(){return{[`${o}`]:{bgcolor:t.palette.background.paper,boxShadow:t.shadows[1],width:50,height:50,mx:1}}},get children(){return[e(o,{}),e(o,{sx:{mt:3}}),e(o,{mt:3}),e(o,{marginTop:3})]}})}n(r,"BoxSysProps");r.code=`import { Box, Stack } from "@suid/material";
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
`;function f(){return e(a,{importInfo:!1,name:"Properties",docsApiName:"system/properties",moreExamples:!1,examples:[{title:"Box example",bgcolor:"contrasted",component:r}]})}n(f,"PropertiesPage");export{f as default};
