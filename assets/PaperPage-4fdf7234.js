var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n}from"./Paper-355f0f45.js";import{C as i}from"./ComponentInfo-fb88dbff.js";import{B as m}from"./ListItemText-97540f66.js";import{c as e}from"./ErrorPage-7e24a11e.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function t(){return e(m,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import { Box, Paper } from "@suid/material";

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
