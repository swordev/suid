var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-154b1d70.js";import{C as i}from"./ComponentInfo-0bebdfdd.js";import{B as m}from"./ListItemText-90f79698.js";import{c as e}from"./ErrorPage-e9c3e4c4.js";import"./Link-0e989b73.js";import"./copyText-94cbea7d.js";import"./IconButton-2fc4716d.js";import"./PaperCode-3ff01054.js";import"./PageNav-5acb3c23.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
