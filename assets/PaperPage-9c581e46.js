var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-32f89a64.js";import{C as i}from"./ComponentInfo-1eac72a6.js";import{B as m}from"./ListItemText-be55e132.js";import{c as e}from"./ErrorPage-eb59dadb.js";import"./Link-123f7416.js";import"./copyText-dae2e1ef.js";import"./IconButton-c6b31999.js";import"./PaperCode-b3aeccfd.js";import"./PageNav-652b02ba.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
