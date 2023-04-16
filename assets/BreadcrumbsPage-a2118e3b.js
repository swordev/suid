var R=Object.defineProperty;var a=(e,r)=>R(e,"name",{value:r,configurable:!0});import{c as T,t as c,Q as d,U as A,V as B,w as m,d as n,m as b,E as I,H as _,J as D,T as v,a as E,W as z,p as U,O as H,e as Y,X as N,Y as O,Z as k}from"./index-2ade038b.js";import{C as P}from"./ComponentInfo-bf8f3e44.js";import{L as i}from"./Link-b969f3af.js";import"./copyText-64309802.js";import"./PaperCode-2146d787.js";import"./_commonjsHelpers-0119a68f.js";const W=c('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></svg>',!1,!0),q=T(()=>W(),"MoreHoriz"),F=c("<li>"),J=d(A)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:B(e.palette.grey[200],.12)}:{backgroundColor:B(e.palette.grey[600],.12)}}})),Q=d(q)({width:24,height:16});function V(e){return(()=>{const r=F();return m(r,n(J,b({focusRipple:!0},e,{ownerState:e,get children(){return n(Q,{ownerState:e})}}))),r})()}a(V,"BreadcrumbCollapsed");function X(e){return _("MuiBreadcrumbs",e)}a(X,"getBreadcrumbsUtilityClass");const Z=I("MuiBreadcrumbs",["root","ol","li","separator"]),j=c("<li>"),G=D()({name:"MuiBreadcrumbs",propDefaults:({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:X,slotClasses:()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]})}),K=d(v,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Z.li}`]:r.li},r.root]})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,l,u){return e.reduce((t,s,p)=>(p<e.length-1?t=t.concat(s,n(re,{as:"div","aria-hidden":!0,class:r,ownerState:u,children:l})):t.push(s),t),[])}a(ne,"insertSeparators");const y=G.component(a(function({allProps:r,classes:l,otherProps:u,props:t}){const[s,p]=E(!1),C=Y(),g=b(r,{get expanded(){return s()}}),L=a(()=>{p(!0);const o=C.ref.querySelector("a[href],button,[tabindex]");o&&o.focus()},"handleClickExpand"),S=a(o=>t.itemsBeforeCollapse+t.itemsAfterCollapse>=o.length?o:[...o.slice(0,t.itemsBeforeCollapse),n(V,{get["aria-label"](){return t.expandText},onClick:L}),...o.slice(o.length-t.itemsAfterCollapse,o.length)],"renderItemsBeforeAndAfter"),w=z(()=>t.children),f=U(()=>{const o=w();return(Array.isArray(o)?o:[o]).map(M=>(()=>{const h=j();return m(h,M),N(()=>O(h,l.li)),h})())});return n(K,b({color:"text.secondary"},u,{get class(){return H(l.root,u.class)},ownerState:g,get children(){return n(ee,{get class(){return l.ol},ownerState:g,ref:C,get children(){return ne(s()||t.maxItems&&f().length<=t.maxItems?f():S(f()),l.separator,t.separator,g)}})}}))},"Breadcrumbs")),te=c('<div role="presentation">');function x(){return(()=>{const e=te();return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},m(e,n(y,{"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),n(i,{underline:"hover",color:"inherit",onClick:r=>r.preventDefault(),href:"/getting-started/installation/",target:"none",children:"Core"}),n(v,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}a(x,"BasicBreadcrumbs");x.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;k(["click"]);const oe=c('<div role="presentation">');function $(){return(()=>{const e=oe();return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},m(e,n(y,{maxItems:2,"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),n(v,{color:"text.primary",children:"Belts"})]}})),e})()}a($,"CollapsedBreadcrumbs");$.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;k(["click"]);function pe(){return n(P,{get name(){return y.name},examples:[x,$]})}a(pe,"BreadcrumbsPage");export{pe as default};
