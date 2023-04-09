var E=Object.defineProperty;var s=(o,n)=>E(o,"name",{value:n,configurable:!0});import{z as J,E as K,H as i,J as P,K as T,N as Q,O as x,Q as V,R as c,U as O,V as y,W as R,X as L,Y as X,c as Y,t as k,a as $,d as l,x as u,i as M,B as q,e as G}from"./index-4edd6e97.js";import{C as w}from"./ComponentInfo-031a9ae7.js";import{A as nn}from"./Add-6ce645c9.js";import{M as C}from"./Mail-aae7d4ad.js";import{F as on}from"./FormControlLabel-7bcb39af.js";import{S as rn}from"./Switch-f6fd898a.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";import"./formControlState-b0866c3b.js";import"./useFormControl-eccca9b1.js";import"./SwitchBase-d9ef71c6.js";import"./useControlled-ac5817ae.js";function W(o,n){const r=n.reduce((t,a)=>(t[a]=o[a],t),{}),e=J(r);for(const t of n)K(a=>(e[t]=a,o[t]),o[t]);return e}s(W,"usePreviousProps");function z(o,n,r){const e=i(()=>n().ownerState||{},r);return i(n,{get ownerState(){if(!P(o()))return e}})}s(z,"appendOwnerState");function F(o){return Q("MuiBadge",o)}s(F,"getBadgeUtilityClass");const tn=T("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function _(o){return x(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}s(_,"useBadgeInvisibleMemo");function an(o){const n=i({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=W(n,["anchorOrigin","badgeContent","max","variant"]),e=_(n),t=i(()=>e()?r:n),a=x(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return i(t,{get invisible(){return e()},get displayValue(){return a()}})}s(an,"useBadge");const I=V()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:F,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),en=I.component(s(function({allProps:n,otherProps:r,props:e}){const t=an(n),a=i(n,t),m=s(()=>r.component||e.components.Root||"span","Root"),d=z(m,()=>i(r,e.componentsProps.root||{}),a),p=s(()=>e.components.Badge||"span","Badge"),f=z(p,()=>e.componentsProps.badge||{},a),v=I.useClasses(a);return O(y,i(d,r,{get component(){return m()},get class(){return R(v.root,d.class,r.class)},get children(){return[x(()=>e.children),O(y,i(f,{get component(){return p()},get class(){return R(v.badge,f.class)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},tn,T("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),U=V()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:F,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,A=s(o=>!o||!P(o),"shouldSpreadAdditionalProps"),sn=L("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),ln=L("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=U.component(s(function({allProps:n,otherProps:r,props:e}){const[,t]=X(r,["component"]),a=W(n,["anchorOrigin","color","overlap"]),m=_(n),d=i(()=>m()?a:n),p=i(n,{get invisible(){return m()}}),f=U.useClasses(p),v=i({Root:sn,Badge:ln},()=>r.components),Z=i(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),S=i(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),j={root:i(()=>r.componentsProps.root||{},()=>A(r.components.Root)&&{as:r.component,ownerState:Z}),badge:i(()=>r.componentsProps.badge||{},()=>A(r.components.Badge)&&{ownerState:S})};return O(en,i({get variant(){return e.variant}},t,{components:v,componentsProps:j,classes:f}))},"Badge")),cn=k('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),gn=k('<svg><path d="M19 13H5v-2h14v2z"></svg>',!1,!0),dn=Y(()=>[cn(),gn()],"Remove"),D=G("<div>");function N(){const[o,n]=$(1),[r,e]=$(!1),t=s(()=>{e(!r())},"handleBadgeVisibility");return l(q,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const a=D();return u(a,l(h,{color:"secondary",get badgeContent(){return o()},get children(){return l(C,{})}}),null),u(a,l(M,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return l(dn,{fontSize:"small"})}}),null),u(a,l(M,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return l(nn,{fontSize:"small"})}}),null),a})(),(()=>{const a=D();return u(a,l(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return l(C,{})}}),null),u(a,l(on,{sx:{color:"text.primary"},get control(){return l(rn,{get checked(){return!r()},onChange:t})},label:"Show Badge"}),null),a})()]}})}s(N,"BadgeVisibility");N.code=`import AddIcon from "@suid/icons-material/Add";
import MailIcon from "@suid/icons-material/Mail";
import RemoveIcon from "@suid/icons-material/Remove";
import { Badge, Box, Button, FormControlLabel, Switch } from "@suid/material";
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
`;function H(){return l(h,{badgeContent:4,color:"primary",get children(){return l(C,{color:"action"})}})}s(H,"SimpleBadge");H.code=`import MailIcon from "@suid/icons-material/Mail";
import { Badge } from "@suid/material";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function zn(){return l(w,{get name(){return h.name},docsName:"badges",examples:[H,N]})}s(zn,"BadgePage");export{zn as default};
