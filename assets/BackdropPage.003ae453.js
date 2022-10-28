var l=Object.defineProperty;var t=(n,e)=>l(n,"name",{value:e,configurable:!0});import{i as c,a as m,a7 as s,d as r,t as d,h as u,a8 as p}from"./index.9795753c.js";import{C as f}from"./ComponentInfo.69c4d456.js";import"./Link.2927b89b.js";import"./copyText.9664b0a5.js";import"./PaperCode.55644e03.js";const k=d("<div></div>");function i(){const n=c(),[e,a]=m(!1);return(()=>{const o=k.cloneNode(!0);return s(o,r(u,{onClick:()=>a(!e()),children:"Show backdrop"}),null),s(o,r(p,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),o})()}t(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
`;function I(){return r(f,{get name(){return p.name},examples:[{component:i,title:!1}]})}t(I,"BackdropPage");export{I as default};
