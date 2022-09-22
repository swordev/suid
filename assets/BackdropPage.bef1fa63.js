var m=Object.defineProperty;var t=(n,e)=>m(n,"name",{value:e,configurable:!0});import{i as l,a as c,a7 as p,d as r,t as d,h as u,a8 as s}from"./index.8b7a70ce.js";import{C as f}from"./ComponentInfo.30c5dde0.js";import"./Link.3fa490b7.js";import"./copyText.5239add6.js";import"./PaperCode.0f702b11.js";const k=d("<div></div>");function i(){const n=l(),[e,a]=c(!1);return(()=>{const o=k.cloneNode(!0);return p(o,r(u,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import Backdrop from "@suid/material/Backdrop";
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
`;function I(){return r(f,{get name(){return s.name},examples:[{component:i,title:!1}]})}t(I,"BackdropPage");export{I as default};
