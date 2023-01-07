var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as m}from"./Backdrop-41305eb6.js";import{C as c}from"./ComponentInfo-3f416a39.js";import{u as l,a as d,P as a,c as r,t as u}from"./ErrorPage-ac5239e5.js";import{b as f}from"./ListItemText-f1fd78c0.js";import"./Fade-9373b7d0.js";import"./Transition-750bbfe3.js";import"./TransitionContext-2788a4e7.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>");function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return a(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),a(o,r(m,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
`;function j(){return r(c,{get name(){return m.name},examples:[{component:i,title:!1}]})}t(j,"BackdropPage");export{j as default};
