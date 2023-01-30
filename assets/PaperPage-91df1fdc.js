var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-b94e5972.js";import{C as i}from"./ComponentInfo-c5b6ea90.js";import{B as m}from"./ListItemText-ac9718cf.js";import{c as e}from"./ErrorPage-5efa7331.js";import"./Link-70328dd1.js";import"./copyText-b89086ce.js";import"./IconButton-807ebc30.js";import"./PaperCode-aa9558c0.js";import"./PageNav-470ce5dc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
