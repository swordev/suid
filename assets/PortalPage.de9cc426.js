var f=Object.defineProperty;var t=(e,o)=>f(e,"name",{value:o,configurable:!0});import{a1 as m,B as s,a as h}from"./index.5b3b4b7a.js";import{C as x}from"./ComponentInfo.bede338e.js";import{A as b,e as k,r as l,a as r,i as c,t as u}from"./vendor.37d14b95.js";import"./Link.9626be27.js";import"./copyText.d14c4ac4.js";import"./PaperCode.cf41c2a7.js";const w=u('<div><button type="button"></button></div>'),g=u("<span>But I actually render here!</span>");function d(){const[e,o]=k(!1),a=h(),p=t(()=>{o(!e())},"handleClick");return(()=>{const n=w.cloneNode(!0),i=n.firstChild;return i.$$click=p,l(i,()=>e()?"Unmount children":"Mount children"),l(n,r(s,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",c(()=>c(()=>!!e(),!0)()?r(m,{get container(){return a.ref},get children(){return g.cloneNode(!0)}}):null)]}}),null),l(n,r(s,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),n})()}t(d,"SimplePortal");d.code=`import Portal from "@suid/base/Portal";
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
`;b(["click"]);function v(){return r(x,{get name(){return m.name},examples:[d]})}t(v,"PortalPage");export{v as default};
