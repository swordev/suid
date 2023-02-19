var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{F as i}from"./Fade-10d26dbd.js";import{C as c}from"./ComponentInfo-1421c72d.js";import{B as o}from"./ListItemText-c14572bd.js";import{F as s}from"./FormControlLabel-99a43f2e.js";import{P as p}from"./Paper-e344694e.js";import{S as l}from"./Switch-3b214552.js";import{h,c as e,g as d}from"./ErrorPage-8beed0e1.js";import"./Transition-6480ccf7.js";import"./TransitionContext-87ef00d2.js";import"./Link-0bbd356f.js";import"./copyText-be8cac60.js";import"./IconButton-578b62ce.js";import"./PaperCode-b1002cf2.js";import"./PageNav-de163c78.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-0f396d16.js";import"./useFormControl-c16d9945.js";import"./SwitchBase-d680da23.js";import"./useControlled-9a4fc4dd.js";function u(){const n=d();return e(p,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function m(){const[n,r]=h(!1);return e(o,{sx:{height:180},get children(){return[e(s,{get control(){return e(l,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(m,"SimpleFade");m.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
`;function D(){return e(c,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:m}]})}t(D,"FadePage");export{D as default};
