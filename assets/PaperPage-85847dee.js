var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-e344694e.js";import{C as i}from"./ComponentInfo-fec5820b.js";import{B as m}from"./ListItemText-dfc8992a.js";import{c as e}from"./ErrorPage-8beed0e1.js";import"./Link-3859a10b.js";import"./copyText-d95d75bf.js";import"./IconButton-0456b81e.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
`;function y(){return e(i,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:t}]})}r(y,"PaperPage");export{y as default};
