var p=Object.defineProperty;var t=(a,o)=>p(a,"name",{value:o,configurable:!0});import{h as e,L as n,B as i}from"./index-C8Cbba9i.js";import{C as l}from"./ComponentInfo-C3Y-hV1D.js";import"./Link-CxszECJF.js";import"./copyText-Dljb6c8E.js";import"./PaperCode-Bq4agt-h.js";function r(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}t(r,"BasicPaper");r.code=`import { Box, Paper } from "@suid/material";

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
`;function d(){return e(l,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:r}]})}t(d,"PaperPage");export{d as default};
