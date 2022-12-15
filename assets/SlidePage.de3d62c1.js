var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{a as p,i as l,d as e,B as o,as as a,P as g,e as u}from"./index.587a1a49.js";import{C as f}from"./ComponentInfo.4db125cf.js";import{F as x}from"./FormControlLabel.0dee7251.js";import{S}from"./Switch.8a0730f6.js";import"./Link.687f6c0c.js";import"./copyText.f7152695.js";import"./PaperCode.04f8488e.js";import"./formControlState.626ebbf4.js";import"./useFormControl.1400cb42.js";import"./SwitchBase.64966e2d.js";import"./useControlled.dc7add2c.js";function w(){const n=l();return e(g,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function m(){const[n,r]=p(!1),h=l(),i=u(),c=t(()=>{r(d=>!d)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:h.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(x,{get control(){return e(S,{get checked(){return n()},onChange:c})},label:"Show"}),e(a,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(m,"SimpleSlide");m.code=`import { useTheme } from "@suid/material";
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
`;function L(){return e(f,{get name(){return a.name},docsName:"transitions",examples:[m]})}t(L,"SlidePage");export{L as default};
