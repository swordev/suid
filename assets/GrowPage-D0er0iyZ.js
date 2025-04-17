var h=Object.defineProperty;var t=(n,r)=>h(n,"name",{value:r,configurable:!0});import{G as i}from"./Grow-BLraMvOo.js";import{C as l}from"./ComponentInfo-BSVXmdCc.js";import{a as p,h as e,B as o,m as d,u as g,L as u}from"./index-Bo6RAevH.js";import{F as f}from"./FormControlLabel-BwRn15j4.js";import{S as x}from"./Switch-W-EhNUWz.js";import"./Link-DW3jl7Y4.js";import"./copyText-Bu12eD7D.js";import"./PaperCode-Bp4T0X-x.js";import"./formControlState-CcetVVbl.js";import"./useFormControl-BUZ040gn.js";import"./SwitchBase-kGAYSRDs.js";import"./useControlled-DLu5nB0p.js";function a(){const n=g();return e(u,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(a,"Icon");function m(){const[n,r]=p(!1),s=t(()=>{r(c=>!c)},"handleChange");return e(o,{sx:{height:180},get children(){return[e(f,{get control(){return e(x,{get checked(){return n()},onChange:s})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return[e(i,{get in(){return n()},get children(){return e(a,{})}}),e(i,d({get in(){return n()},style:{transformOrigin:"0 0 0"}},()=>n()?{timeout:1e3}:{},{get children(){return e(a,{})}}))]}})]}})}t(m,"SimpleGrow");m.code=`import { useTheme } from "@suid/material";
import { Box, FormControlLabel, Grow, Paper, Switch } from "@suid/material";
import { createSignal } from "solid-js";

function Icon() {
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

export default function SimpleGrow() {
  const [checked, setChecked] = createSignal(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked()} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: "flex" }}>
        <Grow in={checked()}>
          <Icon />
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked()}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked() ? { timeout: 1000 } : {})}
        >
          <Icon />
        </Grow>
      </Box>
    </Box>
  );
}
`;function T(){return e(l,{get name(){return i.name},docsName:"transitions",examples:[m]})}t(T,"GrowPage");export{T as default};
