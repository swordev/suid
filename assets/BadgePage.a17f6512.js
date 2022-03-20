import{E as A,i as U,j as q,k as P,l,s as T,c as V,d as B,B as G}from"./index.ae27f545.js";import{g as e,e as J,f as K,i as h,d as s,h as y,j as k,D as $,s as Q,v as m,a as R,t as u}from"./vendor.6d0a7b46.js";import{C as X}from"./ComponentInfo.6103a8aa.js";import{M as x}from"./Mail.01c12464.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function M(o,n,a){const i=e(()=>n().ownerState,()=>a);return e(n,()=>A(o())?{}:{ownerState:i})}function _(o){return q("MuiBadge",o)}const Y=U("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function W(o,n){const a=n.reduce((t,r)=>(t[r]=o[r],t),{}),i=J(a);for(const t of n)K(r=>(i[t]=r,o[t]),o[t]);return i}function H(o){return h(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}function S(o){const n=e({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),a=W(n,["anchorOrigin","badgeContent","max","variant"]),i=H(n),t=e(()=>i()?a:n),r=h(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return e(t,()=>({invisible:i(),displayValue:r()}))}const z=P()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:_,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${l(o.anchorOrigin.vertical)}${l(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),w=z.component(function({allProps:n,otherProps:a,props:i}){const t=S(n),r=e(n,t),d=h(()=>a.component||i.components.Root||"span"),g=M(d,()=>e(a,i.componentsProps.root||{}),r),p=h(()=>i.components.Badge||"span"),v=M(p,()=>i.componentsProps.badge||{},r),f=z.useClasses(r);return s($,e(g,a,{get component(){return d()},get className(){return y(f.root,g.className,a.className)},get children(){return[k(()=>i.children),s($,e(v,{get component(){return p()},get className(){return y(f.badge,v.className)},get children(){return t.displayValue}}))]}}))}),c=Object.assign({},Y,U("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),I=P()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:_,slotClasses:o=>({badge:[`anchorOrigin${l(o.anchorOrigin.vertical)}${l(o.anchorOrigin.horizontal)}${l(o.overlap)}`,`overlap${l(o.overlap)}`,o.color!=="default"&&`color${l(o.color)}`]})}),O=10,C=4,N=o=>!o||!A(o),nn=T("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),on=T("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:a}=o;return[n.badge,n[a.variant],n[`anchorOrigin${l(a.anchorOrigin.vertical)}${l(a.anchorOrigin.horizontal)}${l(a.overlap)}`],a.color!=="default"&&n[`color${l(a.color)}`],a.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:O*2,lineHeight:1,padding:"0 6px",height:O*2,borderRadius:O,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:C,height:C*2,minWidth:C*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${c.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),b=I.component(function({allProps:n,otherProps:a,props:i}){const[,t]=Q(a,["component"]),r=W(n,["anchorOrigin","color","overlap"]),d=H(n),g=e(()=>d()?r:n),p=e(n,()=>({invisible:d()})),v=I.useClasses(p),f=e({Root:nn,Badge:on},()=>a.components),Z=e(()=>a.componentsProps.root?.ownerState||{},{color:g.color,overlap:g.overlap}),E=e(()=>a.componentsProps.badge?.ownerState||{},{color:g.color,overlap:g.overlap}),F={root:e(()=>a.componentsProps.root||{},()=>N(a.components.Root)&&{as:a.component,ownerState:Z}),badge:e(()=>a.componentsProps.badge||{},()=>N(a.components.Badge)&&{ownerState:E})};return s(w,e({get variant(){return i.variant}},t,{components:f,componentsProps:F,classes:v}))});function L(){return s(b,{badgeContent:4,color:"primary",get children(){return s(x,{color:"action"})}})}L.code=`import MailIcon from "@suid/icons-material/Mail";
import Badge from "@suid/material/Badge";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;const an=m('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),tn=m('<svg><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>',4,!0);var rn=V(()=>[an.cloneNode(!0),tn.cloneNode(!0)],"Add");const en=m('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),sn=m('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0);var ln=V(()=>[en.cloneNode(!0),sn.cloneNode(!0)],"Remove");const D=m("<div></div>");function j(){const[o,n]=R(1),[a,i]=R(!1),t=()=>{i(!a())};return s(G,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const r=D.cloneNode(!0);return u(r,s(b,{color:"secondary",get badgeContent(){return o()},get children(){return s(x,{})}}),null),u(r,s(B,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return s(ln,{fontSize:"small"})}}),null),u(r,s(B,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return s(rn,{fontSize:"small"})}}),null),r})(),(()=>{const r=D.cloneNode(!0);return u(r,s(b,{color:"secondary",variant:"dot",get invisible(){return a()},get children(){return s(x,{})}}),null),u(r,s(B,{onClick:t,get children(){return["invisible=",k(()=>a()?"true":"false")]}}),null),r})()]}})}j.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function vn(){return s(X,{get name(){return b.name},docsName:"badges",examples:[L,j]})}export{vn as default};
