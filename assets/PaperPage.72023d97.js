var p=Object.defineProperty;var r=(a,o)=>p(a,"name",{value:o,configurable:!0});import{d as e,P as n,B as i}from"./index.f066d7c4.js";import{C as m}from"./ComponentInfo.7775a3fa.js";import"./Link.17fad16b.js";import"./copyText.9e62f2b8.js";import"./PaperCode.c3bb63a6.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import Box from "@suid/material/Box";
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
`;function c(){return e(m,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:t}]})}r(c,"PaperPage");export{c as default};
