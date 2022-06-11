var j=Object.defineProperty;var l=(o,n)=>j(o,"name",{value:n,configurable:!0});import{m as s,ad as D,q as U,r as E,ae as q,f as G,N as L,s as P,v as c,d as i,A as x,n as J,af as y,w as T,a8 as K,c as Q,t as C,a as R,ab as u,h as $,B as X}from"./index.5728258e.js";import{C as Y}from"./ComponentInfo.b4aab114.js";import{A as w}from"./Add.e6b8c241.js";import{M as O}from"./Mail.8e09983f.js";import{F as nn}from"./FormControlLabel.dd50cbad.js";import{S as on}from"./Switch.5e93a5c2.js";import"./Link.5c554c09.js";import"./copyText.3eadc357.js";import"./PaperCode.6e925dac.js";import"./formControlState.290f4986.js";import"./useFormControl.e8793d2b.js";import"./SwitchBase.0a618e9a.js";import"./useControlled.5451ba2e.js";function M(o,n,r){const e=s(()=>n().ownerState||{},r);return s(n,{get ownerState(){if(!D(o()))return e}})}l(M,"appendOwnerState");function V(o){return E("MuiBadge",o)}l(V,"getBadgeUtilityClass");const rn=U("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function k(o,n){const r=n.reduce((a,t)=>(a[t]=o[t],a),{}),e=q(r);for(const a of n)G(t=>(e[a]=t,o[a]),o[a]);return e}l(k,"usePreviousProps");function F(o){return L(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(F,"useBadgeInvisibleMemo");function an(o){const n=s({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=k(n,["anchorOrigin","badgeContent","max","variant"]),e=F(n),a=s(()=>e()?r:n),t=L(()=>{if(a.variant!=="dot")return a.badgeContent&&Number(a.badgeContent)>a.max?`${a.max}+`:a.badgeContent});return s(a,{get invisible(){return e()},get displayValue(){return t()}})}l(an,"useBadge");const I=P()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:V,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),tn=I.component(l(function({allProps:n,otherProps:r,props:e}){const a=an(n),t=s(n,a),m=l(()=>r.component||e.components.Root||"span","Root"),d=M(m,()=>s(r,e.componentsProps.root||{}),t),p=l(()=>e.components.Badge||"span","Badge"),f=M(p,()=>e.componentsProps.badge||{},t),v=I.useClasses(t);return i(y,s(d,r,{get component(){return m()},get className(){return x(v.root,d.className,r.className)},get children(){return[J(()=>e.children),i(y,s(f,{get component(){return p()},get className(){return x(v.badge,f.className)},get children(){return a.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},rn,U("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),z=P()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:V,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,N=l(o=>!o||!D(o),"shouldSpreadAdditionalProps"),en=T("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),sn=T("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=z.component(l(function({allProps:n,otherProps:r,props:e}){const[,a]=K(r,["component"]),t=k(n,["anchorOrigin","color","overlap"]),m=F(n),d=s(()=>m()?t:n),p=s(n,{get invisible(){return m()}}),f=z.useClasses(p),v=s({Root:en,Badge:sn},()=>r.components),S=s(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),Z=s(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),H={root:s(()=>r.componentsProps.root||{},()=>N(r.components.Root)&&{as:r.component,ownerState:S}),badge:s(()=>r.componentsProps.badge||{},()=>N(r.components.Badge)&&{ownerState:Z})};return i(tn,s({get variant(){return e.variant}},a,{components:v,componentsProps:H,classes:f}))},"Badge")),ln=C('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),cn=C('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0);var gn=Q(()=>[ln.cloneNode(!0),cn.cloneNode(!0)],"Remove");const A=C("<div></div>");function W(){const[o,n]=R(1),[r,e]=R(!1),a=l(()=>{e(!r())},"handleBadgeVisibility");return i(X,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const t=A.cloneNode(!0);return u(t,i(h,{color:"secondary",get badgeContent(){return o()},get children(){return i(O,{})}}),null),u(t,i($,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return i(gn,{fontSize:"small"})}}),null),u(t,i($,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return i(w,{fontSize:"small"})}}),null),t})(),(()=>{const t=A.cloneNode(!0);return u(t,i(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return i(O,{})}}),null),u(t,i(nn,{sx:{color:"text.primary"},get control(){return i(on,{get checked(){return!r()},onChange:a})},label:"Show Badge"}),null),t})()]}})}l(W,"BadgeVisibility");W.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function _(){return i(h,{badgeContent:4,color:"primary",get children(){return i(O,{color:"action"})}})}l(_,"SimpleBadge");_.code=`import MailIcon from "@suid/icons-material/Mail";
import Badge from "@suid/material/Badge";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function $n(){return i(Y,{get name(){return h.name},docsName:"badges",examples:[_,W]})}l($n,"BadgePage");export{$n as default};
