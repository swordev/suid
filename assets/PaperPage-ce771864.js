var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-154b1d70.js";import{C as i}from"./ComponentInfo-5876f613.js";import{B as m}from"./ListItemText-7ae6925f.js";import{c as e}from"./ErrorPage-e9c3e4c4.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
