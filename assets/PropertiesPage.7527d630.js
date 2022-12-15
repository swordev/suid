var s=Object.defineProperty;var n=(t,m)=>s(t,"name",{value:m,configurable:!0});import{C as a}from"./ComponentInfo.4db125cf.js";import{i,d as e,B as o}from"./index.587a1a49.js";import{S as p}from"./copyText.f7152695.js";import"./Link.687f6c0c.js";import"./PaperCode.04f8488e.js";function r(){const t=i();return e(p,{direction:"row",get sx(){return{[`.${o}`]:{bgcolor:t.palette.background.paper,boxShadow:t.shadows[1],width:50,height:50,mx:1}}},get children(){return[e(o,{}),e(o,{sx:{mt:3}}),e(o,{mt:3}),e(o,{marginTop:3})]}})}n(r,"BoxSysProps");r.code=`import { Box, Stack } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";

export default function BoxSysProps() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        [\`.\${Box}\`]: {
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
