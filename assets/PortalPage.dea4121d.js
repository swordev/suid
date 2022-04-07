var f=Object.defineProperty;var t=(e,r)=>f(e,"name",{value:r,configurable:!0});import{ag as h,a as x,a6 as l,d as o,n as s,at as m,B as c,t as d,e as b}from"./index.3ce103ce.js";import{C as g}from"./ComponentInfo.40a112b1.js";import"./Link.dbf17a1e.js";import"./copyText.cdad8334.js";import"./PaperCode.57a9e7c6.js";const k=d('<div><button type="button"></button></div>'),w=d("<span>But I actually render here!</span>");function u(){const[e,r]=x(!1),a=b(),p=t(()=>{r(!e())},"handleClick");return(()=>{const n=k.cloneNode(!0),i=n.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(n,o(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e(),!0)()?o(m,{get container(){return a.ref},get children(){return w.cloneNode(!0)}}):null)]}}),null),l(n,o(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),n})()}t(u,"SimplePortal");u.code=`import Portal from "@suid/base/Portal";
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
`;h(["click"]);function $(){return o(g,{get name(){return m.name},examples:[u]})}t($,"PortalPage");export{$ as default};
