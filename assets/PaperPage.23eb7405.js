var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n,B as i}from"./index.8a208475.js";import{C as m}from"./ComponentInfo.b33c029f.js";import{a as e}from"./vendor.7d03e054.js";import"./Link.09367311.js";import"./copyText.60242f1f.js";import"./PaperCode.3ea7de34.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import Box from "@suid/material/Box";
import Paper from "@suid/material/Paper";

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
`;function P(){return e(m,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:t}]})}r(P,"PaperPage");export{P as default};
