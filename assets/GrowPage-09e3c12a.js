var l=Object.defineProperty;var t=(n,r)=>l(n,"name",{value:r,configurable:!0});import{G as i}from"./Grow-c7f69e47.js";import{C as p}from"./ComponentInfo-fb88dbff.js";import{a as h,c as e,w as d,u as g}from"./ErrorPage-7e24a11e.js";import{B as o}from"./ListItemText-97540f66.js";import{F as u}from"./FormControlLabel-6737e70d.js";import{P as f}from"./Paper-355f0f45.js";import{S as x}from"./Switch-41f8f7ae.js";import"./Transition-7a622ec2.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-ed897386.js";import"./useFormControl-b0cba849.js";import"./SwitchBase-316ad80d.js";import"./useControlled-4747f91f.js";function m(){const n=g();return e(f,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(m,"Icon");function a(){const[n,r]=h(!1),s=t(()=>{r(c=>!c)},"handleChange");return e(o,{sx:{height:180},get children(){return[e(u,{get control(){return e(x,{get checked(){return n()},onChange:s})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return[e(i,{get in(){return n()},get children(){return e(m,{})}}),e(i,d({get in(){return n()},style:{transformOrigin:"0 0 0"}},()=>n()?{timeout:1e3}:{},{get children(){return e(m,{})}}))]}})]}})}t(a,"SimpleGrow");a.code=`import { useTheme } from "@suid/material";
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
`;function A(){return e(p,{get name(){return i.name},docsName:"transitions",examples:[a]})}t(A,"GrowPage");export{A as default};
