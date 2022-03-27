var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n,B as i}from"./index.ecd65d7c.js";import{C as m}from"./ComponentInfo.a5c59a7e.js";import{d as e}from"./vendor.5273475d.js";import"./copyText.95a83221.js";import"./PaperCode.33519cb3.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"SimplePaper");t.code=`import Box from "@suid/material/Box";
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
`;function P(){return e(m,{get name(){return n.name},examples:[{bgcolor:"contrasted",component:t}]})}r(P,"PaperPage");export{P as default};
