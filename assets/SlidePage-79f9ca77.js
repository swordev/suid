var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{S as m}from"./Slide-52d0b01d.js";import{C as p}from"./ComponentInfo-255fb34b.js";import{h as g,g as l,c as e}from"./ErrorPage-eb59dadb.js";import{B as o,h as f}from"./ListItemText-0f600c95.js";import{F as u}from"./FormControlLabel-1cf3dbc1.js";import{P as x}from"./Paper-32f89a64.js";import{S}from"./Switch-31d659e9.js";import"./Transition-bc56156e.js";import"./TransitionContext-df29228f.js";import"./debounce-60370e19.js";import"./ownerWindow-09898c5b.js";import"./ownerDocument-5bb7a871.js";import"./Link-aba4ea2c.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-e36a5f4b.js";import"./useFormControl-b1bf8326.js";import"./SwitchBase-6fef974c.js";import"./useControlled-92c01364.js";function w(){const n=l();return e(x,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function a(){const[n,r]=g(!1),h=l(),i=f(),c=t(()=>{r(d=>!d)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:h.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(u,{get control(){return e(S,{get checked(){return n()},onChange:c})},label:"Show"}),e(m,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(a,"SimpleSlide");a.code=`import { useTheme } from "@suid/material";
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
