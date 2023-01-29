var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{F as i}from"./Fade-01e40c87.js";import{C as c}from"./ComponentInfo-f3f6ea7d.js";import{B as o}from"./ListItemText-0fefb047.js";import{F as s}from"./FormControlLabel-d53d9832.js";import{P as p}from"./Paper-992c85e1.js";import{S as l}from"./Switch-5ca8559d.js";import{h,c as e,g as d}from"./ErrorPage-50341dca.js";import"./Transition-53896a82.js";import"./TransitionContext-f48b0a64.js";import"./Link-09b4138b.js";import"./copyText-7f91c599.js";import"./IconButton-78ead2c8.js";import"./PaperCode-12d52286.js";import"./PageNav-b6a8a27e.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-988c3d78.js";import"./useFormControl-55851753.js";import"./SwitchBase-17bae33c.js";import"./useControlled-fee202e5.js";function u(){const n=d();return e(p,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function m(){const[n,r]=h(!1);return e(o,{sx:{height:180},get children(){return[e(s,{get control(){return e(l,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(m,"SimpleFade");m.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
