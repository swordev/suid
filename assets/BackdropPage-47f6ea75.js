var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as a}from"./Backdrop-743645f6.js";import{C as c}from"./ComponentInfo-d01e77a6.js";import{g as l,h as d,U as m,c as r,t as u}from"./ErrorPage-5efa7331.js";import{d as f}from"./ListItemText-7861bce7.js";import"./Fade-d34ae39c.js";import"./Transition-bfcaa0e0.js";import"./TransitionContext-8fdaef14.js";import"./Link-b6cacc18.js";import"./copyText-9e269238.js";import"./IconButton-7ca039fe.js";import"./Paper-b94e5972.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>",2);function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return m(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),m(o,r(a,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
`;function N(){return r(c,{get name(){return a.name},examples:[{component:i,title:!1}]})}t(N,"BackdropPage");export{N as default};
