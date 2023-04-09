var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{i as l,a as c,w as p,d as r,h as d,x as s,t as u}from"./index-02d32149.js";import{C as f}from"./ComponentInfo-62712aad.js";import"./Link-11e90053.js";import"./copyText-bcdf63f6.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";const k=u("<div>");function i(){const n=l(),[e,a]=c(!1);return(()=>{const t=k();return p(t,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(t,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),t})()}o(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
`;function I(){return r(f,{get name(){return s.name},examples:[{component:i,title:!1}]})}o(I,"BackdropPage");export{I as default};
