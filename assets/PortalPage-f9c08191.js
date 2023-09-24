var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{h as t,at as h,au as x,a as b,E as l,b as s,B as c,t as m,ac as k}from"./index-687395e5.js";import{C as w}from"./ComponentInfo-bd875933.js";import"./Link-85734f9a.js";import"./copyText-85cadcb7.js";import"./PaperCode-fd6d07d9.js";function u(e){return t(h,e)}n(u,"Portal");const g=m('<div><button type="button">'),y=m("<span>But I actually render here!");function d(){const[e,o]=b(!1),a=k(),p=n(()=>{o(!e())},"handleClick");return(()=>{const r=g(),i=r.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(u,{get container(){return a.ref},get children(){return y()}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(d,"SimplePortal");d.code=`import { Box, Portal } from "@suid/material";
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
`;x(["click"]);function E(){return t(w,{get name(){return u.name},examples:[d]})}n(E,"PortalPage");export{E as default};
