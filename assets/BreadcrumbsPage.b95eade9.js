var T=Object.defineProperty;var a=(e,r)=>T(e,"name",{value:r,configurable:!0});import{t as c,r as m,d as n,m as b,a as M,k as R,h as A,g as I,b as _,B as k}from"./vendor.5273475d.js";import{c as E,s as d,Q as D,R as C,j as z,k as U,l as H,T as v,a as Y}from"./index.056b5311.js";import{C as O}from"./ComponentInfo.52981497.js";import{L as i}from"./copyText.224c2700.js";import"./PaperCode.9a1fe640.js";const P=c('<svg><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>',4,!0);var j=E(()=>P.cloneNode(!0),"MoreHoriz");const q=c("<li></li>"),F=d(D)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:C(e.palette.grey[200],.12)}:{backgroundColor:C(e.palette.grey[600],.12)}}})),Q=d(j)({width:24,height:16});function W(e){return(()=>{const r=q.cloneNode(!0);return m(r,n(F,b({focusRipple:!0},e,{ownerState:e,get children(){return n(Q,{ownerState:e})}}))),r})()}a(W,"BreadcrumbCollapsed");function G(e){return U("MuiBreadcrumbs",e)}a(G,"getBreadcrumbsUtilityClass");const J=z("MuiBreadcrumbs",["root","ol","li","separator"]),K=c("<li></li>"),V=H()({name:"MuiBreadcrumbs",propDefaults:({set:e})=>e({component:"nav",expandText:"Show path",itemsAfterCollapse:1,itemsBeforeCollapse:1,maxItems:8,separator:"/"}),selfPropNames:["children","classes","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],utilityClass:G,slotClasses:()=>({root:["root"],li:["li"],ol:["ol"],separator:["separator"]})}),X=d(v,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${J.li}`]:r.li},r.root]})({}),Z=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ee=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function re(e,r,l,u){return e.reduce((t,s,p)=>(p<e.length-1?t=t.concat(s,n(ee,{component:"div","aria-hidden":!0,className:r,ownerState:u,children:l})):t.push(s),t),[])}a(re,"insertSeparators");const y=V.component(a(function({allProps:r,classes:l,otherProps:u,props:t}){const[s,p]=M(!1),B=Y(),g=b(r,()=>({expanded:s()})),L=a(()=>{p(!0);const o=B.ref.querySelector("a[href],button,[tabindex]");o&&o.focus()},"handleClickExpand"),S=a(o=>t.itemsBeforeCollapse+t.itemsAfterCollapse>=o.length?o:[...o.slice(0,t.itemsBeforeCollapse),n(W,{get["aria-label"](){return t.expandText},onClick:L}),...o.slice(o.length-t.itemsAfterCollapse,o.length)],"renderItemsBeforeAndAfter"),w=R(()=>t.children),f=A(()=>{const o=w();return(Array.isArray(o)?o:[o]).map(N=>(()=>{const h=K.cloneNode(!0);return m(h,N),_(()=>h.className=l.li),h})())});return n(X,b({color:"text.secondary"},u,{get className(){return I(l.root,u.className)},ownerState:g,get children(){return n(Z,{get className(){return l.ol},ownerState:g,ref:B,get children(){return re(s()||t.maxItems&&f().length<=t.maxItems?f():S(f()),l.separator,t.separator,g)}})}}))},"Breadcrumbs")),ne=c('<div role="presentation"></div>');function x(){return(()=>{const e=ne.cloneNode(!0);return e.$$click=r=>{console.info("You clicked a breadcrumb."),r.preventDefault()},m(e,n(y,{maxItems:2,"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Home"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Catalog"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"Accessories"}),n(i,{underline:"hover",color:"inherit",href:"#",target:"none",children:"New Collection"}),n(v,{color:"text.primary",children:"Belts"})]}})),e})()}a(x,"CollapsedExample");x.code=`import Breadcrumbs from "@suid/material/Breadcrumbs";
import Link from "@suid/material/Link";
import Typography from "@suid/material/Typography";

export default function CollapsedExample() {
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
`;k(["click"]);const te=c('<div role="presentation"></div>');function $(){return(()=>{const e=te.cloneNode(!0);return e.$$click=r=>{r.preventDefault(),console.info("You clicked a breadcrumb.")},m(e,n(y,{"aria-label":"breadcrumb",get children(){return[n(i,{underline:"hover",color:"inherit",href:"/",target:"none",children:"MUI"}),n(i,{underline:"hover",color:"inherit",onClick:r=>r.preventDefault(),href:"/getting-started/installation/",target:"none",children:"Core"}),n(v,{color:"text.primary",children:"Breadcrumbs"})]}})),e})()}a($,"BasicBreadcrumbs");$.code=`import Breadcrumbs from "@suid/material/Breadcrumbs";
import Link from "@suid/material/Link";
import Typography from "@suid/material/Typography";

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
`;k(["click"]);function ue(){return n(O,{get name(){return y.name},examples:[$,x]})}a(ue,"BreadcrumbsPage");export{ue as default};
