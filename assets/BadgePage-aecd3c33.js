var j=Object.defineProperty;var l=(o,n)=>j(o,"name",{value:n,configurable:!0});import{y as E,f as J,m as s,z as U,E as P,H as K,p as T,J as L,K as c,d as e,N as y,O as x,Q as V,R as Q,c as q,t as C,a as R,w as u,h as $,B as G}from"./index-d372388a.js";import{C as X}from"./ComponentInfo-c0e886c9.js";import{A as Y}from"./Add-b8921244.js";import{M as O}from"./Mail-0d0be3b8.js";import{F as w}from"./FormControlLabel-01e08380.js";import{S as nn}from"./Switch-e2603866.js";import"./Link-87b77aea.js";import"./copyText-caf77d59.js";import"./PaperCode-338f67c4.js";import"./formControlState-9c157834.js";import"./useFormControl-6a6a9c3c.js";import"./SwitchBase-3b6d392c.js";import"./useControlled-431c0487.js";function k(o,n){const r=n.reduce((t,a)=>(t[a]=o[a],t),{}),i=E(r);for(const t of n)J(a=>(i[t]=a,o[t]),o[t]);return i}l(k,"usePreviousProps");function M(o,n,r){const i=s(()=>n().ownerState||{},r);return s(n,{get ownerState(){if(!U(o()))return i}})}l(M,"appendOwnerState");function F(o){return K("MuiBadge",o)}l(F,"getBadgeUtilityClass");const on=P("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function W(o){return T(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(W,"useBadgeInvisibleMemo");function rn(o){const n=s({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=k(n,["anchorOrigin","badgeContent","max","variant"]),i=W(n),t=s(()=>i()?r:n),a=l(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent},"displayValue");return s(t,{get invisible(){return i()},get displayValue(){return a()}})}l(rn,"useBadge");const z=L()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:F,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),tn=z.component(l(function({allProps:n,otherProps:r,props:i}){const t=rn(n),a=s(n,t),m=l(()=>r.component||i.components.Root||"span","Root"),d=M(m,()=>s(r,i.componentsProps.root||{}),a),p=l(()=>i.components.Badge||"span","Badge"),f=M(p,()=>i.componentsProps.badge||{},a),v=z.useClasses(a);return e(y,s(d,r,{get component(){return m()},get class(){return x(v.root,d.class,r.class)},get children(){return[T(()=>i.children),e(y,s(f,{get component(){return p()},get class(){return x(v.badge,f.class)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},on,P("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),I=L()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:F,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,A=l(o=>!o||!U(o),"shouldSpreadAdditionalProps"),an=V("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),en=V("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},...n.variant==="dot"&&{borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=I.component(l(function({allProps:n,otherProps:r,props:i}){const[,t]=Q(r,["component"]),a=k(n,["anchorOrigin","color","overlap"]),m=W(n),d=s(()=>m()?a:n),p=s(n,{get invisible(){return m()}}),f=I.useClasses(p),v=s({Root:an,Badge:en},()=>r.components),H=s(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),Z=s(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),S={root:s(()=>r.componentsProps.root||{},()=>A(r.components.Root)&&{as:r.component,ownerState:H}),badge:s(()=>r.componentsProps.badge||{},()=>A(r.components.Badge)&&{ownerState:Z})};return e(tn,s({get variant(){return i.variant}},t,{components:v,componentsProps:S,classes:f}))},"Badge")),sn=C('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),ln=C('<svg><path d="M19 13H5v-2h14v2z"></svg>',!1,!0),cn=q(()=>[sn(),ln()],"Remove"),D=C("<div>");function _(){const[o,n]=R(1),[r,i]=R(!1),t=l(()=>{i(!r())},"handleBadgeVisibility");return e(G,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const a=D();return u(a,e(h,{color:"secondary",get badgeContent(){return o()},get children(){return e(O,{})}}),null),u(a,e($,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return e(cn,{fontSize:"small"})}}),null),u(a,e($,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return e(Y,{fontSize:"small"})}}),null),a})(),(()=>{const a=D();return u(a,e(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return e(O,{})}}),null),u(a,e(w,{sx:{color:"text.primary"},get control(){return e(nn,{get checked(){return!r()},onChange:t})},label:"Show Badge"}),null),a})()]}})}l(_,"BadgeVisibility");_.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function N(){return e(h,{badgeContent:4,color:"primary",get children(){return e(O,{color:"action"})}})}l(N,"SimpleBadge");N.code=`import MailIcon from "@suid/icons-material/Mail";
import { Badge } from "@suid/material";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function Rn(){return e(X,{get name(){return h.name},docsName:"badges",examples:[N,_]})}l(Rn,"BadgePage");export{Rn as default};
