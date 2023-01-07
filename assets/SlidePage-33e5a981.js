var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{S as m}from"./Slide-7d83e9b2.js";import{C as p}from"./ComponentInfo-3f416a39.js";import{a as g,u as l,c as e}from"./ErrorPage-ac5239e5.js";import{B as o,f}from"./ListItemText-f1fd78c0.js";import{F as u}from"./FormControlLabel-2f69c736.js";import{P as x}from"./Paper-3e60930a.js";import{S}from"./Switch-5e9796ed.js";import"./Transition-750bbfe3.js";import"./TransitionContext-2788a4e7.js";import"./debounce-60370e19.js";import"./ownerWindow-09898c5b.js";import"./ownerDocument-5bb7a871.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-95313d5c.js";import"./useFormControl-e9006b4f.js";import"./SwitchBase-64222138.js";import"./useControlled-0232add8.js";function w(){const n=l();return e(x,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function a(){const[n,r]=g(!1),c=l(),i=f(),h=t(()=>{r(d=>!d)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:c.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(u,{get control(){return e(S,{get checked(){return n()},onChange:h})},label:"Show"}),e(m,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(a,"SimpleSlide");a.code=`import { useTheme } from "@suid/material";
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
