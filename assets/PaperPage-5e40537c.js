var p=Object.defineProperty;var t=(o,a)=>p(o,"name",{value:a,configurable:!0});import{d as e,P as n,B as i}from"./index-02d32149.js";import{C as m}from"./ComponentInfo-62712aad.js";import"./Link-11e90053.js";import"./copyText-bcdf63f6.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";function r(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}t(r,"BasicPaper");r.code=`import { Box, Paper } from "@suid/material";

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
