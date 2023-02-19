var f=Object.defineProperty;var n=(e,o)=>f(e,"name",{value:o,configurable:!0});import{P as h}from"./Portal-922c193d.js";import{c as t,f as x,h as b,U as l,t as m,j as s}from"./ErrorPage-8beed0e1.js";import{C as k}from"./ComponentInfo-1421c72d.js";import{B as c,h as w}from"./ListItemText-c14572bd.js";import"./Link-0bbd356f.js";import"./copyText-be8cac60.js";import"./IconButton-578b62ce.js";import"./Paper-e344694e.js";import"./PaperCode-b1002cf2.js";import"./PageNav-de163c78.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";function p(e){return t(h,e)}n(p,"Portal");const P=m('<div><button type="button"></button></div>',4),g=m("<span>But I actually render here!</span>",2);function u(){const[e,o]=b(!1),i=w(),d=n(()=>{o(!e())},"handleClick");return(()=>{const r=P.cloneNode(!0),a=r.firstChild;return a.$$click=d,l(a,()=>e()?"Unmount children":"Mount children"),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},get children(){return["It looks like I will render here.",s(()=>s(()=>!!e())()?t(p,{get container(){return i.ref},get children(){return g.cloneNode(!0)}}):null)]}}),null),l(r,t(c,{sx:{p:1,my:1,border:"1px solid"},ref:i}),null),r})()}n(u,"SimplePortal");u.code=`import { Box, Portal } from "@suid/material";
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
