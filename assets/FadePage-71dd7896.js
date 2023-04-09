var c=Object.defineProperty;var t=(n,r)=>c(n,"name",{value:r,configurable:!0});import{a as m,d as e,B as o,F as i,i as s,P as l}from"./index-02d32149.js";import{C as h}from"./ComponentInfo-62712aad.js";import{F as p}from"./FormControlLabel-aa201159.js";import{S as d}from"./Switch-83c7e0c1.js";import"./Link-11e90053.js";import"./copyText-bcdf63f6.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";import"./formControlState-f16b1249.js";import"./useFormControl-c4325a3f.js";import"./SwitchBase-3a7c23cc.js";import"./useControlled-e93040d8.js";function u(){const n=s();return e(l,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=m(!1);return e(o,{sx:{height:180},get children(){return[e(p,{get control(){return e(d,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
`;function I(){return e(h,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:a}]})}t(I,"FadePage");export{I as default};
