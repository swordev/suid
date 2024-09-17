var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{u as i,a as c,E as p,h as r,z as d,F as s,t as u}from"./index-QA7pP0xH.js";import{C as f}from"./ComponentInfo-Cp9In596.js";import"./Link-BRU1W-2I.js";import"./copyText-DYDM2w-T.js";import"./PaperCode-2wa1Y67L.js";var k=u("<div>");function l(){const t=i(),[n,a]=c(!1);return(()=>{var o=k();return p(o,r(d,{onClick:e(()=>a(!n()),"onClick"),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:t.zIndex.drawer+1}},get open(){return n()},onClick:e(()=>a(!1),"onClick")}),null),o})()}e(l,"SimpleBackdrop");l.code=`import { Backdrop, Button } from "@suid/material";
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
