var h=Object.defineProperty;var t=(n,o)=>h(n,"name",{value:o,configurable:!0});import{u as a,B as r,d as p,V as l,P as u,a as g}from"./index.ef22901d.js";import{C as f}from"./ComponentInfo.8363f4df.js";import{a as x,d as e}from"./vendor.7f6460ea.js";import"./copyText.22202dfa.js";import"./PaperCode.518557f3.js";function B(){const n=a();return e(u,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(r,{component:"svg",sx:{width:100,height:100},get children(){return e(r,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(B,"Icon");function d(){const[n,o]=x(!1),m=a(),i=g(),s=t(()=>{o(c=>!c)},"handleChange");return e(r,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:m.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:i,get children(){return e(r,{sx:{width:200},get children(){return[e(p,{onClick:s,get children(){return n()?"true":"false"}}),e(l,{direction:"up",get in(){return n()},get container(){return i.ref},get children(){return e(B,{})}})]}})}})}t(d,"SimpleSlide");d.code=`import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Paper from "@suid/material/Paper";
import Slide from "@suid/material/Slide";
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
        <Button onClick={handleChange}>{checked() ? "true" : "false"}</Button>
        <Slide direction="up" in={checked()} container={element.ref}>
          <Icon />
        </Slide>
      </Box>
    </Box>
  );
}
`;function P(){return e(f,{get name(){return l.name},examples:[d]})}t(P,"SlidePage");export{P as default};
