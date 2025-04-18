var j=Object.defineProperty;var t=(o,n)=>j(o,"name",{value:n,configurable:!0});import{ak as E,d as Q,m as l,b1 as D,O as q,N as P,b as T,f as V,h as s,b2 as y,R as x,V as c,Q as G,U as k,c as J,t as C,a as R,E as u,z as $,B as K}from"./index-NCmNIr1K.js";import{C as X}from"./ComponentInfo-C3huals-.js";import{A as Y}from"./Add-C4oz67aD.js";import{M as O}from"./Mail-BEW5lsIF.js";import{F as w}from"./FormControlLabel-n3vtLoZ0.js";import{S as nn}from"./Switch-BgvD8MKh.js";import"./Link-Ci3uEOYa.js";import"./copyText-C_G9kHbS.js";import"./PaperCode-BKLbHUJT.js";import"./formControlState-DdF9v2Nz.js";import"./useFormControl-BcHBdGir.js";import"./SwitchBase-C2Dul_5H.js";import"./useControlled-Blc4Q9QM.js";function L(o,n){const r=n.reduce((a,i)=>(a[i]=o[i],a),{}),e=E(r);for(const a of n)Q(i=>(e[a]=i,o[a]),o[a]);return e}t(L,"usePreviousProps");function M(o,n,r){const e=l(()=>n().ownerState||{},r);return l(n,{get ownerState(){if(!D(o()))return e}})}t(M,"appendOwnerState");function F(o){return q("MuiBadge",o)}t(F,"getBadgeUtilityClass");const on=P("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function W(o){return T(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}t(W,"useBadgeInvisibleMemo");function rn(o){const n=l({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=L(n,["anchorOrigin","badgeContent","max","variant"]),e=W(n),a=l(()=>e()?r:n),i=t(()=>{if(a.variant!=="dot")return a.badgeContent&&Number(a.badgeContent)>a.max?`${a.max}+`:a.badgeContent},"displayValue");return l(a,{get invisible(){return e()},get displayValue(){return i()}})}t(rn,"useBadge");const z=V()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:t(({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),"propDefaults"),utilityClass:F,slotClasses:t(o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]}),"slotClasses")}),tn=z.component(t(function({allProps:n,otherProps:r,props:e}){const a=rn(n),i=l(n,a),m=t(()=>r.component||e.components.Root||"span","Root"),d=M(m,()=>l(r,e.componentsProps.root||{}),i),p=t(()=>e.components.Badge||"span","Badge"),f=M(p,()=>e.componentsProps.badge||{},i),v=z.useClasses(i);return s(y,l(d,r,{get component(){return m()},get class(){return x(v.root,d.class,r.class)},get children(){return[T(()=>e.children),s(y,l(f,{get component(){return p()},get class(){return x(v.badge,f.class)},get children(){return a.displayValue}}))]}}))},"BadgeUnstyled2")),g=Object.assign({},on,P("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),I=V()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:t(({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),"propDefaults"),autoCallUseClasses:!1,utilityClass:F,slotClasses:t(o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]}),"slotClasses")}),b=10,B=4,U=t(o=>!o||!D(o),"shouldSpreadAdditionalProps"),an=k("span",{name:"MuiBadge",slot:"Root",overridesResolver:t((o,n)=>n.root,"overridesResolver")})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),en=k("span",{name:"MuiBadge",slot:"Badge",overridesResolver:t((o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]},"overridesResolver")})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},...n.variant==="dot"&&{borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=I.component(t(function({allProps:n,otherProps:r,props:e}){const[,a]=G(r,["component"]),i=L(n,["anchorOrigin","color","overlap"]),m=W(n),d=l(()=>m()?i:n),p=l(n,{get invisible(){return m()}}),f=I.useClasses(p),v=l({Root:an,Badge:en},()=>r.components),Z=l(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),H=l(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),S={root:l(()=>r.componentsProps.root||{},()=>U(r.components.Root)&&{as:r.component,ownerState:Z}),badge:l(()=>r.componentsProps.badge||{},()=>U(r.components.Badge)&&{ownerState:H})};return s(tn,l({get variant(){return e.variant}},a,{components:v,componentsProps:S,classes:f}))},"Badge2"));var sn=C('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),ln=C('<svg><path d="M19 13H5v-2h14v2z"></svg>',!1,!0,!1);const cn=J(()=>[sn(),ln()],"Remove");var A=C("<div>");function _(){const[o,n]=R(1),[r,e]=R(!1),a=t(()=>{e(!r())},"handleBadgeVisibility");return s(K,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{var i=A();return u(i,s(h,{color:"secondary",get badgeContent(){return o()},get children(){return s(O,{})}}),null),u(i,s($,{"aria-label":"reduce",onClick:t(()=>{n(Math.max(o()-1,0))},"onClick"),get children(){return s(cn,{fontSize:"small"})}}),null),u(i,s($,{"aria-label":"increase",onClick:t(()=>{n(o()+1)},"onClick"),get children(){return s(Y,{fontSize:"small"})}}),null),i})(),(()=>{var i=A();return u(i,s(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return s(O,{})}}),null),u(i,s(w,{sx:{color:"text.primary"},get control(){return s(nn,{get checked(){return!r()},onChange:a})},label:"Show Badge"}),null),i})()]}})}t(_,"BadgeVisibility");_.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function N(){return s(h,{badgeContent:4,color:"primary",get children(){return s(O,{color:"action"})}})}t(N,"SimpleBadge");N.code=`import MailIcon from "@suid/icons-material/Mail";
import { Badge } from "@suid/material";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function Rn(){return s(X,{get name(){return h.name},docsName:"badges",examples:[N,_]})}t(Rn,"BadgePage");export{Rn as default};
