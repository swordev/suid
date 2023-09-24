var R=Object.defineProperty;var a=(e,r)=>R(e,"name",{value:r,configurable:!0});import{c as A,t as c,R as d,U as I,b0 as k,E as m,h as n,m as v,N as T,O as _,f as D,k as y,a as E,g as z,b as U,W as N,ac as H,aq as Y,b1 as O,au as x}from"./index-687395e5.js";import{C as q}from"./ComponentInfo-bd875933.js";import{L as i}from"./Link-85734f9a.js";import"./copyText-85cadcb7.js";import"./PaperCode-fd6d07d9.js";const P=c('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></svg>',!1,!0),W=A(()=>P(),"MoreHoriz"),F=c("<li>"),j=d(I)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:k(e.palette.grey[200],.12)}:{backgroundColor:k(e.palette.grey[600],.12)}}})),G=d(W)({width:24,height:16});function J(e){return(()=>{const r=F();return m(r,n(j,v({focusRipple:!0},e,{ownerState:e,get children(){return n(G,{ownerState:e})}}))),r})()}a(J,"BreadcrumbCollapsed");function K(e){return _("MuiBreadcrumbs",e)}a(K,"getBreadcrumbsUtilityClass");const Q=T("MuiBreadcrumbs",["root","ol","li","separator"]),V=c("<li>"),X=D()({name:"MuiBreadcrumbs",propDefaults:({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:K,slotClasses:()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]})}),Z=d(y,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Q.li}`]:r.li},r.root]})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,l,u){return e.reduce((t,s,p)=>(p<e.length-1?t=t.concat(s,n(re,{as:"div","aria-hidden":!0,class:r,ownerState:u,children:l})):t.push(s),t),[])}a(ne,"insertSeparators");const C=X.component(a(function({allProps:r,classes:l,otherProps:u,props:t}){const[s,p]=E(!1),B=H(),g=v(r,{get expanded(){return s()}}),S=a(()=>{p(!0);const o=B.ref.querySelector("a[href],button,[tabindex]");o&&o.focus()},"handleClickExpand"),w=a(o=>t.itemsBeforeCollapse+t.itemsAfterCollapse>=o.length?o:[...o.slice(0,t.itemsBeforeCollapse),n(J,{get"aria-label"(){return t.expandText},onClick:S}),...o.slice(o.length-t.itemsAfterCollapse,o.length)],"renderItemsBeforeAndAfter"),M=z(()=>t.children),f=U(()=>{const o=M();return(Array.isArray(o)?o:[o]).filter(h=>(h??!1)!==!1).map(h=>(()=>{const b=V();return m(b,h),Y(()=>O(b,l.li)),b})())});return n(Z,v({color:"text.secondary"},u,{get class(){return N(l.root,u.class)},ownerState:g,get children(){return n(ee,{get class(){return l.ol},ownerState:g,ref:B,get children(){return ne(s()||t.maxItems&&f().length<=t.maxItems?f():w(f()),l.separator,t.separator,g)}})}}))},"Breadcrumbs")),te=c('<div role="presentation">');function $(){return(()=>{const e=te();return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},m(e,n(C,{"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),n(i,{underline:"hover",color:"inherit",onClick:r=>r.preventDefault(),href:"/getting-started/installation/",target:"none",children:"Core"}),n(y,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}a($,"BasicBreadcrumbs");$.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;x(["click"]);const oe=c('<div role="presentation">');function L(){return(()=>{const e=oe();return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},m(e,n(C,{maxItems:2,"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),n(y,{color:"text.primary",children:"Belts"})]}})),e})()}a(L,"CollapsedBreadcrumbs");L.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;x(["click"]);function me(){return n(q,{get name(){return C.name},examples:[$,L]})}a(me,"BreadcrumbsPage");export{me as default};
