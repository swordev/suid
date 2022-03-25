var p=Object.defineProperty;var r=(a,o)=>p(a,"name",{value:o,configurable:!0});import{x as n,B as i}from"./index.056b5311.js";import{C as m}from"./ComponentInfo.52981497.js";import{d as e}from"./vendor.5273475d.js";import"./copyText.224c2700.js";import"./PaperCode.9a1fe640.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"SimplePaper");t.code=`import Box from "@suid/material/Box";
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
