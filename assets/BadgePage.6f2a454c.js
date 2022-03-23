var G=Object.defineProperty;var l=(o,n)=>G(o,"name",{value:n,configurable:!0});import{E as U,i as P,j as J,k as T,l as c,s as V,c as k,d as O,B as K}from"./index.ef22901d.js";import{m as e,e as Q,f as X,h as b,d as s,g as $,i as _,D as R,s as Y,t as p,a as M,r as u}from"./vendor.7f6460ea.js";import{C as S}from"./ComponentInfo.8363f4df.js";import{M as y}from"./Mail.6470dccc.js";import"./copyText.22202dfa.js";import"./PaperCode.518557f3.js";function z(o,n,a){const i=e(()=>n().ownerState,()=>a);return e(n,()=>U(o())?{}:{ownerState:i})}l(z,"appendOwnerState");function W(o){return J("MuiBadge",o)}l(W,"getBadgeUtilityClass");const w=P("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function H(o,n){const a=n.reduce((t,r)=>(t[r]=o[r],t),{}),i=Q(a);for(const t of n)X(r=>(i[t]=r,o[t]),o[t]);return i}l(H,"usePreviousProps");function L(o){return b(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(L,"useBadgeInvisibleMemo");function nn(o){const n=e({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),a=H(n,["anchorOrigin","badgeContent","max","variant"]),i=L(n),t=e(()=>i()?a:n),r=b(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return e(t,()=>({invisible:i(),displayValue:r()}))}l(nn,"useBadge");const I=T()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:W,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),on=I.component(l(function({allProps:n,otherProps:a,props:i}){const t=nn(n),r=e(n,t),m=b(()=>a.component||i.components.Root||"span"),d=z(m,()=>e(a,i.componentsProps.root||{}),r),v=b(()=>i.components.Badge||"span"),f=z(v,()=>i.componentsProps.badge||{},r),h=I.useClasses(r);return s(R,e(d,a,{get component(){return m()},get className(){return $(h.root,d.className,a.className)},get children(){return[_(()=>i.children),s(R,e(f,{get component(){return v()},get className(){return $(h.badge,f.className)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},w,P("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),N=T()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:W,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),C=10,x=4,D=l(o=>!o||!U(o),"shouldSpreadAdditionalProps"),an=V("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),tn=V("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:a}=o;return[n.badge,n[a.variant],n[`anchorOrigin${c(a.anchorOrigin.vertical)}${c(a.anchorOrigin.horizontal)}${c(a.overlap)}`],a.color!=="default"&&n[`color${c(a.color)}`],a.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:C*2,lineHeight:1,padding:"0 6px",height:C*2,borderRadius:C,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:x,height:x*2,minWidth:x*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),B=N.component(l(function({allProps:n,otherProps:a,props:i}){const[,t]=Y(a,["component"]),r=H(n,["anchorOrigin","color","overlap"]),m=L(n),d=e(()=>m()?r:n),v=e(n,()=>({invisible:m()})),f=N.useClasses(v),h=e({Root:an,Badge:tn},()=>a.components),E=e(()=>a.componentsProps.root?.ownerState||{},{color:d.color,overlap:d.overlap}),F=e(()=>a.componentsProps.badge?.ownerState||{},{color:d.color,overlap:d.overlap}),q={root:e(()=>a.componentsProps.root||{},()=>D(a.components.Root)&&{as:a.component,ownerState:E}),badge:e(()=>a.componentsProps.badge||{},()=>D(a.components.Badge)&&{ownerState:F})};return s(on,e({get variant(){return i.variant}},t,{components:h,componentsProps:q,classes:f}))},"Badge"));function Z(){return s(B,{badgeContent:4,color:"primary",get children(){return s(y,{color:"action"})}})}l(Z,"SimpleBadge");Z.code=`import MailIcon from "@suid/icons-material/Mail";
import Badge from "@suid/material/Badge";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;const rn=p('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),en=p('<svg><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>',4,!0);var sn=k(()=>[rn.cloneNode(!0),en.cloneNode(!0)],"Add");const ln=p('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),cn=p('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0);var gn=k(()=>[ln.cloneNode(!0),cn.cloneNode(!0)],"Remove");const A=p("<div></div>");function j(){const[o,n]=M(1),[a,i]=M(!1),t=l(()=>{i(!a())},"handleBadgeVisibility");return s(K,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const r=A.cloneNode(!0);return u(r,s(B,{color:"secondary",get badgeContent(){return o()},get children(){return s(y,{})}}),null),u(r,s(O,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return s(gn,{fontSize:"small"})}}),null),u(r,s(O,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return s(sn,{fontSize:"small"})}}),null),r})(),(()=>{const r=A.cloneNode(!0);return u(r,s(B,{color:"secondary",variant:"dot",get invisible(){return a()},get children(){return s(y,{})}}),null),u(r,s(O,{onClick:t,get children(){return["invisible=",_(()=>a()?"true":"false")]}}),null),r})()]}})}l(j,"BadgeVisibility");j.code=`import AddIcon from "@suid/icons-material/Add";
import MailIcon from "@suid/icons-material/Mail";
import RemoveIcon from "@suid/icons-material/Remove";
import Badge from "@suid/material/Badge";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { createSignal } from "solid-js";

export default function BadgeVisibility() {
  const [count, setCount] = createSignal(1);
  const [invisible, setInvisible] = createSignal(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible());
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count()}>
          <MailIcon />
        </Badge>
        <Button
          aria-label="reduce"
          onClick={() => {
            setCount(Math.max(count() - 1, 0));
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button
          aria-label="increase"
          onClick={() => {
            setCount(count() + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </div>
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible()}>
          <MailIcon />
        </Badge>

        <Button onClick={handleBadgeVisibility}>
          invisible={invisible() ? "true" : "false"}
        </Button>
      </div>
    </Box>
  );
}
`;function bn(){return s(S,{get name(){return B.name},docsName:"badges",examples:[Z,j]})}l(bn,"BadgePage");export{bn as default};
