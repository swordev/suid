var j=Object.defineProperty;var l=(o,n)=>j(o,"name",{value:n,configurable:!0});import{a9 as E,f as q,m as s,aa as U,r as P,s as G,V as T,v as V,w as c,d as i,ab as C,E as y,p as J,x as L,a4 as K,c as Q,t as x,a as R,a7 as u,h as $,B as X}from"./index.9795753c.js";import{C as Y}from"./ComponentInfo.69c4d456.js";import{A as w}from"./Add.4ab7aaf9.js";import{M as O}from"./Mail.730e87d4.js";import{F as nn}from"./FormControlLabel.6eb56ec7.js";import{S as on}from"./Switch.08ab21d7.js";import"./Link.2927b89b.js";import"./copyText.9664b0a5.js";import"./PaperCode.55644e03.js";import"./formControlState.01173e02.js";import"./useFormControl.838d497c.js";import"./SwitchBase.6bd85ecd.js";import"./useControlled.4d1936ae.js";function N(o,n){const r=n.reduce((t,a)=>(t[a]=o[a],t),{}),e=E(r);for(const t of n)q(a=>(e[t]=a,o[t]),o[t]);return e}l(N,"usePreviousProps");function M(o,n,r){const e=s(()=>n().ownerState||{},r);return s(n,{get ownerState(){if(!U(o()))return e}})}l(M,"appendOwnerState");function k(o){return G("MuiBadge",o)}l(k,"getBadgeUtilityClass");const rn=P("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function F(o){return T(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(F,"useBadgeInvisibleMemo");function tn(o){const n=s({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=N(n,["anchorOrigin","badgeContent","max","variant"]),e=F(n),t=s(()=>e()?r:n),a=T(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return s(t,{get invisible(){return e()},get displayValue(){return a()}})}l(tn,"useBadge");const I=V()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:k,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),an=I.component(l(function({allProps:n,otherProps:r,props:e}){const t=tn(n),a=s(n,t),m=l(()=>r.component||e.components.Root||"span","Root"),d=M(m,()=>s(r,e.componentsProps.root||{}),a),p=l(()=>e.components.Badge||"span","Badge"),v=M(p,()=>e.componentsProps.badge||{},a),f=I.useClasses(a);return i(C,s(d,r,{get component(){return m()},get class(){return y(f.root,d.class,r.class)},get children(){return[J(()=>e.children),i(C,s(v,{get component(){return p()},get class(){return y(f.badge,v.class)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},rn,P("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),z=V()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:k,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,A=l(o=>!o||!U(o),"shouldSpreadAdditionalProps"),en=L("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),sn=L("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=z.component(l(function({allProps:n,otherProps:r,props:e}){const[,t]=K(r,["component"]),a=N(n,["anchorOrigin","color","overlap"]),m=F(n),d=s(()=>m()?a:n),p=s(n,{get invisible(){return m()}}),v=z.useClasses(p),f=s({Root:en,Badge:sn},()=>r.components),Z=s(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),H=s(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),S={root:s(()=>r.componentsProps.root||{},()=>A(r.components.Root)&&{as:r.component,ownerState:Z}),badge:s(()=>r.componentsProps.badge||{},()=>A(r.components.Badge)&&{ownerState:H})};return i(an,s({get variant(){return e.variant}},t,{components:f,componentsProps:S,classes:v}))},"Badge")),ln=x('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),cn=x('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0),gn=Q(()=>[ln.cloneNode(!0),cn.cloneNode(!0)],"Remove"),D=x("<div></div>");function W(){const[o,n]=R(1),[r,e]=R(!1),t=l(()=>{e(!r())},"handleBadgeVisibility");return i(X,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const a=D.cloneNode(!0);return u(a,i(h,{color:"secondary",get badgeContent(){return o()},get children(){return i(O,{})}}),null),u(a,i($,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return i(gn,{fontSize:"small"})}}),null),u(a,i($,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return i(w,{fontSize:"small"})}}),null),a})(),(()=>{const a=D.cloneNode(!0);return u(a,i(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return i(O,{})}}),null),u(a,i(nn,{sx:{color:"text.primary"},get control(){return i(on,{get checked(){return!r()},onChange:t})},label:"Show Badge"}),null),a})()]}})}l(W,"BadgeVisibility");W.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function $n(){return i(Y,{get name(){return h.name},docsName:"badges",examples:[_,W]})}l($n,"BadgePage");export{$n as default};
