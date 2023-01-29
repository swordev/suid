var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{P as h}from"./Portal-91fefddd.js";import{c as t,f as x,h as b,U as l,t as m,j as s}from"./ErrorPage-50341dca.js";import{C as k}from"./ComponentInfo-f3f6ea7d.js";import{B as c,h as w}from"./ListItemText-0fefb047.js";import"./Link-09b4138b.js";import"./copyText-7f91c599.js";import"./IconButton-78ead2c8.js";import"./Paper-992c85e1.js";import"./PaperCode-12d52286.js";import"./PageNav-b6a8a27e.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function p(e){return t(h,e)}n(p,"Portal");const P=m('<div><button type="button"></button></div>',4),g=m("<span>But I actually render here!</span>",2);function u(){const[e,o]=b(!1),i=w(),d=n(()=>{o(!e())},"handleClick");return(()=>{const r=P.cloneNode(!0),a=r.firstChild;return a.$$click=d,l(a,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(p,{get container(){return i.ref},get children(){return g.cloneNode(!0)}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:i}),null),r})()}n(u,"SimplePortal");u.code=`import { Box, Portal } from "@suid/material";
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
`;x(["click"]);function q(){return t(k,{get name(){return p.name},examples:[u]})}n(q,"PortalPage");export{q as default};
