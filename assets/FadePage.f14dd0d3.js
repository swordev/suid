import{d as a,B as t,F as o,u as s,p as m}from"./index.ae27f545.js";import{C as c}from"./ComponentInfo.6103a8aa.js";import{a as d,d as e}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function l(){const n=s();return e(m,{sx:{m:1},elevation:4,get children(){return e(t,{component:"svg",sx:{width:100,height:100},get children(){return e(t,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}function r(){const[n,i]=d(!1);return e(t,{sx:{height:180},get children(){return[e(a,{onClick:()=>i(!n()),get children(){return n()?"true":"false"}}),e(t,{sx:{display:"flex"},get children(){return e(o,{get in(){return n()},get children(){return e(l,{})}})}})]}})}r.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Fade from "@suid/material/Fade";
import Paper from "@suid/material/Paper";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export function Icon() {
  const theme = useTheme();

  return (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: "1",
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
}
export default function SimpleFade() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Box sx={{ height: 180 }}>
      <Button onClick={() => setChecked(!checked())}>
        {checked() ? "true" : "false"}
      </Button>
      <Box sx={{ display: "flex" }}>
        <Fade in={checked()}>
          <Icon />
        </Fade>
      </Box>
    </Box>
  );
}
`;function g(){return e(c,{get name(){return o.name},docsName:"transitions",examples:[r]})}export{g as default};
