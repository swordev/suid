var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as a}from"./Backdrop-20febe86.js";import{C as c}from"./ComponentInfo-255fb34b.js";import{g as l,h as d,U as m,c as r,t as u}from"./ErrorPage-eb59dadb.js";import{d as f}from"./ListItemText-0f600c95.js";import"./Fade-30a6d6fc.js";import"./Transition-bc56156e.js";import"./TransitionContext-df29228f.js";import"./Link-aba4ea2c.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./Paper-32f89a64.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>",2);function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return m(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),m(o,r(a,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
