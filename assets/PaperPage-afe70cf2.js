var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-b94e5972.js";import{C as i}from"./ComponentInfo-1975fef8.js";import{B as m}from"./ListItemText-f8fa2031.js";import{c as e}from"./ErrorPage-5efa7331.js";import"./Link-3e81837a.js";import"./copyText-57789ef1.js";import"./IconButton-8fca2301.js";import"./PaperCode-13566785.js";import"./PageNav-3db91a50.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
