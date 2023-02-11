var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{S as m}from"./Slide-459f0baa.js";import{C as p}from"./ComponentInfo-d01e77a6.js";import{h as g,g as l,c as e}from"./ErrorPage-5efa7331.js";import{B as o,h as f}from"./ListItemText-7861bce7.js";import{F as u}from"./FormControlLabel-d572a712.js";import{P as x}from"./Paper-b94e5972.js";import{S}from"./Switch-efbf70e4.js";import"./Transition-bfcaa0e0.js";import"./TransitionContext-8fdaef14.js";import"./debounce-60370e19.js";import"./ownerWindow-09898c5b.js";import"./ownerDocument-5bb7a871.js";import"./Link-b6cacc18.js";import"./copyText-9e269238.js";import"./IconButton-7ca039fe.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-a3975f0a.js";import"./useFormControl-8fcff4a5.js";import"./SwitchBase-cd4bd27d.js";import"./useControlled-405fff41.js";function w(){const n=l();return e(x,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function a(){const[n,r]=g(!1),h=l(),i=f(),c=t(()=>{r(d=>!d)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:h.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(u,{get control(){return e(S,{get checked(){return n()},onChange:c})},label:"Show"}),e(m,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(a,"SimpleSlide");a.code=`import { useTheme } from "@suid/material";
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
`;function O(){return e(p,{get name(){return m.name},docsName:"transitions",examples:[a]})}t(O,"SlidePage");export{O as default};
