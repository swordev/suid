var m=Object.defineProperty;var t=(n,e)=>m(n,"name",{value:e,configurable:!0});import{u as c,a as l,ab as p,d as r,h as d,ac as s,t as u}from"./index.30c7ab8a.js";import{C as f}from"./ComponentInfo.ea6dbfc9.js";import"./Link.1ad6cfad.js";import"./copyText.4c537fad.js";import"./PaperCode.06945c94.js";const k=u("<div></div>");function i(){const n=c(),[e,a]=l(!1);return(()=>{const o=k.cloneNode(!0);return p(o,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import Backdrop from "@suid/material/Backdrop";
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
