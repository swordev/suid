var J=Object.defineProperty;var a=(n,t)=>J(n,"name",{value:t,configurable:!0});import{c as C,t as f,O as A,N as F,f as O,Q as T,u as K,b as z,V as S,U as x,W as X,Z as y,h as e,a6 as _,R as N,m as P,S as Y,aF as tt,E as nt,a as at,k as et}from"./index-NCmNIr1K.js";import{u as ot}from"./useControlled-Blc4Q9QM.js";import{C as it}from"./ComponentInfo-C3huals-.js";import{S as v}from"./copyText-C_G9kHbS.js";import"./Link-Ci3uEOYa.js";import"./PaperCode-BKLbHUJT.js";var rt=f('<svg><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></svg>',!1,!0,!1);const B=C(()=>rt(),"FirstPage");var st=f('<svg><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></svg>',!1,!0,!1);const I=C(()=>st(),"LastPage");var lt=f('<svg><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></svg>',!1,!0,!1);const $=C(()=>lt(),"NavigateBefore");var ut=f('<svg><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></svg>',!1,!0,!1);const L=C(()=>ut(),"NavigateNext");function ct(n){return A("MuiPaginationItem",n)}a(ct,"getPaginationItemUtilityClass");const c=F("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),M=O()({name:"MuiPaginationItem",selfPropNames:["classes","color","components","disabled","page","selected","shape","size","type","variant"],utilityClass:ct,slotClasses:a(n=>({root:["root",`size${S(n.size)}`,n.variant,n.shape,n.color!=="standard"&&`${n.variant}${S(n.color)}`,n.disabled&&"disabled",n.selected&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[n.type]],icon:["icon"]}),"slotClasses")}),dt=x("div",{name:"MuiPaginationItem",slot:"Root"})(({theme:n,ownerState:t})=>({...n.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:n.palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:n.palette.action.disabledOpacity},...t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},...t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:n.typography.pxToRem(15)}})),gt=x(X,{name:"MuiPaginationItem",slot:"Root"})(({theme:n,ownerState:t})=>({...n.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:n.palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:n.palette.action.focus},[`&.${c.disabled}`]:{opacity:n.palette.action.disabledOpacity},transition:n.transitions.create(["color","background-color"],{duration:n.transitions.duration.short}),"&:hover":{backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:n.palette.action.selected,"&:hover":{backgroundColor:y(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:y(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:n.palette.action.disabled,backgroundColor:n.palette.action.selected}},...t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},...t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:n.typography.pxToRem(15)},...t.shape==="rounded"&&{borderRadius:n.shape.borderRadius}}),({theme:n,ownerState:t})=>({...t.variant==="text"&&{[`&.${c.selected}`]:{...t.color!=="standard"&&t.color&&{color:n.palette[t.color].contrastText,backgroundColor:n.palette[t.color].main,"&:hover":{backgroundColor:n.palette[t.color].dark,"@media (hover: none)":{backgroundColor:n.palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:n.palette[t.color].dark}},[`&.${c.disabled}`]:{color:n.palette.action.disabled}}},...t.variant==="outlined"&&{border:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:{...t.color!=="standard"&&t.color&&{color:n.palette[t.color].main,border:`1px solid ${y(n.palette[t.color].main,.5)}`,backgroundColor:y(n.palette[t.color].main,n.palette.action.activatedOpacity),"&:hover":{backgroundColor:y(n.palette[t.color].main,n.palette.action.activatedOpacity+n.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:y(n.palette[t.color].main,n.palette.action.activatedOpacity+n.palette.action.focusOpacity)}},[`&.${c.disabled}`]:{borderColor:n.palette.action.disabledBackground,color:n.palette.action.disabled}}}})),pt=x("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:a((n,t)=>t.icon,"overridesResolver")})(({theme:n,ownerState:t})=>({fontSize:n.typography.pxToRem(20),margin:"0 -8px",...t.size==="small"&&{fontSize:n.typography.pxToRem(18)},...t.size==="large"&&{fontSize:n.typography.pxToRem(22)}})),w=M.defineComponent(a(function(t){const s=_(t),u=M.useThemeProps({props:t,propDefaults:{color:"standard",components:{first:B,last:I,next:L,previous:$},disabled:!1,selected:!1,shape:"circular",size:"medium",type:"page",variant:"text"}}),[r,o]=T(u,["color","component","components","disabled","page","selected","shape","size","type","variant"]),m=u,g=K(),p=M.useClasses(m),d=a(()=>g.direction==="rtl"?{previous:r.components.next||L,next:r.components.previous||$,last:r.components.first||B,first:r.components.last||I}:{previous:r.components.previous||$,next:r.components.next||L,first:r.components.first||B,last:r.components.last||I},"normalizedIcons"),h=a(()=>d()[r.type],"Icon");return z(()=>z(()=>r.type==="start-ellipsis"||r.type==="end-ellipsis")()?e(dt,{ref:s,ownerState:m,get class(){return N(p.root,u.class)},children:"…"}):e(gt,P({ref:s,ownerState:m,get component(){return r.component},get disabled(){return r.disabled},get class(){return N(p.root,u.class)}},o,{get children(){return[z(()=>r.type==="page"&&r.page),e(Y,{get when(){return h()},children:a(k=>e(pt,{get as(){return k()},ownerState:m,get class(){return p.icon}}),"children")})]}})))},"PaginationItem2"));function ft(n={}){const t=P({boundaryCount:1,componentName:"usePagination",count:1,defaultPage:1,disabled:!1,hideNextButton:!1,hidePrevButton:!1,showFirstButton:!1,showLastButton:!1,siblingCount:1},n),[s,u]=ot({controlled:a(()=>t.page,"controlled"),default:a(()=>t.defaultPage,"default"),name:t.componentName,state:"page"}),r=a((l,b)=>{t.page||u(b),t.onChange&&t.onChange(l,b)},"handleClick"),o=a((l,b)=>{const Z=b-l+1;return Array.from({length:Z},(It,q)=>l+q)},"range"),m=a(()=>o(1,Math.min(t.boundaryCount,t.count)),"startPages"),g=a(()=>o(Math.max(t.count-t.boundaryCount+1,t.boundaryCount+1),t.count),"endPages"),p=a(()=>Math.max(Math.min(s()-t.siblingCount,t.count-t.boundaryCount-t.siblingCount*2-1),t.boundaryCount+2),"siblingsStart"),d=a(()=>Math.min(Math.max(s()+t.siblingCount,t.boundaryCount+t.siblingCount*2+2),g().length>0?g()[0]-2:t.count-1),"siblingsEnd"),h=a(()=>[...t.showFirstButton?["first"]:[],...t.hidePrevButton?[]:["previous"],...m(),...p()>t.boundaryCount+2?["start-ellipsis"]:t.boundaryCount+1<t.count-t.boundaryCount?[t.boundaryCount+1]:[],...o(p(),d()),...d()<t.count-t.boundaryCount-1?["end-ellipsis"]:t.count-t.boundaryCount>t.boundaryCount?[t.count-t.boundaryCount]:[],...g(),...t.hideNextButton?[]:["next"],...t.showLastButton?["last"]:[]],"itemList"),k=a(l=>{switch(l){case"first":return 1;case"previous":return s()-1;case"next":return s()+1;case"last":return t.count;default:return null}},"buttonPage"),Q=a(()=>h().map(l=>typeof l=="number"?{onClick:a(b=>{r(b,l)},"onClick"),type:"page",page:l,selected:l===s(),disabled:t.disabled,"aria-current":l===s()?"true":void 0}:{onClick:a(b=>{r(b,k(l))},"onClick"),type:l,page:k(l),selected:!1,disabled:t.disabled||l.indexOf("ellipsis")===-1&&(l==="next"||l==="last"?s()>=t.count:s()<=1)}),"items");return{get items(){return Q()}}}a(ft,"usePagination");function mt(n){return A("MuiPagination",n)}a(mt,"getPaginationUtilityClass");F("MuiPagination",["root","ul","outlined","text"]);var bt=f("<li>");const R=O()({name:"MuiPagination",selfPropNames:["classes","color","getItemAriaLabel","renderItem","shape","size","variant"],utilityClass:mt,slotClasses:a(n=>({root:["root",n.variant],ul:["ul"]}),"slotClasses")}),Pt=x("nav",{name:"MuiPagination",slot:"Root",overridesResolver:a((n,t)=>{const{ownerState:s}=n;return[t.root,t[s.variant]]},"overridesResolver")})({}),vt=x("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:a((n,t)=>t.ul,"overridesResolver")})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ht=a(function(n,t,s){return n==="page"?`${s?"":"Go to "}page ${t}`:`Go to ${n} page`},"defaultGetAriaLabel"),i=R.defineComponent(a(function(t){const s=_(t),u=R.useThemeProps({props:t}),[,r]=T(u,["boundaryCount","class","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),o=P({boundaryCount:1,color:"standard",count:1,defaultPage:1,disabled:!1,getItemAriaLabel:ht,hideNextButton:!1,hidePrevButton:!1,renderItem:a(d=>e(w,d),"renderItem"),shape:"circular",showFirstButton:!1,showLastButton:!1,siblingCount:1,size:"medium",variant:"text"},u),m=ft(P(u,{componentName:"Pagination"})),g=P(u,{get boundaryCount(){return o.boundaryCount},get color(){return o.color},get count(){return o.count},get defaultPage(){return o.defaultPage},get disabled(){return o.disabled},get getItemAriaLabel(){return o.getItemAriaLabel},get hideNextButton(){return o.hideNextButton},get hidePrevButton(){return o.hidePrevButton},get renderItem(){return o.renderItem},get shape(){return o.shape},get showFirstButton(){return o.showFirstButton},get showLastButton(){return o.showLastButton},get siblingCount(){return o.siblingCount},get size(){return o.size},get variant(){return o.variant}}),p=R.useClasses(g);return e(Pt,P({"aria-label":"pagination navigation",get class(){return N(p.root,u.class)},ownerState:g,ref:s},r,{get children(){return e(vt,{get class(){return p.ul},ownerState:g,get children(){return e(tt,{get each(){return m.items},children:a(d=>(()=>{var h=bt();return nt(h,()=>o.renderItem(P(d,{get color(){return o.color},get"aria-label"(){return o.getItemAriaLabel(d.type,d.page,d.selected)},get shape(){return o.shape},get size(){return o.size},get variant(){return o.variant}}))),h})(),"children")})}})}}))},"Pagination2"));function W(){return e(v,{spacing:2,get children(){return[e(i,{count:10}),e(i,{count:10,color:"primary"}),e(i,{count:10,color:"secondary"}),e(i,{count:10,disabled:!0})]}})}a(W,"BasicPagination");W.code=`import { Pagination, Stack } from "@suid/material";

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
`;var yt=f('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),Ct=f('<svg><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></svg>',!1,!0,!1);const xt=C(()=>[yt(),Ct()],"ArrowBack");var kt=f('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),zt=f('<svg><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></svg>',!1,!0,!1);const Bt=C(()=>[kt(),zt()],"ArrowForward");function U(){return e(v,{spacing:2,get children(){return e(i,{count:10,renderItem:a(n=>e(w,P({components:{previous:xt,next:Bt}},n)),"renderItem")})}})}a(U,"CustomIcons");U.code=`import { ArrowBack, ArrowForward } from "@suid/icons-material";
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
`;function H(){return e(v,{spacing:2,get children(){return[e(i,{count:10,showFirstButton:!0,showLastButton:!0}),e(i,{count:10,hidePrevButton:!0,hideNextButton:!0})]}})}a(H,"PaginationButtons");H.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}
`;function V(){const[n,t]=at(1);return e(v,{spacing:2,get children(){return[e(et,{get children(){return["Page: ",z(()=>n())]}}),e(i,{count:10,get page(){return n()},onChange:a((s,u)=>t(u),"onChange")})]}})}a(V,"PaginationControlled");V.code=`import { Typography, Pagination, Stack } from "@suid/material";
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
`;function E(){return e(v,{spacing:2,get children(){return[e(i,{count:10,variant:"outlined"}),e(i,{count:10,variant:"outlined",color:"primary"}),e(i,{count:10,variant:"outlined",color:"secondary"}),e(i,{count:10,variant:"outlined",disabled:!0})]}})}a(E,"PaginationOutlined");E.code=`import { Pagination, Stack } from "@suid/material";

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
`;function G(){return e(v,{spacing:2,get children(){return[e(i,{count:11,defaultPage:6,siblingCount:0}),e(i,{count:11,defaultPage:6})," ",e(i,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),e(i,{count:11,defaultPage:6,boundaryCount:2})]}})}a(G,"PaginationRanges");G.code=`import { Pagination, Stack } from "@suid/material";

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
`;function D(){return e(v,{spacing:2,get children(){return[e(i,{count:10,shape:"rounded"}),e(i,{count:10,variant:"outlined",shape:"rounded"})]}})}a(D,"PaginationRounded");D.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
`;function j(){return e(v,{spacing:2,get children(){return[e(i,{count:10,size:"small"}),e(i,{count:10}),e(i,{count:10,size:"large"})]}})}a(j,"PaginationSize");j.code=`import { Pagination, Stack } from "@suid/material";

export default function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}
`;function Ft(){return e(it,{get name(){return i.name},importInfo:["Pagination","PaginationItem"],examples:[W,E,D,j,H,U,G,V]})}a(Ft,"PaginationPage");export{Ft as default};
