var p=Object.defineProperty;var t=(n,r)=>p(n,"name",{value:r,configurable:!0});import{G as i}from"./Grow-1a20d835.js";import{C as h}from"./ComponentInfo-5876f613.js";import{h as l,c as e,p as d,g}from"./ErrorPage-e9c3e4c4.js";import{B as o}from"./ListItemText-7ae6925f.js";import{F as u}from"./FormControlLabel-b1df9a3d.js";import{P as f}from"./Paper-154b1d70.js";import{S as x}from"./Switch-823e3614.js";import"./Transition-4ac6f36d.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-fc453bb7.js";import"./useFormControl-f248259c.js";import"./SwitchBase-be8f5187.js";import"./useControlled-986171af.js";function m(){const n=g();return e(f,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(m,"Icon");function a(){const[n,r]=l(!1),s=t(()=>{r(c=>!c)},"handleChange");return e(o,{sx:{height:180},get children(){return[e(u,{get control(){return e(x,{get checked(){return n()},onChange:s})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return[e(i,{get in(){return n()},get children(){return e(m,{})}}),e(i,d({get in(){return n()},style:{transformOrigin:"0 0 0"}},()=>n()?{timeout:1e3}:{},{get children(){return e(m,{})}}))]}})]}})}t(a,"SimpleGrow");a.code=`import { useTheme } from "@suid/material";
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
`;function D(){return e(h,{get name(){return i.name},docsName:"transitions",examples:[a]})}t(D,"GrowPage");export{D as default};
