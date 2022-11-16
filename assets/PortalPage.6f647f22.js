var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{d as t,aC as h,al as x,a as b,a6 as l,t as u,p as s,B as c,e as k}from"./index.41b0e3d9.js";import{C as w}from"./ComponentInfo.3840199b.js";import"./Link.99ddcb16.js";import"./copyText.2d7a9d56.js";import"./PaperCode.ca66f3be.js";function d(e){return t(h,e)}n(d,"Portal");const g=u('<div><button type="button"></button></div>'),y=u("<span>But I actually render here!</span>");function m(){const[e,o]=b(!1),a=k(),p=n(()=>{o(!e())},"handleClick");return(()=>{const r=g.cloneNode(!0),i=r.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(d,{get container(){return a.ref},get children(){return y.cloneNode(!0)}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(m,"SimplePortal");m.code=`import { Box, Portal } from "@suid/material";
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
`;x(["click"]);function v(){return t(w,{get name(){return d.name},examples:[m]})}n(v,"PortalPage");export{v as default};
