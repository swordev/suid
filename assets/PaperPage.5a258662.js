var p=Object.defineProperty;var t=(a,o)=>p(a,"name",{value:o,configurable:!0});import{d as e,P as n,B as i}from"./index.41b0e3d9.js";import{C as l}from"./ComponentInfo.3840199b.js";import"./Link.99ddcb16.js";import"./copyText.2d7a9d56.js";import"./PaperCode.ca66f3be.js";function r(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}t(r,"BasicPaper");r.code=`import { Box, Paper } from "@suid/material";

export default function BasicPaper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}
`;function u(){return e(l,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:r}]})}t(u,"PaperPage");export{u as default};
