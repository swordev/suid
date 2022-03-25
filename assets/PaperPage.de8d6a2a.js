var p=Object.defineProperty;var r=(a,o)=>p(a,"name",{value:o,configurable:!0});import{x as n,B as i}from"./index.fc750031.js";import{C as m}from"./ComponentInfo.c82d36ec.js";import{d as e}from"./vendor.fdf05c31.js";import"./copyText.dc36e479.js";import"./PaperCode.f089d6bb.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"SimplePaper");t.code=`import Box from "@suid/material/Box";
import Paper from "@suid/material/Paper";

export default function SimplePaper() {
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
`;function P(){return e(m,{get name(){return n.name},examples:[t]})}r(P,"PaperPage");export{P as default};
