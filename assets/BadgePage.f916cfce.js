var j=Object.defineProperty;var l=(o,n)=>j(o,"name",{value:n,configurable:!0});import{m as s,a8 as D,q as U,r as E,a9 as q,f as K,K as L,s as P,v as c,d as e,A as x,n as G,aa as y,w as T,ab as J,c as Q,t as C,a as R,a6 as u,h as $,B as X}from"./index.61be0cd6.js";import{C as Y}from"./ComponentInfo.fe52fc09.js";import{A as w}from"./Add.9b519c17.js";import{M as O}from"./Mail.b5e74b64.js";import{F as nn,S as on}from"./Switch.3faded46.js";import"./Link.63c94c2a.js";import"./copyText.60b096d7.js";import"./PaperCode.783539ce.js";import"./formControlState.cb532a42.js";import"./useFormControl.54404a4e.js";import"./SwitchBase.105bab19.js";import"./useControlled.fbed3388.js";function M(o,n,a){const i=s(()=>n().ownerState,()=>a);return s(n,()=>D(o())?{}:{ownerState:i})}l(M,"appendOwnerState");function V(o){return E("MuiBadge",o)}l(V,"getBadgeUtilityClass");const an=U("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function k(o,n){const a=n.reduce((r,t)=>(r[t]=o[t],r),{}),i=q(a);for(const r of n)K(t=>(i[r]=t,o[r]),o[r]);return i}l(k,"usePreviousProps");function F(o){return L(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(F,"useBadgeInvisibleMemo");function rn(o){const n=s({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),a=k(n,["anchorOrigin","badgeContent","max","variant"]),i=F(n),r=s(()=>i()?a:n),t=L(()=>{if(r.variant!=="dot")return r.badgeContent&&Number(r.badgeContent)>r.max?`${r.max}+`:r.badgeContent});return s(r,()=>({invisible:i(),displayValue:t()}))}l(rn,"useBadge");const I=P()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:V,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),tn=I.component(l(function({allProps:n,otherProps:a,props:i}){const r=rn(n),t=s(n,r),m=l(()=>a.component||i.components.Root||"span","Root"),d=M(m,()=>s(a,i.componentsProps.root||{}),t),p=l(()=>i.components.Badge||"span","Badge"),f=M(p,()=>i.componentsProps.badge||{},t),v=I.useClasses(t);return e(y,s(d,a,{get component(){return m()},get className(){return x(v.root,d.className,a.className)},get children(){return[G(()=>i.children),e(y,s(f,{get component(){return p()},get className(){return x(v.badge,f.className)},get children(){return r.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},an,U("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),z=P()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:V,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,N=l(o=>!o||!D(o),"shouldSpreadAdditionalProps"),en=T("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),sn=T("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:a}=o;return[n.badge,n[a.variant],n[`anchorOrigin${c(a.anchorOrigin.vertical)}${c(a.anchorOrigin.horizontal)}${c(a.overlap)}`],a.color!=="default"&&n[`color${c(a.color)}`],a.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=z.component(l(function({allProps:n,otherProps:a,props:i}){const[,r]=J(a,["component"]),t=k(n,["anchorOrigin","color","overlap"]),m=F(n),d=s(()=>m()?t:n),p=s(n,()=>({invisible:m()})),f=z.useClasses(p),v=s({Root:en,Badge:sn},()=>a.components),S=s(()=>a.componentsProps.root?.ownerState||{},{color:d.color,overlap:d.overlap}),Z=s(()=>a.componentsProps.badge?.ownerState||{},{color:d.color,overlap:d.overlap}),H={root:s(()=>a.componentsProps.root||{},()=>N(a.components.Root)&&{as:a.component,ownerState:S}),badge:s(()=>a.componentsProps.badge||{},()=>N(a.components.Badge)&&{ownerState:Z})};return e(tn,s({get variant(){return i.variant}},r,{components:v,componentsProps:H,classes:f}))},"Badge")),ln=C('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),cn=C('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0);var gn=Q(()=>[ln.cloneNode(!0),cn.cloneNode(!0)],"Remove");const A=C("<div></div>");function W(){const[o,n]=R(1),[a,i]=R(!1),r=l(()=>{i(!a())},"handleBadgeVisibility");return e(X,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const t=A.cloneNode(!0);return u(t,e(h,{color:"secondary",get badgeContent(){return o()},get children(){return e(O,{})}}),null),u(t,e($,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return e(gn,{fontSize:"small"})}}),null),u(t,e($,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return e(w,{fontSize:"small"})}}),null),t})(),(()=>{const t=A.cloneNode(!0);return u(t,e(h,{color:"secondary",variant:"dot",get invisible(){return a()},get children(){return e(O,{})}}),null),u(t,e(nn,{sx:{color:"text.primary"},get control(){return e(on,{get checked(){return!a()},onChange:r})},label:"Show Badge"}),null),t})()]}})}l(W,"BadgeVisibility");W.code=`import AddIcon from "@suid/icons-material/Add";
import MailIcon from "@suid/icons-material/Mail";
import RemoveIcon from "@suid/icons-material/Remove";
import Badge from "@suid/material/Badge";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import FormControlLabel from "@suid/material/FormControlLabel";
import Switch from "@suid/material/Switch";
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

        <FormControlLabel
          sx={{ color: "text.primary" }}
          control={
            <Switch checked={!invisible()} onChange={handleBadgeVisibility} />
          }
          label="Show Badge"
        />
      </div>
    </Box>
  );
}
`;function _(){return e(h,{badgeContent:4,color:"primary",get children(){return e(O,{color:"action"})}})}l(_,"SimpleBadge");_.code=`import MailIcon from "@suid/icons-material/Mail";
import Badge from "@suid/material/Badge";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function Rn(){return e(Y,{get name(){return h.name},docsName:"badges",examples:[_,W]})}l(Rn,"BadgePage");export{Rn as default};
