var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{U as h,a_ as x,a4 as k,a as w,x as l,d as r,q as s,B as c,e as m,f as b}from"./index-4edd6e97.js";import{C as g}from"./ComponentInfo-031a9ae7.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function u(e){return h(x,e)}n(u,"Portal");const y=m('<div><button type="button">'),C=m("<span>But I actually render here!");function d(){const[e,o]=w(!1),a=b(),p=n(()=>{o(!e())},"handleClick");return(()=>{const t=y(),i=t.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(t,r(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?r(u,{get container(){return a.ref},get children(){return C()}}):null)]}}),null),l(t,r(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),t})()}n(d,"SimplePortal");d.code=`import { Box, Portal } from "@suid/material";
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
`;k(["click"]);function v(){return r(g,{get name(){return u.name},examples:[d]})}n(v,"PortalPage");export{v as default};
