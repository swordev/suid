var s=Object.defineProperty;var n=(t,m)=>s(t,"name",{value:m,configurable:!0});import{C as a}from"./ComponentInfo-873f013e.js";import{i,d as e,B as o}from"./index-3d2309c5.js";import{S as p}from"./copyText-5528464b.js";import"./Link-60534740.js";import"./PaperCode-37bcdc25.js";import"./_commonjsHelpers-0119a68f.js";function r(){const t=i();return e(p,{direction:"row",get sx(){return{[`${o}`]:{bgcolor:t.palette.background.paper,boxShadow:t.shadows[1],width:50,height:50,mx:1}}},get children(){return[e(o,{}),e(o,{sx:{mt:3}}),e(o,{mt:3}),e(o,{marginTop:3})]}})}n(r,"BoxSysProps");r.code=`import { Box, Stack } from "@suid/material";
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
`;function g(){return e(a,{importInfo:!1,name:"Properties",docsApiName:"system/properties",moreExamples:!1,examples:[{title:"Box example",bgcolor:"contrasted",component:r}]})}n(g,"PropertiesPage");export{g as default};
