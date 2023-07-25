var l=Object.defineProperty;var o=(n,e)=>l(n,"name",{value:e,configurable:!0});import{i as m,a as c,H as s,d as r,h as d,J as p,t as u}from"./index-35a362a5.js";import{C as f}from"./ComponentInfo-3b79a7d2.js";import"./Link-1db882b6.js";import"./copyText-5d9d4a78.js";import"./PaperCode-7498dd5e.js";const k=u("<div>");function i(){const n=m(),[e,a]=c(!1);return(()=>{const t=k();return s(t,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),s(t,r(p,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),t})()}o(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
`;function I(){return r(f,{get name(){return p.name},examples:[{component:i,title:!1}]})}o(I,"BackdropPage");export{I as default};
