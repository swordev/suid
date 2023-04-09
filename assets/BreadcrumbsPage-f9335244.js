var I=Object.defineProperty;var a=(e,r)=>I(e,"name",{value:r,configurable:!0});import{c as _,t as b,X as d,Z as D,_ as B,$ as k,U as s,H as h,K as z,N as E,Q as U,T as v,a0 as H,a1 as N,O as Y,W as O,f as P,a2 as W,a3 as q,a4 as x,x as $,d as o,e as L}from"./index-4edd6e97.js";import{C as F}from"./ComponentInfo-031a9ae7.js";import{L as i}from"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";const K=b('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></svg>',!1,!0),Q=_(()=>K(),"MoreHoriz"),X=b("<li>"),Z=d(D)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:B(e.palette.grey[200],.12)}:{backgroundColor:B(e.palette.grey[600],.12)}}})),j=d(Q)({width:24,height:16});function G(e){return(()=>{const r=X();return k(r,s(Z,h({focusRipple:!0},e,{ownerState:e,get children(){return s(j,{ownerState:e})}}))),r})()}a(G,"BreadcrumbCollapsed");function J(e){return E("MuiBreadcrumbs",e)}a(J,"getBreadcrumbsUtilityClass");const V=z("MuiBreadcrumbs",["root","ol","li","separator"]),ee=b("<li>"),re=U()({name:"MuiBreadcrumbs",propDefaults:({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:J,slotClasses:()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]})}),ne=d(v,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${V.li}`]:r.li},r.root]})({}),te=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),oe=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ae(e,r,l,u){return e.reduce((n,c,m)=>(m<e.length-1?n=n.concat(c,s(oe,{as:"div","aria-hidden":!0,class:r,ownerState:u,children:l})):n.push(c),n),[])}a(ae,"insertSeparators");const C=re.component(a(function({allProps:r,classes:l,otherProps:u,props:n}){const[c,m]=H(!1),y=P(),p=h(r,{get expanded(){return c()}}),M=a(()=>{m(!0);const t=y.ref.querySelector("a[href],button,[tabindex]");t&&t.focus()},"handleClickExpand"),R=a(t=>n.itemsBeforeCollapse+n.itemsAfterCollapse>=t.length?t:[...t.slice(0,n.itemsBeforeCollapse),s(G,{get["aria-label"](){return n.expandText},onClick:M}),...t.slice(t.length-n.itemsAfterCollapse,t.length)],"renderItemsBeforeAndAfter"),T=N(()=>n.children),g=Y(()=>{const t=T();return(Array.isArray(t)?t:[t]).map(A=>(()=>{const f=ee();return k(f,A),W(()=>q(f,l.li)),f})())});return s(ne,h({color:"text.secondary"},u,{get class(){return O(l.root,u.class)},ownerState:p,get children(){return s(te,{get class(){return l.ol},ownerState:p,ref:y,get children(){return ae(c()||n.maxItems&&g().length<=n.maxItems?g():R(g()),l.separator,n.separator,p)}})}}))},"Breadcrumbs")),le=L('<div role="presentation">');function S(){return(()=>{const e=le();return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},$(e,o(C,{"aria-label":"breadcrumb",get children(){return[o(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),o(i,{underline:"hover",color:"inherit",onClick:r=>r.preventDefault(),href:"/getting-started/installation/",target:"none",children:"Core"}),o(v,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}a(S,"BasicBreadcrumbs");S.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

export default function BasicBreadcrumbs() {
  return (
    <div
      role="presentation"
      onClick={(event) => {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" target="none">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          onClick={(event) => event.preventDefault()}
          href="/getting-started/installation/"
          target="none"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}
`;x(["click"]);const ie=L('<div role="presentation">');function w(){return(()=>{const e=ie();return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},$(e,o(C,{maxItems:2,"aria-label":"breadcrumb",get children(){return[o(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),o(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),o(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),o(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),o(v,{color:"text.primary",children:"Belts"})]}})),e})()}a(w,"CollapsedBreadcrumbs");w.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

export default function CollapsedBreadcrumbs() {
  return (
    <div
      role="presentation"
      onClick={(event) => {
        console.info("You clicked a breadcrumb.");
        event.preventDefault();
      }}
    >
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#" target="none">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#" target="none">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#" target="none">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#" target="none">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </div>
  );
}
`;x(["click"]);function he(){return o(F,{get name(){return C.name},examples:[S,w]})}a(he,"BreadcrumbsPage");export{he as default};
