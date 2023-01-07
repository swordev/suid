var j=Object.defineProperty;var l=(o,n)=>j(o,"name",{value:n,configurable:!0});import{R as E,f as G,w as s,K as U,L as K,b as x,G as L,N as c,c as i,a2 as y,H as R,O as N,x as q,t as C,a as $,P as u}from"./ErrorPage-7e24a11e.js";import{l as T,c as J,b as M,B as Q}from"./ListItemText-97540f66.js";import{C as X}from"./ComponentInfo-fb88dbff.js";import{A as Y}from"./Add-d0173b28.js";import{M as O}from"./Mail-eb78ddcb.js";import{F as w}from"./FormControlLabel-6737e70d.js";import{S as nn}from"./Switch-41f8f7ae.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-ed897386.js";import"./useFormControl-b0cba849.js";import"./SwitchBase-316ad80d.js";import"./useControlled-4747f91f.js";function V(o,n){const r=n.reduce((t,a)=>(t[a]=o[a],t),{}),e=E(r);for(const t of n)G(a=>(e[t]=a,o[t]),o[t]);return e}l(V,"usePreviousProps");function I(o,n,r){const e=s(()=>n().ownerState||{},r);return s(n,{get ownerState(){if(!T(o()))return e}})}l(I,"appendOwnerState");function k(o){return K("MuiBadge",o)}l(k,"getBadgeUtilityClass");const on=U("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function F(o){return x(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(F,"useBadgeInvisibleMemo");function rn(o){const n=s({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=V(n,["anchorOrigin","badgeContent","max","variant"]),e=F(n),t=s(()=>e()?r:n),a=x(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return s(t,{get invisible(){return e()},get displayValue(){return a()}})}l(rn,"useBadge");const z=L()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:k,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),tn=z.component(l(function({allProps:n,otherProps:r,props:e}){const t=rn(n),a=s(n,t),m=l(()=>r.component||e.components.Root||"span","Root"),d=I(m,()=>s(r,e.componentsProps.root||{}),a),p=l(()=>e.components.Badge||"span","Badge"),f=I(p,()=>e.componentsProps.badge||{},a),v=z.useClasses(a);return i(y,s(d,r,{get component(){return m()},get class(){return R(v.root,d.class,r.class)},get children(){return[x(()=>e.children),i(y,s(f,{get component(){return p()},get class(){return R(v.badge,f.class)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},on,U("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),A=L()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:k,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,D=l(o=>!o||!T(o),"shouldSpreadAdditionalProps"),an=N("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),en=N("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=A.component(l(function({allProps:n,otherProps:r,props:e}){const[,t]=q(r,["component"]),a=V(n,["anchorOrigin","color","overlap"]),m=F(n),d=s(()=>m()?a:n),p=s(n,{get invisible(){return m()}}),f=A.useClasses(p),v=s({Root:an,Badge:en},()=>r.components),H=s(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),Z=s(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),S={root:s(()=>r.componentsProps.root||{},()=>D(r.components.Root)&&{as:r.component,ownerState:H}),badge:s(()=>r.componentsProps.badge||{},()=>D(r.components.Badge)&&{ownerState:Z})};return i(tn,s({get variant(){return e.variant}},t,{components:v,componentsProps:S,classes:f}))},"Badge")),sn=C('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),ln=C('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0),cn=J(()=>[sn.cloneNode(!0),ln.cloneNode(!0)],"Remove"),P=C("<div></div>");function W(){const[o,n]=$(1),[r,e]=$(!1),t=l(()=>{e(!r())},"handleBadgeVisibility");return i(Q,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const a=P.cloneNode(!0);return u(a,i(h,{color:"secondary",get badgeContent(){return o()},get children(){return i(O,{})}}),null),u(a,i(M,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return i(cn,{fontSize:"small"})}}),null),u(a,i(M,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return i(Y,{fontSize:"small"})}}),null),a})(),(()=>{const a=P.cloneNode(!0);return u(a,i(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return i(O,{})}}),null),u(a,i(w,{sx:{color:"text.primary"},get control(){return i(nn,{get checked(){return!r()},onChange:t})},label:"Show Badge"}),null),a})()]}})}l(W,"BadgeVisibility");W.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function _(){return i(h,{badgeContent:4,color:"primary",get children(){return i(O,{color:"action"})}})}l(_,"SimpleBadge");_.code=`import MailIcon from "@suid/icons-material/Mail";
import { Badge } from "@suid/material";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function Dn(){return i(X,{get name(){return h.name},docsName:"badges",examples:[_,W]})}l(Dn,"BadgePage");export{Dn as default};
