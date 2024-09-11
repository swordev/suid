var J=Object.defineProperty;var a=(n,t)=>J(n,"name",{value:t,configurable:!0});import{c as C,t as m,N as A,O as F,f as O,Q as S,R as x,U as K,Y as y,V as T,u as X,b as z,h as o,W as N,m as P,S as Z,a6 as _,aH as tt,E as nt,a as at,k as ot}from"./index-96nJ5ebr.js";import{u as et}from"./useControlled-qjPsNd6F.js";import{C as it}from"./ComponentInfo-BBEqkhk-.js";import{S as v}from"./copyText-D9OMJUeU.js";import"./Link-BFVZF50d.js";import"./PaperCode-BS9cYccI.js";var rt=m('<svg><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></svg>',!1,!0);const B=C(()=>rt(),"FirstPage");var st=m('<svg><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></svg>',!1,!0);const I=C(()=>st(),"LastPage");var lt=m('<svg><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></svg>',!1,!0);const $=C(()=>lt(),"NavigateBefore");var ut=m('<svg><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></svg>',!1,!0);const L=C(()=>ut(),"NavigateNext");function ct(n){return F("MuiPaginationItem",n)}a(ct,"getPaginationItemUtilityClass");const c=A("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),M=O()({name:"MuiPaginationItem",selfPropNames:["classes","color","components","disabled","page","selected","shape","size","type","variant"],utilityClass:ct,slotClasses:a(n=>({root:["root",`size${S(n.size)}`,n.variant,n.shape,n.color!=="standard"&&`${n.variant}${S(n.color)}`,n.disabled&&"disabled",n.selected&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[n.type]],icon:["icon"]}),"slotClasses")}),dt=x("div",{name:"MuiPaginationItem",slot:"Root"})(({theme:n,ownerState:t})=>({...n.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:n.palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:n.palette.action.disabledOpacity},...t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},...t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:n.typography.pxToRem(15)}})),gt=x(K,{name:"MuiPaginationItem",slot:"Root"})(({theme:n,ownerState:t})=>({...n.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:n.palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:n.palette.action.focus},[`&.${c.disabled}`]:{opacity:n.palette.action.disabledOpacity},transition:n.transitions.create(["color","background-color"],{duration:n.transitions.duration.short}),"&:hover":{backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:n.palette.action.selected,"&:hover":{backgroundColor:y(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:y(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:n.palette.action.disabled,backgroundColor:n.palette.action.selected}},...t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},...t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:n.typography.pxToRem(15)},...t.shape==="rounded"&&{borderRadius:n.shape.borderRadius}}),({theme:n,ownerState:t})=>({...t.variant==="text"&&{[`&.${c.selected}`]:{...t.color!=="standard"&&t.color&&{color:n.palette[t.color].contrastText,backgroundColor:n.palette[t.color].main,"&:hover":{backgroundColor:n.palette[t.color].dark,"@media (hover: none)":{backgroundColor:n.palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:n.palette[t.color].dark}},[`&.${c.disabled}`]:{color:n.palette.action.disabled}}},...t.variant==="outlined"&&{border:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:{...t.color!=="standard"&&t.color&&{color:n.palette[t.color].main,border:`1px solid ${y(n.palette[t.color].main,.5)}`,backgroundColor:y(n.palette[t.color].main,n.palette.action.activatedOpacity),"&:hover":{backgroundColor:y(n.palette[t.color].main,n.palette.action.activatedOpacity+n.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:y(n.palette[t.color].main,n.palette.action.activatedOpacity+n.palette.action.focusOpacity)}},[`&.${c.disabled}`]:{borderColor:n.palette.action.disabledBackground,color:n.palette.action.disabled}}}})),pt=x("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:a((n,t)=>t.icon,"overridesResolver")})(({theme:n,ownerState:t})=>({fontSize:n.typography.pxToRem(20),margin:"0 -8px",...t.size==="small"&&{fontSize:n.typography.pxToRem(18)},...t.size==="large"&&{fontSize:n.typography.pxToRem(22)}})),w=M.defineComponent(a(function(t){const s=_(t),u=M.useThemeProps({props:t,propDefaults:{color:"standard",components:{first:B,last:I,next:L,previous:$},disabled:!1,selected:!1,shape:"circular",size:"medium",type:"page",variant:"text"}}),[r,e]=T(u,["color","component","components","disabled","page","selected","shape","size","type","variant"]),f=u,g=X(),p=M.useClasses(f),d=a(()=>g.direction==="rtl"?{previous:r.components.next||L,next:r.components.previous||$,last:r.components.first||B,first:r.components.last||I}:{previous:r.components.previous||$,next:r.components.next||L,first:r.components.first||B,last:r.components.last||I},"normalizedIcons"),h=a(()=>d()[r.type],"Icon");return z(()=>z(()=>r.type==="start-ellipsis"||r.type==="end-ellipsis")()?o(dt,{ref:s,ownerState:f,get class(){return N(p.root,u.class)},children:"…"}):o(gt,P({ref:s,ownerState:f,get component(){return r.component},get disabled(){return r.disabled},get class(){return N(p.root,u.class)}},e,{get children(){return[z(()=>r.type==="page"&&r.page),o(Z,{get when(){return h()},children:a(k=>o(pt,{get as(){return k()},ownerState:f,get class(){return p.icon}}),"children")})]}})))},"PaginationItem2"));function mt(n={}){const t=P({boundaryCount:1,componentName:"usePagination",count:1,defaultPage:1,disabled:!1,hideNextButton:!1,hidePrevButton:!1,showFirstButton:!1,showLastButton:!1,siblingCount:1},n),[s,u]=et({controlled:a(()=>t.page,"controlled"),default:a(()=>t.defaultPage,"default"),name:t.componentName,state:"page"}),r=a((l,b)=>{t.page||u(b),t.onChange&&t.onChange(l,b)},"handleClick"),e=a((l,b)=>{const Y=b-l+1;return Array.from({length:Y},(It,q)=>l+q)},"range"),f=a(()=>e(1,Math.min(t.boundaryCount,t.count)),"startPages"),g=a(()=>e(Math.max(t.count-t.boundaryCount+1,t.boundaryCount+1),t.count),"endPages"),p=a(()=>Math.max(Math.min(s()-t.siblingCount,t.count-t.boundaryCount-t.siblingCount*2-1),t.boundaryCount+2),"siblingsStart"),d=a(()=>Math.min(Math.max(s()+t.siblingCount,t.boundaryCount+t.siblingCount*2+2),g().length>0?g()[0]-2:t.count-1),"siblingsEnd"),h=a(()=>[...t.showFirstButton?["first"]:[],...t.hidePrevButton?[]:["previous"],...f(),...p()>t.boundaryCount+2?["start-ellipsis"]:t.boundaryCount+1<t.count-t.boundaryCount?[t.boundaryCount+1]:[],...e(p(),d()),...d()<t.count-t.boundaryCount-1?["end-ellipsis"]:t.count-t.boundaryCount>t.boundaryCount?[t.count-t.boundaryCount]:[],...g(),...t.hideNextButton?[]:["next"],...t.showLastButton?["last"]:[]],"itemList"),k=a(l=>{switch(l){case"first":return 1;case"previous":return s()-1;case"next":return s()+1;case"last":return t.count;default:return null}},"buttonPage"),Q=a(()=>h().map(l=>typeof l=="number"?{onClick:a(b=>{r(b,l)},"onClick"),type:"page",page:l,selected:l===s(),disabled:t.disabled,"aria-current":l===s()?"true":void 0}:{onClick:a(b=>{r(b,k(l))},"onClick"),type:l,page:k(l),selected:!1,disabled:t.disabled||l.indexOf("ellipsis")===-1&&(l==="next"||l==="last"?s()>=t.count:s()<=1)}),"items");return{get items(){return Q()}}}a(mt,"usePagination");function ft(n){return F("MuiPagination",n)}a(ft,"getPaginationUtilityClass");A("MuiPagination",["root","ul","outlined","text"]);var bt=m("<li>");const R=O()({name:"MuiPagination",selfPropNames:["classes","color","getItemAriaLabel","renderItem","shape","size","variant"],utilityClass:ft,slotClasses:a(n=>({root:["root",n.variant],ul:["ul"]}),"slotClasses")}),Pt=x("nav",{name:"MuiPagination",slot:"Root",overridesResolver:a((n,t)=>{const{ownerState:s}=n;return[t.root,t[s.variant]]},"overridesResolver")})({}),vt=x("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:a((n,t)=>t.ul,"overridesResolver")})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ht=a(function(n,t,s){return n==="page"?`${s?"":"Go to "}page ${t}`:`Go to ${n} page`},"defaultGetAriaLabel"),i=R.defineComponent(a(function(t){const s=_(t),u=R.useThemeProps({props:t}),[,r]=T(u,["boundaryCount","class","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),e=P({boundaryCount:1,color:"standard",count:1,defaultPage:1,disabled:!1,getItemAriaLabel:ht,hideNextButton:!1,hidePrevButton:!1,renderItem:a(d=>o(w,d),"renderItem"),shape:"circular",showFirstButton:!1,showLastButton:!1,siblingCount:1,size:"medium",variant:"text"},u),f=mt(P(u,{componentName:"Pagination"})),g=P(u,{get boundaryCount(){return e.boundaryCount},get color(){return e.color},get count(){return e.count},get defaultPage(){return e.defaultPage},get disabled(){return e.disabled},get getItemAriaLabel(){return e.getItemAriaLabel},get hideNextButton(){return e.hideNextButton},get hidePrevButton(){return e.hidePrevButton},get renderItem(){return e.renderItem},get shape(){return e.shape},get showFirstButton(){return e.showFirstButton},get showLastButton(){return e.showLastButton},get siblingCount(){return e.siblingCount},get size(){return e.size},get variant(){return e.variant}}),p=R.useClasses(g);return o(Pt,P({"aria-label":"pagination navigation",get class(){return N(p.root,u.class)},ownerState:g,ref:s},r,{get children(){return o(vt,{get class(){return p.ul},ownerState:g,get children(){return o(tt,{get each(){return f.items},children:a(d=>(()=>{var h=bt();return nt(h,()=>e.renderItem(P(d,{get color(){return e.color},get"aria-label"(){return e.getItemAriaLabel(d.type,d.page,d.selected)},get shape(){return e.shape},get size(){return e.size},get variant(){return e.variant}}))),h})(),"children")})}})}}))},"Pagination2"));function W(){return o(v,{spacing:2,get children(){return[o(i,{count:10}),o(i,{count:10,color:"primary"}),o(i,{count:10,color:"secondary"}),o(i,{count:10,disabled:!0})]}})}a(W,"BasicPagination");W.code=`import { Pagination, Stack } from "@suid/material";

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}
`;var yt=m('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),Ct=m('<svg><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></svg>',!1,!0);const xt=C(()=>[yt(),Ct()],"ArrowBack");var kt=m('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),zt=m('<svg><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></svg>',!1,!0);const Bt=C(()=>[kt(),zt()],"ArrowForward");function H(){return o(v,{spacing:2,get children(){return o(i,{count:10,renderItem:a(n=>o(w,P({components:{previous:xt,next:Bt}},n)),"renderItem")})}})}a(H,"CustomIcons");H.code=`import { ArrowBack, ArrowForward } from "@suid/icons-material";
import { Pagination, PaginationItem, Stack } from "@suid/material";

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBack, next: ArrowForward }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
`;function U(){return o(v,{spacing:2,get children(){return[o(i,{count:10,showFirstButton:!0,showLastButton:!0}),o(i,{count:10,hidePrevButton:!0,hideNextButton:!0})]}})}a(U,"PaginationButtons");U.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}
`;function V(){const[n,t]=at(1);return o(v,{spacing:2,get children(){return[o(ot,{get children(){return["Page: ",z(()=>n())]}}),o(i,{count:10,get page(){return n()},onChange:a((s,u)=>t(u),"onChange")})]}})}a(V,"PaginationControlled");V.code=`import { Typography, Pagination, Stack } from "@suid/material";
import { createSignal } from "solid-js";

export default function PaginationControlled() {
  const [page, setPage] = createSignal(1);

  return (
    <Stack spacing={2}>
      <Typography>Page: {page()}</Typography>
      <Pagination
        count={10}
        page={page()}
        onChange={(_, value) => setPage(value)}
      />
    </Stack>
  );
}
`;function E(){return o(v,{spacing:2,get children(){return[o(i,{count:10,variant:"outlined"}),o(i,{count:10,variant:"outlined",color:"primary"}),o(i,{count:10,variant:"outlined",color:"secondary"}),o(i,{count:10,variant:"outlined",disabled:!0})]}})}a(E,"PaginationOutlined");E.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationOutlined() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
}
`;function G(){return o(v,{spacing:2,get children(){return[o(i,{count:11,defaultPage:6,siblingCount:0}),o(i,{count:11,defaultPage:6})," ",o(i,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),o(i,{count:11,defaultPage:6,boundaryCount:2})]}})}a(G,"PaginationRanges");G.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationRanges() {
  return (
    <Stack spacing={2}>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
      <Pagination
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      />
      <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </Stack>
  );
}
`;function D(){return o(v,{spacing:2,get children(){return[o(i,{count:10,shape:"rounded"}),o(i,{count:10,variant:"outlined",shape:"rounded"})]}})}a(D,"PaginationRounded");D.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
`;function j(){return o(v,{spacing:2,get children(){return[o(i,{count:10,size:"small"}),o(i,{count:10}),o(i,{count:10,size:"large"})]}})}a(j,"PaginationSize");j.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}
`;function Ft(){return o(it,{get name(){return i.name},importInfo:["Pagination","PaginationItem"],examples:[W,E,D,j,U,H,G,V]})}a(Ft,"PaginationPage");export{Ft as default};
