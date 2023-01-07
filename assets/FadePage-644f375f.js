var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{F as i}from"./Fade-9725f06a.js";import{C as c}from"./ComponentInfo-fb88dbff.js";import{B as o}from"./ListItemText-97540f66.js";import{F as s}from"./FormControlLabel-6737e70d.js";import{P as p}from"./Paper-355f0f45.js";import{S as l}from"./Switch-41f8f7ae.js";import{a as h,c as e,u as d}from"./ErrorPage-7e24a11e.js";import"./Transition-7a622ec2.js";import"./TransitionContext-3444aaa0.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-ed897386.js";import"./useFormControl-b0cba849.js";import"./SwitchBase-316ad80d.js";import"./useControlled-4747f91f.js";function u(){const n=d();return e(p,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function m(){const[n,r]=h(!1);return e(o,{sx:{height:180},get children(){return[e(s,{get control(){return e(l,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(m,"SimpleFade");m.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
