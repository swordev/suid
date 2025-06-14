var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{h as t,at as h,a as x,t as m,E as l,b as s,B as c,ab as b,au as k}from"./index-C8Cbba9i.js";import{C as w}from"./ComponentInfo-C3Y-hV1D.js";import"./Link-CxszECJF.js";import"./copyText-Dljb6c8E.js";import"./PaperCode-Bq4agt-h.js";function u(e){return t(h,e)}n(u,"Portal");var g=m("<div><button type=button>"),y=m("<span>But I actually render here!");function d(){const[e,o]=x(!1),a=b(),p=n(()=>{o(!e())},"handleClick");return(()=>{var r=g(),i=r.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(u,{get container(){return a.ref},get children(){return y()}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(d,"SimplePortal");d.code=`import { Box, Portal } from "@suid/material";
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
`;k(["click"]);function v(){return t(w,{get name(){return u.name},examples:[d]})}n(v,"PortalPage");export{v as default};
