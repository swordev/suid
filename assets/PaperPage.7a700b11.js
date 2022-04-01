var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n,B as i}from"./index.ed1b30b4.js";import{C as m}from"./ComponentInfo.009186fa.js";import{a as e}from"./vendor.37d14b95.js";import"./Link.9b4d9d27.js";import"./copyText.ca51de91.js";import"./PaperCode.3f9a0c8e.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import Box from "@suid/material/Box";
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
