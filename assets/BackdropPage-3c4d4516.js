var s=Object.defineProperty;var t=(n,e)=>s(n,"name",{value:e,configurable:!0});import{B as m}from"./Backdrop-badd62fd.js";import{C as c}from"./ComponentInfo-fb88dbff.js";import{u as l,a as d,P as a,c as r,t as u}from"./ErrorPage-7e24a11e.js";import{b as f}from"./ListItemText-97540f66.js";import"./Fade-9725f06a.js";import"./Transition-7a622ec2.js";import"./TransitionContext-3444aaa0.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const k=u("<div></div>");function i(){const n=l(),[e,p]=d(!1);return(()=>{const o=k.cloneNode(!0);return a(o,r(f,{onClick:()=>p(!e()),children:"Show backdrop"}),null),a(o,r(m,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>p(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
