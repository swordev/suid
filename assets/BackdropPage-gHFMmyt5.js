var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{u as i,a as c,t as d,F as p,h as r,A as u,H as s}from"./index-COI4Ufax.js";import{C as f}from"./ComponentInfo-yGqxOQ4_.js";import"./Link-hQL6lNqD.js";import"./copyText-Dqd6Kcdt.js";import"./PaperCode-DVVPcKbF.js";var k=d("<div>");function l(){const t=i(),[n,a]=c(!1);return(()=>{var o=k();return p(o,r(u,{onClick:e(()=>a(!n()),"onClick"),children:"Show backdrop"}),null),p(o,r(s,{get sx(){return{color:"#fff",zIndex:t.zIndex.drawer+1}},get open(){return n()},onClick:e(()=>a(!1),"onClick")}),null),o})()}e(l,"SimpleBackdrop");l.code=`import { Backdrop, Button } from "@suid/material";
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
