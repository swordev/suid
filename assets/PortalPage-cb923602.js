var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{d as t,aS as h,Z as x,a as w,w as l,p as s,B as c,t as m,e as k}from"./index-570dda9b.js";import{C as b}from"./ComponentInfo-c32346de.js";import"./Link-4c8cf3cb.js";import"./copyText-d7b508be.js";import"./PaperCode-1953c3c7.js";function u(e){return t(h,e)}n(u,"Portal");const g=m('<div><button type="button">'),y=m("<span>But I actually render here!");function d(){const[e,o]=w(!1),a=k(),p=n(()=>{o(!e())},"handleClick");return(()=>{const r=g(),i=r.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(u,{get container(){return a.ref},get children(){return y()}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(d,"SimplePortal");d.code=`import { Box, Portal } from "@suid/material";
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
`;x(["click"]);function E(){return t(b,{get name(){return u.name},examples:[d]})}n(E,"PortalPage");export{E as default};
