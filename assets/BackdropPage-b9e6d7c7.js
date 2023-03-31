var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as a}from"./Backdrop-c6d4e425.js";import{C as c}from"./ComponentInfo-866f98ce.js";import{g as l,h as d,U as m,c as r,t as u}from"./ErrorPage-899a3c74.js";import{d as f}from"./ListItemText-6803f35f.js";import"./Fade-b713518c.js";import"./Transition-9315d1e9.js";import"./TransitionContext-bda86cd3.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>",2);function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return m(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),m(o,r(a,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
