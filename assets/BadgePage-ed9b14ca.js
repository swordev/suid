var S=Object.defineProperty;var l=(o,n)=>S(o,"name",{value:n,configurable:!0});import{W as E,m as J,p as s,O as P,P as Q,j as C,I as T,Q as c,c as i,a5 as y,J as R,R as L,D as q,t as x,h as $,U as u}from"./ErrorPage-8328033b.js";import{n as N,c as G,d as I,B as K}from"./ListItemText-2c02fa7d.js";import{C as X}from"./ComponentInfo-df3978bc.js";import{A as Y}from"./Add-75e9724a.js";import{M as O}from"./Mail-9b9de3e9.js";import{F as w}from"./FormControlLabel-e4a9edc3.js";import{S as nn}from"./Switch-dd451766.js";import"./Link-5f70a01e.js";import"./copyText-4715102c.js";import"./IconButton-cd66fd78.js";import"./Paper-a16bc6e4.js";import"./PaperCode-76bb4bc5.js";import"./PageNav-6d63da47.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-4f481a8f.js";import"./useFormControl-99bcea9b.js";import"./SwitchBase-d09aae90.js";import"./useControlled-3e967372.js";function V(o,n){const r=n.reduce((t,a)=>(t[a]=o[a],t),{}),e=E(r);for(const t of n)J(a=>(e[t]=a,o[t]),o[t]);return e}l(V,"usePreviousProps");function M(o,n,r){const e=s(()=>n().ownerState||{},r);return s(n,{get ownerState(){if(!N(o()))return e}})}l(M,"appendOwnerState");function k(o){return Q("MuiBadge",o)}l(k,"getBadgeUtilityClass");const on=P("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]);function W(o){return C(()=>o.invisible===!1&&(o.badgeContent===0&&!o.showZero||o.badgeContent==null&&o.variant!=="dot")?!0:o.invisible)}l(W,"useBadgeInvisibleMemo");function rn(o){const n=s({anchorOrigin:{vertical:"top",horizontal:"right"},invisible:!1,max:99,showZero:!1,variant:"standard"},o),r=V(n,["anchorOrigin","badgeContent","max","variant"]),e=W(n),t=s(()=>e()?r:n),a=C(()=>{if(t.variant!=="dot")return t.badgeContent&&Number(t.badgeContent)>t.max?`${t.max}+`:t.badgeContent});return s(t,{get invisible(){return e()},get displayValue(){return a()}})}l(rn,"useBadge");const z=T()({name:"MuiBadgeUnstyled",autoCallUseClasses:!1,selfPropNames:["anchorOrigin","badgeContent","children","classes","components","components","componentsProps","invisible","max","showZero","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},components:{},componentsProps:{},max:99,showZero:!1,variant:"standard",invisible:!1}),utilityClass:k,slotClasses:o=>({root:["root"],badge:["badge",o.variant,`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}`,o.invisible&&"invisible"]})}),tn=z.component(l(function({allProps:n,otherProps:r,props:e}){const t=rn(n),a=s(n,t),m=l(()=>r.component||e.components.Root||"span","Root"),d=M(m,()=>s(r,e.componentsProps.root||{}),a),p=l(()=>e.components.Badge||"span","Badge"),f=M(p,()=>e.componentsProps.badge||{},a),v=z.useClasses(a);return i(y,s(d,r,{get component(){return m()},get class(){return R(v.root,d.class,r.class)},get children(){return[C(()=>e.children),i(y,s(f,{get component(){return p()},get class(){return R(v.badge,f.class)},get children(){return t.displayValue}}))]}}))},"BadgeUnstyled")),g=Object.assign({},on,P("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),D=T()({name:"MuiBadge",selfPropNames:["classes","color","overlap","variant"],propDefaults:({set:o})=>o({anchorOrigin:{vertical:"top",horizontal:"right"},component:"span",components:{},componentsProps:{},overlap:"rectangular",color:"default",invisible:!1,showZero:!1,variant:"standard",max:99}),autoCallUseClasses:!1,utilityClass:k,slotClasses:o=>({badge:[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`,`overlap${c(o.overlap)}`,o.color!=="default"&&`color${c(o.color)}`]})}),b=10,B=4,U=l(o=>!o||!N(o),"shouldSpreadAdditionalProps"),an=L("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),en=L("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,n)=>{const{ownerState:r}=o;return[n.badge,n[r.variant],n[`anchorOrigin${c(r.anchorOrigin.vertical)}${c(r.anchorOrigin.horizontal)}${c(r.overlap)}`],r.color!=="default"&&n[`color${c(r.color)}`],r.invisible&&n.invisible]}})(({theme:o,ownerState:n})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...n.color!=="default"&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},aaaaaaaaaaaaaa:"a",...n.variant==="dot"&&{xxxxxxxxxxxxxx:"b",borderRadius:B,height:B*2,minWidth:B*2,padding:0},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),h=D.component(l(function({allProps:n,otherProps:r,props:e}){const[,t]=q(r,["component"]),a=V(n,["anchorOrigin","color","overlap"]),m=W(n),d=s(()=>m()?a:n),p=s(n,{get invisible(){return m()}}),f=D.useClasses(p),v=s({Root:an,Badge:en},()=>r.components),Z=s(()=>r.componentsProps.root?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),j=s(()=>r.componentsProps.badge?.ownerState||{},{get color(){return d.color},get overlap(){return d.overlap}}),H={root:s(()=>r.componentsProps.root||{},()=>U(r.components.Root)&&{as:r.component,ownerState:Z}),badge:s(()=>r.componentsProps.badge||{},()=>U(r.components.Badge)&&{ownerState:j})};return i(tn,s({get variant(){return e.variant}},t,{components:v,componentsProps:H,classes:f}))},"Badge")),sn=x('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),ln=x('<svg><path d="M19 13H5v-2h14v2z"></path></svg>',4,!0),cn=G(()=>[sn.cloneNode(!0),ln.cloneNode(!0)],"Remove"),A=x("<div></div>",2);function F(){const[o,n]=$(1),[r,e]=$(!1),t=l(()=>{e(!r())},"handleBadgeVisibility");return i(K,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},get children(){return[(()=>{const a=A.cloneNode(!0);return u(a,i(h,{color:"secondary",get badgeContent(){return o()},get children(){return i(O,{})}}),null),u(a,i(I,{"aria-label":"reduce",onClick:()=>{n(Math.max(o()-1,0))},get children(){return i(cn,{fontSize:"small"})}}),null),u(a,i(I,{"aria-label":"increase",onClick:()=>{n(o()+1)},get children(){return i(Y,{fontSize:"small"})}}),null),a})(),(()=>{const a=A.cloneNode(!0);return u(a,i(h,{color:"secondary",variant:"dot",get invisible(){return r()},get children(){return i(O,{})}}),null),u(a,i(w,{sx:{color:"text.primary"},get control(){return i(nn,{get checked(){return!r()},onChange:t})},label:"Show Badge"}),null),a})()]}})}l(F,"BadgeVisibility");F.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function An(){return i(X,{get name(){return h.name},docsName:"badges",examples:[_,F]})}l(An,"BadgePage");export{An as default};
