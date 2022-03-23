var p=Object.defineProperty;var r=(a,o)=>p(a,"name",{value:o,configurable:!0});import{P as n,B as i}from"./index.ef22901d.js";import{C as m}from"./ComponentInfo.8363f4df.js";import{d as e}from"./vendor.7f6460ea.js";import"./copyText.22202dfa.js";import"./PaperCode.518557f3.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"SimplePaper");t.code=`import Box from "@suid/material/Box";
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
