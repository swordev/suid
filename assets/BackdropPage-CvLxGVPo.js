var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{u as i,a as c,E as p,h as r,z as d,F as s,t as u}from"./index-B5iSJVVV.js";import{C as f}from"./ComponentInfo-WIgDFu9h.js";import"./Link-CQQSYQVh.js";import"./copyText-CjKCtXoo.js";import"./PaperCode-BF82PL4L.js";var k=u("<div>");function l(){const n=i(),[e,a]=c(!1);return(()=>{var t=k();return p(t,r(d,{onClick:()=>a(!e()),children:"Show backdrop"}),null),p(t,r(s,{get sx(){return{color:"#fff",zIndex:n.zIndex.drawer+1}},get open(){return e()},onClick:()=>a(!1)}),null),t})()}o(l,"SimpleBackdrop");l.code=`import { Backdrop, Button } from "@suid/material";
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
`;function v(){return r(f,{get name(){return s.name},examples:[{component:l,title:!1}]})}o(v,"BackdropPage");export{v as default};
