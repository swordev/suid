var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{P as h}from"./Portal-8b90cc47.js";import{c as t,n as x,a as b,P as l,t as m,b as s}from"./ErrorPage-7e24a11e.js";import{C as P}from"./ComponentInfo-fb88dbff.js";import{B as c,f as k}from"./ListItemText-97540f66.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function p(e){return t(h,e)}n(p,"Portal");const w=m('<div><button type="button"></button></div>'),g=m("<span>But I actually render here!</span>");function u(){const[e,o]=b(!1),a=k(),d=n(()=>{o(!e())},"handleClick");return(()=>{const r=w.cloneNode(!0),i=r.firstChild;return i.$$click=d,l(i,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(p,{get container(){return a.ref},get children(){return g.cloneNode(!0)}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:a}),null),r})()}n(u,"SimplePortal");u.code=`import { Box, Portal } from "@suid/material";
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
`;x(["click"]);function j(){return t(P,{get name(){return p.name},examples:[u]})}n(j,"PortalPage");export{j as default};
