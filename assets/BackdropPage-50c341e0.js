var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as a}from"./Backdrop-a8bde6a1.js";import{C as c}from"./ComponentInfo-f3f6ea7d.js";import{g as l,h as d,U as m,c as r,t as u}from"./ErrorPage-50341dca.js";import{d as f}from"./ListItemText-0fefb047.js";import"./Fade-01e40c87.js";import"./Transition-53896a82.js";import"./TransitionContext-f48b0a64.js";import"./Link-09b4138b.js";import"./copyText-7f91c599.js";import"./IconButton-78ead2c8.js";import"./Paper-992c85e1.js";import"./PaperCode-12d52286.js";import"./PageNav-b6a8a27e.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>",2);function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return m(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),m(o,r(a,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
