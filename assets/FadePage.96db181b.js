var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{d as m,B as o,F as i,u as c,P as d}from"./index.ed1b30b4.js";import{C as l}from"./ComponentInfo.009186fa.js";import{e as p,a as e}from"./vendor.37d14b95.js";import"./Link.9b4d9d27.js";import"./copyText.ca51de91.js";import"./PaperCode.3f9a0c8e.js";function u(){const n=c();return e(d,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=p(!1);return e(o,{sx:{height:180},get children(){return[e(m,{onClick:()=>r(!n()),get children(){return n()?"true":"false"}}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import Box from "@suid/material/Box";
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
`;function C(){return e(l,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:a}]})}t(C,"FadePage");export{C as default};
