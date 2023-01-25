var z=Object.defineProperty;var n=(o,a)=>z(o,"name",{value:a,configurable:!0});import{o as y,B as g,c as h}from"./ListItemText-7ae6925f.js";import{O as C,P as I,I as B,Q as u,R as A,D as N,p as d,c as e,J as m,t as s}from"./ErrorPage-e9c3e4c4.js";import{C as R}from"./ComponentInfo-5876f613.js";import{A as l}from"./Add-7e424548.js";import{F as k}from"./Favorite-9e368b1e.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function $(o){return I("MuiFab",o)}n($,"getFabUtilityClass");const b=C("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),c=B()({name:"MuiFab",selfPropNames:["children","classes","color","disabled","disableFocusRipple","disableRipple","href","size","variant"],utilityClass:$,slotClasses:o=>({root:["root",o.variant,`size${u(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),M=A(y,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],a[`size${u(r.size)}`],r.color==="inherit"&&a.colorInherit,a[u(r.size)],a[r.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${b.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${b.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),i=c.defineComponent(n(function(a){const r=c.useThemeProps({props:a}),[,v]=N(r,["children","class","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]),t=d({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"},r),p=d(r,{get color(){return t.color},get component(){return t.component},get disabled(){return t.disabled},get disableFocusRipple(){return t.disableFocusRipple},get size(){return t.size},get variant(){return t.variant}}),x=c.useClasses(p);return e(M,d({get class(){return m(x.root,r.class)},get component(){return t.component},get disabled(){return t.disabled},get focusRipple(){return!t.disableFocusRipple},get focusVisibleClassName(){return m(r.focusVisibleClassName)},ownerState:p},v,{get children(){return r.children}}))},"Fab"));function F(){return e(g,{sx:{"& > :not(style)":{m:1}},get children(){return[e(i,{size:"small",color:"secondary","aria-label":"add",get children(){return e(l,{})}}),e(i,{size:"medium",color:"secondary","aria-label":"add",get children(){return e(l,{})}}),e(i,{color:"secondary","aria-label":"add",get children(){return e(l,{})}})]}})}n(F,"FloatingActionButtonSize");F.code=`import AddIcon from "@suid/icons-material/Add";
import { Box, Fab } from "@suid/material";

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
`;const P=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),V=s('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>',4,!0),E=h(()=>[P.cloneNode(!0),V.cloneNode(!0)],"Edit"),L=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),H=s('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>',4,!0),W=h(()=>[L.cloneNode(!0),H.cloneNode(!0)],"Navigation");function f(){return e(g,{sx:{"& > :not(style)":{m:1}},get children(){return[e(i,{color:"primary","aria-label":"add",get children(){return e(l,{})}}),e(i,{color:"secondary","aria-label":"edit",get children(){return e(E,{})}}),e(i,{variant:"extended",get children(){return[e(W,{sx:{mr:1}}),"Navigate"]}}),e(i,{disabled:!0,"aria-label":"like",get children(){return e(k,{})}})]}})}n(f,"FloatingActionButtons");f.code=`import AddIcon from "@suid/icons-material/Add";
import EditIcon from "@suid/icons-material/Edit";
import FavoriteIcon from "@suid/icons-material/Favorite";
import NavigationIcon from "@suid/icons-material/Navigation";
import { Box, Fab } from "@suid/material";

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
`;function S(){return e(R,{get name(){return i.name},examples:[{component:f,title:"Basic FAB"},{title:"Size",component:F}],docsName:"floating-action-button"})}n(S,"FloatingActionButtonPage");export{S as default};
