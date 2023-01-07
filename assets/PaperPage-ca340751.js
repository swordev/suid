var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-3e60930a.js";import{C as i}from"./ComponentInfo-3f416a39.js";import{B as m}from"./ListItemText-f1fd78c0.js";import{c as e}from"./ErrorPage-ac5239e5.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
`;function w(){return e(i,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:t}]})}r(w,"PaperPage");export{w as default};
