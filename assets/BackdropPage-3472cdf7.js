var l=Object.defineProperty;var o=(n,e)=>l(n,"name",{value:e,configurable:!0});import{i as m,a as c,w as s,d as r,h as d,x as p,t as u}from"./index-758be31d.js";import{C as f}from"./ComponentInfo-1be43eb8.js";import"./Link-532b1cef.js";import"./copyText-10a4e128.js";import"./PaperCode-40407633.js";const k=u("<div>");function i(){const n=m(),[e,a]=c(!1);return(()=>{const t=k();return s(t,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),s(t,r(p,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),t})()}o(i,"SimpleBackdrop");i.code=`import { Backdrop, Button } from "@suid/material";
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
`;function w(){return r(f,{get name(){return p.name},examples:[{component:i,title:!1}]})}o(w,"BackdropPage");export{w as default};
