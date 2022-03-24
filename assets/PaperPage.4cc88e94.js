var p=Object.defineProperty;var r=(a,o)=>p(a,"name",{value:o,configurable:!0});import{P as n,B as i}from"./index.52e9424c.js";import{C as m}from"./ComponentInfo.4a323a22.js";import{d as e}from"./vendor.7f6460ea.js";import"./copyText.fb75f941.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";function t(){return e(i,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},get children(){return[e(n,{elevation:0}),e(n,{}),e(n,{elevation:3})]}})}r(t,"SimplePaper");t.code=`import Box from "@suid/material/Box";
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
`;function h(){return e(m,{get name(){return n.name},examples:[t]})}r(h,"PaperPage");export{h as default};
