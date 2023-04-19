var p=Object.defineProperty;var t=(o,a)=>p(o,"name",{value:a,configurable:!0});import{d as e,P as n,B as i}from"./index-14be0450.js";import{C as m}from"./ComponentInfo-56622be5.js";import"./Link-f2dba49b.js";import"./copyText-255cfa2c.js";import"./PaperCode-7142a767.js";import"./_commonjsHelpers-0119a68f.js";function r(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}t(r,"BasicPaper");r.code=`import { Box, Paper } from "@suid/material";

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
`;function P(){return e(m,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:r}]})}t(P,"PaperPage");export{P as default};
