var p=Object.defineProperty;var t=(n,r)=>p(n,"name",{value:r,configurable:!0});import{G as i}from"./Grow-b767e278.js";import{C as h}from"./ComponentInfo-ca810fe5.js";import{h as l,c as e,p as d,g}from"./ErrorPage-8328033b.js";import{B as o}from"./ListItemText-8378536b.js";import{F as u}from"./FormControlLabel-08fd82fc.js";import{P as f}from"./Paper-a16bc6e4.js";import{S as x}from"./Switch-9f9d642d.js";import"./Transition-4490bae5.js";import"./Link-35e0690e.js";import"./copyText-7f7fdd67.js";import"./IconButton-b07a3030.js";import"./PaperCode-37b8f2db.js";import"./PageNav-912c7d1d.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-4f481a8f.js";import"./useFormControl-99bcea9b.js";import"./SwitchBase-f8b7ab76.js";import"./useControlled-3e967372.js";function m(){const n=g();return e(f,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(m,"Icon");function a(){const[n,r]=l(!1),s=t(()=>{r(c=>!c)},"handleChange");return e(o,{sx:{height:180},get children(){return[e(u,{get control(){return e(x,{get checked(){return n()},onChange:s})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return[e(i,{get in(){return n()},get children(){return e(m,{})}}),e(i,d({get in(){return n()},style:{transformOrigin:"0 0 0"}},()=>n()?{timeout:1e3}:{},{get children(){return e(m,{})}}))]}})]}})}t(a,"SimpleGrow");a.code=`import { useTheme } from "@suid/material";
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
