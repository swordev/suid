var m=Object.defineProperty;var t=(n,r)=>m(n,"name",{value:r,configurable:!0});import{a as s,d as e,B as o,F as i,u as c,P as l}from"./index.6b14d20c.js";import{C as d}from"./ComponentInfo.346ead02.js";import{F as p,S as h}from"./Switch.28901aa6.js";import"./Link.cd246030.js";import"./copyText.bc6fa35f.js";import"./PaperCode.84163afb.js";import"./formControlState.c2bf5187.js";import"./useFormControl.d0506b00.js";import"./SwitchBase.3fea1a15.js";import"./useControlled.92e5c36d.js";function u(){const n=c();return e(l,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=s(!1);return e(o,{sx:{height:180},get children(){return[e(p,{get control(){return e(h,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Fade from "@suid/material/Fade";
import FormControlLabel from "@suid/material/FormControlLabel";
import Paper from "@suid/material/Paper";
import Switch from "@suid/material/Switch";
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
      <FormControlLabel
        control={
          <Switch checked={checked()} onChange={() => setChecked(!checked())} />
        }
        label="Show"
      />

      <Box sx={{ display: "flex" }}>
        <Fade in={checked()}>
          <Icon />
        </Fade>
      </Box>
    </Box>
  );
}
`;function v(){return e(d,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:a}]})}t(v,"FadePage");export{v as default};
