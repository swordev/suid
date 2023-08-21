var c=Object.defineProperty;var t=(n,r)=>c(n,"name",{value:r,configurable:!0});import{a as s,d as e,B as o,F as i,i as m,P as l}from"./index-320a95d9.js";import{C as h}from"./ComponentInfo-482cd188.js";import{F as d}from"./FormControlLabel-d742b687.js";import{S as p}from"./Switch-811cf6b9.js";import"./Link-0ee08c84.js";import"./copyText-90423322.js";import"./PaperCode-4e868256.js";import"./formControlState-b41dbc4a.js";import"./useFormControl-0f0969ff.js";import"./SwitchBase-f655c8af.js";import"./useControlled-1140f948.js";function u(){const n=m();return e(l,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=s(!1);return e(o,{sx:{height:180},get children(){return[e(d,{get control(){return e(p,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
`;function y(){return e(h,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:a}]})}t(y,"FadePage");export{y as default};
