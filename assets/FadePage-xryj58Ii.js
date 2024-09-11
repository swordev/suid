var c=Object.defineProperty;var t=(n,r)=>c(n,"name",{value:r,configurable:!0});import{a as s,h as e,B as o,K as i,u as m,L as l}from"./index-96nJ5ebr.js";import{C as h}from"./ComponentInfo-BBEqkhk-.js";import{F as p}from"./FormControlLabel-CdappLpd.js";import{S as d}from"./Switch-BNm5wjjM.js";import"./Link-BFVZF50d.js";import"./copyText-D9OMJUeU.js";import"./PaperCode-BS9cYccI.js";import"./formControlState-D-DIuDYQ.js";import"./useFormControl-YGSb9dmh.js";import"./SwitchBase-CvG1NaeP.js";import"./useControlled-qjPsNd6F.js";function u(){const n=m();return e(l,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=s(!1);return e(o,{sx:{height:180},get children(){return[e(p,{get control(){return e(d,{get checked(){return n()},onChange:t(()=>r(!n()),"onChange")})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import { Box, Fade, FormControlLabel, Paper, Switch } from "@suid/material";
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
`;function P(){return e(h,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:a}]})}t(P,"FadePage");export{P as default};
