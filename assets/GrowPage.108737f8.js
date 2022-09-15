var c=Object.defineProperty;var t=(n,r)=>c(n,"name",{value:r,configurable:!0});import{G as i}from"./Grow.05a6db84.js";import{C as h}from"./ComponentInfo.235f309e.js";import{a as p,d as e,B as o,m as d,i as u,P as g}from"./index.94b113cc.js";import{F as f}from"./FormControlLabel.90379666.js";import{S as x}from"./Switch.8b6b02f6.js";import"./Link.a08bb7e6.js";import"./copyText.b98a3edd.js";import"./PaperCode.4611f55b.js";import"./formControlState.4aea16df.js";import"./useFormControl.1a0706d5.js";import"./SwitchBase.bfb4eb7d.js";import"./useControlled.298ee112.js";function a(){const n=u();return e(g,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(a,"Icon");function m(){const[n,r]=p(!1),s=t(()=>{r(l=>!l)},"handleChange");return e(o,{sx:{height:180},get children(){return[e(f,{get control(){return e(x,{get checked(){return n()},onChange:s})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return[e(i,{get in(){return n()},get children(){return e(a,{})}}),e(i,d({get in(){return n()},style:{transformOrigin:"0 0 0"}},()=>n()?{timeout:1e3}:{},{get children(){return e(a,{})}}))]}})]}})}t(m,"SimpleGrow");m.code=`import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import FormControlLabel from "@suid/material/FormControlLabel";
import Grow from "@suid/material/Grow";
import Paper from "@suid/material/Paper";
import Switch from "@suid/material/Switch";
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
`;function T(){return e(h,{get name(){return i.name},docsName:"transitions",examples:[m]})}t(T,"GrowPage");export{T as default};
