var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{d as t,au as h,ak as x,a as k,a6 as l,n as s,B as c,t as m,e as b}from"./index.6b14d20c.js";import{C as w}from"./ComponentInfo.346ead02.js";import"./Link.cd246030.js";import"./copyText.bc6fa35f.js";import"./PaperCode.84163afb.js";function u(e){return t(h,e)}n(u,"Portal");const P=m('<div><button type="button"></button></div>'),g=m("<span>But I actually render here!</span>");function d(){const[e,o]=k(!1),a=b(),p=n(()=>{o(!e())},"handleClick");return(()=>{const r=P.cloneNode(!0),i=r.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e(),!0)()?t(u,{get container(){return a.ref},get children(){return g.cloneNode(!0)}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(d,"SimplePortal");d.code=`import Box from "@suid/material/Box";
import Portal from "@suid/material/Portal";
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
`;x(["click"]);function v(){return t(w,{get name(){return u.name},examples:[d]})}n(v,"PortalPage");export{v as default};
