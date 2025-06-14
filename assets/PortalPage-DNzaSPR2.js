var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{h as t,au as h,a as x,t as m,F as l,l as s,B as c,ac as k,av as w}from"./index-Chiq91vg.js";import{C as b}from"./ComponentInfo-BMdmwTSx.js";import"./Link-Dbh_WtTh.js";import"./copyText-BVJZZxRr.js";import"./PaperCode-9D997B7Z.js";function u(e){return t(h,e)}n(u,"Portal");var g=m("<div><button type=button>"),y=m("<span>But I actually render here!");function d(){const[e,o]=x(!1),a=k(),p=n(()=>{o(!e())},"handleClick");return(()=>{var r=g(),i=r.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(u,{get container(){return a.ref},get children(){return y()}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(d,"SimplePortal");d.code=`import { Box, Portal } from "@suid/material";
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
`;w(["click"]);function $(){return t(b,{get name(){return u.name},examples:[d]})}n($,"PortalPage");export{$ as default};
