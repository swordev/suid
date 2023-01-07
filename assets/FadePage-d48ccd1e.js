var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{F as i}from"./Fade-9373b7d0.js";import{C as c}from"./ComponentInfo-3f416a39.js";import{B as o}from"./ListItemText-f1fd78c0.js";import{F as s}from"./FormControlLabel-2f69c736.js";import{P as p}from"./Paper-3e60930a.js";import{S as l}from"./Switch-5e9796ed.js";import{a as h,c as e,u as d}from"./ErrorPage-ac5239e5.js";import"./Transition-750bbfe3.js";import"./TransitionContext-2788a4e7.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-95313d5c.js";import"./useFormControl-e9006b4f.js";import"./SwitchBase-64222138.js";import"./useControlled-0232add8.js";function u(){const n=d();return e(p,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function m(){const[n,r]=h(!1);return e(o,{sx:{height:180},get children(){return[e(s,{get control(){return e(l,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(m,"SimpleFade");m.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
`;function A(){return e(c,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:m}]})}t(A,"FadePage");export{A as default};
