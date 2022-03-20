import{u as r,B as t,d as c,S as i,p as h,a as p}from"./index.ae27f545.js";import{C as u}from"./ComponentInfo.6103a8aa.js";import{a as f,d as e}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function g(){const n=r();return e(h,{sx:{m:1,width:100,height:100},elevation:4,get children(){return e(t,{component:"svg",sx:{width:100,height:100},get children(){return e(t,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}function d(){const[n,l]=f(!1),a=r(),o=p(),m=()=>{l(s=>!s)};return e(t,{get sx(){return{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:a.palette.mode==="light"?"grey.100":"grey.900",overflow:"hidden"}},ref:o,get children(){return e(t,{sx:{width:200},get children(){return[e(c,{onClick:m,get children(){return n()?"true":"false"}}),e(i,{direction:"up",get in(){return n()},get container(){return o.ref},get children(){return e(g,{})}})]}})}})}d.code=`import { useTheme } from "@suid/material";
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
`;function C(){return e(u,{component:i,examples:[d]})}export{C as default};
