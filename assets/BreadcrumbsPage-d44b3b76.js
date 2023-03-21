var A=Object.defineProperty;var a=(e,r)=>A(e,"name",{value:r,configurable:!0});import{t as c,R as d,ai as y,U as m,c as t,p as b,O as M,P as R,I as T,T as v,h as N,A as _,j as D,J as U,e as z,V as E,f as k}from"./ErrorPage-8328033b.js";import{c as Y,o as H,h as O}from"./ListItemText-8378536b.js";import{C as P}from"./ComponentInfo-ca810fe5.js";import{L as i}from"./Link-35e0690e.js";import"./copyText-7f7fdd67.js";import"./IconButton-b07a3030.js";import"./Paper-a16bc6e4.js";import"./PaperCode-37b8f2db.js";import"./PageNav-912c7d1d.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";const j=c('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>',4,!0),q=Y(()=>j.cloneNode(!0),"MoreHoriz"),F=c("<li></li>",2),J=d(H)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:y(e.palette.grey[200],.12)}:{backgroundColor:y(e.palette.grey[600],.12)}}})),V=d(q)({width:24,height:16});function W(e){return(()=>{const r=F.cloneNode(!0);return m(r,t(J,b({focusRipple:!0},e,{ownerState:e,get children(){return t(V,{ownerState:e})}}))),r})()}a(W,"BreadcrumbCollapsed");function G(e){return R("MuiBreadcrumbs",e)}a(G,"getBreadcrumbsUtilityClass");const K=M("MuiBreadcrumbs",["root","ol","li","separator"]),Q=c("<li></li>",2),X=T()({name:"MuiBreadcrumbs",propDefaults:({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:G,slotClasses:()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]})}),Z=d(v,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${K.li}`]:r.li},r.root]})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,l,u){return e.reduce((n,s,p)=>(p<e.length-1?n=n.concat(s,t(re,{as:"div","aria-hidden":!0,class:r,ownerState:u,children:l})):n.push(s),n),[])}a(ne,"insertSeparators");const C=X.component(a(function({allProps:r,classes:l,otherProps:u,props:n}){const[s,p]=N(!1),B=O(),f=b(r,{get expanded(){return s()}}),L=a(()=>{p(!0);const o=B.ref.querySelector("a[href],button,[tabindex]");o&&o.focus()},"handleClickExpand"),S=a(o=>n.itemsBeforeCollapse+n.itemsAfterCollapse>=o.length?(console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.",`itemsAfterCollapse={${n.itemsAfterCollapse}} + itemsBeforeCollapse={${n.itemsBeforeCollapse}} >= maxItems={${n.maxItems}}`].join(`
`)),o):[...o.slice(0,n.itemsBeforeCollapse),t(W,{get["aria-label"](){return n.expandText},onClick:L}),...o.slice(o.length-n.itemsAfterCollapse,o.length)],"renderItemsBeforeAndAfter"),I=_(()=>n.children),g=D(()=>{const o=I();return(Array.isArray(o)?o:[o]).map(w=>(()=>{const h=Q.cloneNode(!0);return m(h,w),z(()=>E(h,l.li)),h})())});return t(Z,b({color:"text.secondary"},u,{get class(){return U(l.root,u.class)},ownerState:f,get children(){return t(ee,{get class(){return l.ol},ownerState:f,ref:B,get children(){return ne(s()||n.maxItems&&g().length<=n.maxItems?g():S(g()),l.separator,n.separator,f)}})}}))},"Breadcrumbs")),te=c('<div role="presentation"></div>',2);function x(){return(()=>{const e=te.cloneNode(!0);return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},m(e,t(C,{"aria-label":"breadcrumb",get children(){return[t(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),t(i,{underline:"hover",color:"inherit",onClick:r=>r.preventDefault(),href:"/getting-started/installation/",target:"none",children:"Core"}),t(v,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}a(x,"BasicBreadcrumbs");x.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;k(["click"]);const oe=c('<div role="presentation"></div>',2);function $(){return(()=>{const e=oe.cloneNode(!0);return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},m(e,t(C,{maxItems:2,"aria-label":"breadcrumb",get children(){return[t(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),t(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),t(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),t(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),t(v,{color:"text.primary",children:"Belts"})]}})),e})()}a($,"CollapsedBreadcrumbs");$.code=`import { Breadcrumbs, Link, Typography } from "@suid/material";

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
`;k(["click"]);function Ce(){return t(P,{get name(){return C.name},examples:[x,$]})}a(Ce,"BreadcrumbsPage");export{Ce as default};
