var m=Object.defineProperty;var t=(n,e)=>m(n,"name",{value:e,configurable:!0});import{j as l,a as c,x as p,d as r,i as d,y as s,e as u}from"./index-d23866de.js";import{C as f}from"./ComponentInfo-1aac651c.js";import"./Link-af594e99.js";import"./copyText-288aae3f.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";const k=u("<div>");function i(){const n=l(),[e,a]=c(!1);return(()=>{const o=k();return p(o,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export default function SimpleBackdrop() {
  const theme = useTheme();
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open())}>Show backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
        open={open()}
        onClick={() => setOpen(false)}
      ></Backdrop>
    </div>
  );
}
`;function w(){return r(f,{get name(){return s.name},examples:[{component:i,title:!1}]})}t(w,"BackdropPage");export{w as default};
