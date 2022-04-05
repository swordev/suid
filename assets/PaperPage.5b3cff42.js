var p=Object.defineProperty;var r=(a,o)=>p(a,"name",{value:o,configurable:!0});import{d as e,P as n,B as i}from"./index.b7957beb.js";import{C as m}from"./ComponentInfo.e6ba9f4e.js";import"./Link.314b9cd9.js";import"./copyText.458eb312.js";import"./PaperCode.37f24fed.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"BasicPaper");t.code=`import Box from "@suid/material/Box";
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
