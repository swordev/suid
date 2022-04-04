var i=Object.defineProperty;var t=(n,e)=>i(n,"name",{value:e,configurable:!0});import{u as l,d as c,K as s}from"./index.90bba7b1.js";import{C as d}from"./ComponentInfo.5f5b447b.js";import{e as u,r as p,a as r,t as f}from"./vendor.37d14b95.js";import"./Link.cc833b14.js";import"./copyText.78cd2380.js";import"./PaperCode.759a44a2.js";const k=f("<div></div>");function m(){const n=l(),[e,a]=u(!1);return(()=>{const o=k.cloneNode(!0);return p(o,r(c,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),o})()}t(m,"SimpleBackdrop");m.code=`import Backdrop from "@suid/material/Backdrop";
import Button from "@suid/material/Button";
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
`;function v(){return r(d,{get name(){return s.name},examples:[{component:m,title:!1}]})}t(v,"BackdropPage");export{v as default};
