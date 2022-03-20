import{u as m,d as i,z as a}from"./index.ae27f545.js";import{C as c}from"./ComponentInfo.6103a8aa.js";import{a as l,t as r,d as n,v as d}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const u=d("<div></div>");function p(){const s=m(),[o,t]=l(!1);return(()=>{const e=u.cloneNode(!0);return r(e,n(i,{onClick:()=>t(!o()),children:"Show backdrop"}),null),r(e,n(a,{get sx(){return{color:"#fff",zIndex:s.zIndex.drawer+1}},get open(){return o()},onClick:()=>t(!1)}),null),e})()}p.code=`import Backdrop from "@suid/material/Backdrop";
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
`;function g(){return n(c,{get name(){return a.name},examples:[p]})}export{g as default};
