var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{S as m}from"./Slide-b980a5c0.js";import{C as p}from"./ComponentInfo-fb88dbff.js";import{a as g,u as l,c as e}from"./ErrorPage-7e24a11e.js";import{B as o,f}from"./ListItemText-97540f66.js";import{F as u}from"./FormControlLabel-6737e70d.js";import{P as x}from"./Paper-355f0f45.js";import{S}from"./Switch-41f8f7ae.js";import"./Transition-7a622ec2.js";import"./TransitionContext-3444aaa0.js";import"./debounce-60370e19.js";import"./ownerWindow-09898c5b.js";import"./ownerDocument-5bb7a871.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-ed897386.js";import"./useFormControl-b0cba849.js";import"./SwitchBase-316ad80d.js";import"./useControlled-4747f91f.js";function w(){const n=l();return e(x,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function a(){const[n,r]=g(!1),c=l(),i=f(),h=t(()=>{r(d=>!d)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:c.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(u,{get control(){return e(S,{get checked(){return n()},onChange:h})},label:"Show"}),e(m,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(a,"SimpleSlide");a.code=`import { useTheme } from "@suid/material";
import { Box, FormControlLabel, Paper, Slide, Switch } from "@suid/material";
import createElementRef from "@suid/system/createElementRef";
import { createSignal } from "solid-js";

function Icon() {
  const theme = useTheme();
  return (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
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

export default function SimpleSlide() {
  const [checked, setChecked] = createSignal(false);
  const theme = useTheme();
  const element = createElementRef();
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 180,
        width: 240,
        display: "flex",
        padding: 2,
        borderRadius: 1,
        bgcolor: theme.palette.mode === "light" ? "grey.100" : "grey.900",
        overflow: "hidden",
      }}
      ref={element}
    >
      <Box sx={{ width: 200 }}>
        <FormControlLabel
          control={<Switch checked={checked()} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked()} container={element.ref}>
          <Icon />
        </Slide>
      </Box>
    </Box>
  );
}
`;function M(){return e(p,{get name(){return m.name},docsName:"transitions",examples:[a]})}t(M,"SlidePage");export{M as default};
