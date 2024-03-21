var w=Object.defineProperty;var o=(e,r)=>w(e,"name",{value:r,configurable:!0});import{c as A,t as c,R as d,U as I,aY as k,E as m,h as n,m as v,N as T,O as _,f as D,k as y,a as E,g as z,b as U,W as N,ac as Y,aq as H,aZ as O,au as x}from"./index-DSsc118D.js";import{C as q}from"./ComponentInfo-NUIRYxjW.js";import{L as i}from"./Link-mETYY_cW.js";import"./copyText-C3xtTZ5Y.js";import"./PaperCode-Bt7UXUPI.js";var P=c('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></svg>',!1,!0);const W=A(()=>P(),"MoreHoriz");var F=c("<li>");const Z=d(I)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:k(e.palette.grey[200],.12)}:{backgroundColor:k(e.palette.grey[600],.12)}}})),j=d(W)({width:24,height:16});function G(e){return(()=>{var r=F();return m(r,n(Z,v({focusRipple:!0},e,{ownerState:e,get children(){return n(j,{ownerState:e})}}))),r})()}o(G,"BreadcrumbCollapsed");function J(e){return _("MuiBreadcrumbs",e)}o(J,"getBreadcrumbsUtilityClass");const K=T("MuiBreadcrumbs",["root","ol","li","separator"]);var Q=c("<li>");const V=D()({name:"MuiBreadcrumbs",propDefaults:({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:J,slotClasses:()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]})}),X=d(y,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${K.li}`]:r.li},r.root]})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,l,u){return e.reduce((t,s,p)=>(p<e.length-1?t=t.concat(s,n(re,{as:"div","aria-hidden":!0,class:r,ownerState:u,children:l})):t.push(s),t),[])}o(ne,"insertSeparators");const C=V.component(o(function({allProps:r,classes:l,otherProps:u,props:t}){const[s,p]=E(!1),B=Y(),g=v(r,{get expanded(){return s()}}),S=o(()=>{p(!0);const a=B.ref.querySelector("a[href],button,[tabindex]");a&&a.focus()},"handleClickExpand"),M=o(a=>t.itemsBeforeCollapse+t.itemsAfterCollapse>=a.length?a:[...a.slice(0,t.itemsBeforeCollapse),n(G,{get"aria-label"(){return t.expandText},onClick:S}),...a.slice(a.length-t.itemsAfterCollapse,a.length)],"renderItemsBeforeAndAfter"),R=z(()=>t.children),f=U(()=>{const a=R();return(Array.isArray(a)?a:[a]).filter(h=>(h??!1)!==!1).map(h=>(()=>{var b=Q();return m(b,h),H(()=>O(b,l.li)),b})())});return n(X,v({color:"text.secondary"},u,{get class(){return N(l.root,u.class)},ownerState:g,get children(){return n(ee,{get class(){return l.ol},ownerState:g,ref:B,get children(){return ne(s()||t.maxItems&&f().length<=t.maxItems?f():M(f()),l.separator,t.separator,g)}})}}))},"Breadcrumbs2"));var te=c("<div role=presentation>");function $(){return(()=>{var e=te();return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},m(e,n(C,{"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),n(i,{underline:"hover",color:"inherit",onClick:r=>r.preventDefault(),href:"/getting-started/installation/",target:"none",children:"Core"}),n(y,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}o($,"BasicBreadcrumbs");$.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;x(["click"]);var ae=c("<div role=presentation>");function L(){return(()=>{var e=ae();return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},m(e,n(C,{maxItems:2,"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),n(y,{color:"text.primary",children:"Belts"})]}})),e})()}o(L,"CollapsedBreadcrumbs");L.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;x(["click"]);function me(){return n(q,{get name(){return C.name},examples:[$,L]})}o(me,"BreadcrumbsPage");export{me as default};
