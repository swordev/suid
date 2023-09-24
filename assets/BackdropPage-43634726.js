var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{u as c,a as i,E as s,h as r,z as d,F as p,t as u}from"./index-687395e5.js";import{C as f}from"./ComponentInfo-bd875933.js";import"./Link-85734f9a.js";import"./copyText-85cadcb7.js";import"./PaperCode-fd6d07d9.js";const k=u("<div>");function l(){const n=c(),[e,a]=i(!1);return(()=>{const t=k();return s(t,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),s(t,r(p,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),t})()}o(l,"SimpleBackdrop");l.code=`import { Backdrop, Button } from "@suid/material";
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
`;function z(){return r(f,{get name(){return p.name},examples:[{component:l,title:!1}]})}o(z,"BackdropPage");export{z as default};
