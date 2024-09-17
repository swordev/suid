var s=Object.defineProperty;var t=(n,r)=>s(n,"name",{value:r,configurable:!0});import{a as p,u as a,h as e,B as o,ab as l,L as g,ac as u}from"./index-DmdlqfLA.js";import{C as f}from"./ComponentInfo-DoPgdPtG.js";import{F as x}from"./FormControlLabel-ByxaIhR_.js";import{S}from"./Switch-BdkbJGXt.js";import"./Link-CGlR9hJt.js";import"./copyText-C5Z1yx-s.js";import"./PaperCode-B3sw9ua7.js";import"./formControlState-CKCbx4M1.js";import"./useFormControl-B9P-65lh.js";import"./SwitchBase-dfhN3cXk.js";import"./useControlled-CpJYiW8g.js";function w(){const n=a();return e(g,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(w,"Icon");function m(){const[n,r]=p(!1),h=a(),i=u(),c=t(()=>{r(d=>!d)},"handleChange");return e(o,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:h.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(o,{sx:{width:200},get children(){return[e(x,{get control(){return e(S,{get checked(){return n()},onChange:c})},label:"Show"}),e(l,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(w,{})}})]}})}})}t(m,"SimpleSlide");m.code=`import { useTheme } from "@suid/material";
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
`;function T(){return e(f,{get name(){return l.name},docsName:"transitions",examples:[m]})}t(T,"SlidePage");export{T as default};
