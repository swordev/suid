import{U as s,B as a,a as p}from"./index.ae27f545.js";import{C as f}from"./ComponentInfo.6103a8aa.js";import{C as h,a as x,t as o,d as n,j as i,v as c}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const b=c('<div><button type="button"></button></div>'),k=c("<span>But I actually render here!</span>");function m(){const[t,d]=x(!1),r=p(),u=()=>{d(!t())};return(()=>{const e=b.cloneNode(!0),l=e.firstChild;return l.$$click=u,o(l,()=>t()?"Unmount children":"Mount children"),o(e,n(a,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",i(()=>i(()=>!!t(),!0)()?n(s,{get container(){return r.ref},get children(){return k.cloneNode(!0)}}):null)]}}),null),o(e,n(a,{sx:{p:1,my:1,border:"1px solid"},ref:r}),null),e})()}m.code=`import Portal from "@suid/base/Portal";
import Box from "@suid/material/Box";
import createElementRef from "@suid/system/createElementRef";
import { createSignal } from "solid-js";

export default function SimplePortal() {
  const [show, setShow] = createSignal(false);
  const container = createElementRef();

  const handleClick = () => {
    setShow(!show());
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {show() ? "Unmount children" : "Mount children"}
      </button>
      <Box sx={{ p: 1, my: 1, border: "1px solid" }}>
        It looks like I will render here.
        {show() ? (
          <Portal container={container.ref}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </Box>
      <Box sx={{ p: 1, my: 1, border: "1px solid" }} ref={container} />
    </div>
  );
}
`;h(["click"]);function P(){return n(f,{get name(){return s.name},examples:[m]})}export{P as default};
