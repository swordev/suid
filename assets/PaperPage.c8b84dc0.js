var p=Object.defineProperty;var r=(o,a)=>p(o,"name",{value:a,configurable:!0});import{P as n,B as i}from"./index.f8c435ad.js";import{C as m}from"./ComponentInfo.056394a0.js";import{d as e}from"./vendor.7f6460ea.js";import"./copyText.f8718ad2.js";import"./Grid.67791fa5.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"SimplePaper");t.code=`import Box from "@suid/material/Box";
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
`;function c(){return e(m,{get name(){return n.name},examples:[t]})}r(c,"PaperPage");export{c as default};
