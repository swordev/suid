var w=Object.defineProperty;var t=(e,r)=>w(e,"name",{value:r,configurable:!0});import{c as A,t as c,F as m,h as n,m as v,V as d,X as I,aZ as k,O as T,Q as _,f as D,a as z,g as E,b as U,ac as H,U as N,k as y,ar as Y,a_ as O,av as x}from"./index-u9yx2Mx7.js";import{C as F}from"./ComponentInfo-Ctlyewpe.js";import{L as i}from"./Link-8lUTF9_p.js";import"./copyText-uykli1yJ.js";import"./PaperCode-D-vvHp4Z.js";var P=c('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></svg>',!1,!0,!1);const q=A(()=>P(),"MoreHoriz");var Q=c("<li>");const V=d(I)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:k(e.palette.grey[200],.12)}:{backgroundColor:k(e.palette.grey[600],.12)}}})),W=d(q)({width:24,height:16});function X(e){return(()=>{var r=Q();return m(r,n(V,v({focusRipple:!0},e,{ownerState:e,get children(){return n(W,{ownerState:e})}}))),r})()}t(X,"BreadcrumbCollapsed");function Z(e){return _("MuiBreadcrumbs",e)}t(Z,"getBreadcrumbsUtilityClass");const j=T("MuiBreadcrumbs",["root","ol","li","separator"]);var G=c("<li>");const J=D()({name:"MuiBreadcrumbs",propDefaults:t(({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),"propDefaults"),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:Z,slotClasses:t(()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]}),"slotClasses")}),K=d(y,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:t((e,r)=>[{[`& .${j.li}`]:r.li},r.root],"overridesResolver")})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:t((e,r)=>r.ol,"overridesResolver")})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:t((e,r)=>r.separator,"overridesResolver")})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,l,u){return e.reduce((a,s,p)=>(p<e.length-1?a=a.concat(s,n(re,{as:"div","aria-hidden":!0,class:r,ownerState:u,children:l})):a.push(s),a),[])}t(ne,"insertSeparators");const C=J.component(t(function({allProps:r,classes:l,otherProps:u,props:a}){const[s,p]=z(!1),B=H(),g=v(r,{get expanded(){return s()}}),S=t(()=>{p(!0);const o=B.ref.querySelector("a[href],button,[tabindex]");o&&o.focus()},"handleClickExpand"),M=t(o=>a.itemsBeforeCollapse+a.itemsAfterCollapse>=o.length?o:[...o.slice(0,a.itemsBeforeCollapse),n(X,{get"aria-label"(){return a.expandText},onClick:S}),...o.slice(o.length-a.itemsAfterCollapse,o.length)],"renderItemsBeforeAndAfter"),R=E(()=>a.children),f=U(()=>{const o=R();return(Array.isArray(o)?o:[o]).filter(h=>(h??!1)!==!1).map(h=>(()=>{var b=G();return m(b,h),Y(()=>O(b,l.li)),b})())});return n(K,v({color:"text.secondary"},u,{get class(){return N(l.root,u.class)},ownerState:g,get children(){return n(ee,{get class(){return l.ol},ownerState:g,ref:B,get children(){return ne(s()||a.maxItems&&f().length<=a.maxItems?f():M(f()),l.separator,a.separator,g)}})}}))},"Breadcrumbs2"));var te=c("<div role=presentation>");function $(){return(()=>{var e=te();return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},m(e,n(C,{"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),n(i,{underline:"hover",color:"inherit",onClick:t(r=>r.preventDefault(),"onClick"),href:"/getting-started/installation/",target:"none",children:"Core"}),n(y,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}t($,"BasicBreadcrumbs");$.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;x(["click"]);var ae=c("<div role=presentation>");function L(){return(()=>{var e=ae();return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},m(e,n(C,{maxItems:2,"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),n(y,{color:"text.primary",children:"Belts"})]}})),e})()}t(L,"CollapsedBreadcrumbs");L.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;x(["click"]);function me(){return n(F,{get name(){return C.name},examples:[$,L]})}t(me,"BreadcrumbsPage");export{me as default};
