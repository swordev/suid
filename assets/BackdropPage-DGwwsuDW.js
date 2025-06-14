var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{u as i,a as c,t as d,E as p,h as r,z as u,F as s}from"./index-C8Cbba9i.js";import{C as f}from"./ComponentInfo-C3Y-hV1D.js";import"./Link-CxszECJF.js";import"./copyText-Dljb6c8E.js";import"./PaperCode-Bq4agt-h.js";var k=d("<div>");function l(){const t=i(),[n,a]=c(!1);return(()=>{var o=k();return p(o,r(u,{onClick:e(()=>a(!n()),"onClick"),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:t.zIndex.drawer+1}},get open(){return n()},onClick:e(()=>a(!1),"onClick")}),null),o})()}e(l,"SimpleBackdrop");l.code=`import { Backdrop, Button } from "@suid/material";
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
`;function v(){return r(f,{get name(){return s.name},examples:[{component:l,title:!1}]})}e(v,"BackdropPage");export{v as default};
