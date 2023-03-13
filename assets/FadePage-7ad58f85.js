var a=Object.defineProperty;var t=(n,r)=>a(n,"name",{value:r,configurable:!0});import{F as i}from"./Fade-51d18534.js";import{C as c}from"./ComponentInfo-1eac72a6.js";import{B as o}from"./ListItemText-be55e132.js";import{F as s}from"./FormControlLabel-1a5bade9.js";import{P as p}from"./Paper-32f89a64.js";import{S as l}from"./Switch-c4f3ff5a.js";import{h,c as e,g as d}from"./ErrorPage-eb59dadb.js";import"./Transition-bc56156e.js";import"./TransitionContext-df29228f.js";import"./Link-123f7416.js";import"./copyText-dae2e1ef.js";import"./IconButton-c6b31999.js";import"./PaperCode-b3aeccfd.js";import"./PageNav-652b02ba.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-e36a5f4b.js";import"./useFormControl-b1bf8326.js";import"./SwitchBase-ea237e5a.js";import"./useControlled-92c01364.js";function u(){const n=d();return e(p,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function m(){const[n,r]=h(!1);return e(o,{sx:{height:180},get children(){return[e(s,{get control(){return e(l,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(m,"SimpleFade");m.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
