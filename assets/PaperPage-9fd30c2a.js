var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-c50e815b.js";import{C as i}from"./ComponentInfo-866f98ce.js";import{B as m}from"./ListItemText-6803f35f.js";import{c as e}from"./ErrorPage-899a3c74.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
