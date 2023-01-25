var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as a}from"./Backdrop-ed76d5d0.js";import{C as c}from"./ComponentInfo-0bebdfdd.js";import{g as l,h as d,U as m,c as r,t as u}from"./ErrorPage-e9c3e4c4.js";import{d as f}from"./ListItemText-90f79698.js";import"./Fade-d4a94a87.js";import"./Transition-4ac6f36d.js";import"./TransitionContext-d662a7b0.js";import"./Link-0e989b73.js";import"./copyText-94cbea7d.js";import"./IconButton-2fc4716d.js";import"./Paper-154b1d70.js";import"./PaperCode-3ff01054.js";import"./PageNav-5acb3c23.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>",2);function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return m(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),m(o,r(a,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
