var z=Object.defineProperty;var t=(o,a)=>z(o,"name",{value:a,configurable:!0});import{E as y,H as C,J as I,K as u,Q as B,U as A,R,m as d,d as e,O as b,B as m,c as h,t as l}from"./index-2ade038b.js";import{C as k}from"./ComponentInfo-bf8f3e44.js";import{A as s}from"./Add-9034f0ce.js";import{F as N}from"./Favorite-dda698cc.js";import"./Link-b969f3af.js";import"./copyText-64309802.js";import"./PaperCode-2146d787.js";import"./_commonjsHelpers-0119a68f.js";function $(o){return C("MuiFab",o)}t($,"getFabUtilityClass");const g=y("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),c=I()({name:"MuiFab",selfPropNames:["children","classes","color","disabled","disableFocusRipple","disableRipple","href","size","variant"],utilityClass:$,slotClasses:o=>({root:["root",o.variant,`size${u(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),M=B(A,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.root,a[i.variant],a[`size${u(i.size)}`],i.color==="inherit"&&a.colorInherit,a[u(i.size)],a[i.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${g.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${g.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),n=c.defineComponent(t(function(a){const i=c.useThemeProps({props:a}),[,v]=R(i,["children","class","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]),r=d({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"},i),p=d(i,{get color(){return r.color},get component(){return r.component},get disabled(){return r.disabled},get disableFocusRipple(){return r.disableFocusRipple},get size(){return r.size},get variant(){return r.variant}}),x=c.useClasses(p);return e(M,d({get class(){return b(x.root,i.class)},get component(){return r.component},get disabled(){return r.disabled},get focusRipple(){return!r.disableFocusRipple},get focusVisibleClassName(){return b(i.focusVisibleClassName)},ownerState:p},v,{get children(){return i.children}}))},"Fab"));function f(){return e(m,{sx:{"& > :not(style)":{m:1}},get children(){return[e(n,{size:"small",color:"secondary","aria-label":"add",get children(){return e(s,{})}}),e(n,{size:"medium",color:"secondary","aria-label":"add",get children(){return e(s,{})}}),e(n,{color:"secondary","aria-label":"add",get children(){return e(s,{})}})]}})}t(f,"FloatingActionButtonSize");f.code=`import AddIcon from "@suid/icons-material/Add";
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
`;const E=l('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),P=l('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></svg>',!1,!0),V=h(()=>[E(),P()],"Edit"),H=l('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),L=l('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></svg>',!1,!0),U=h(()=>[H(),L()],"Navigation");function F(){return e(m,{sx:{"& > :not(style)":{m:1}},get children(){return[e(n,{color:"primary","aria-label":"add",get children(){return e(s,{})}}),e(n,{color:"secondary","aria-label":"edit",get children(){return e(V,{})}}),e(n,{variant:"extended",get children(){return[e(U,{sx:{mr:1}}),"Navigate"]}}),e(n,{disabled:!0,"aria-label":"like",get children(){return e(N,{})}})]}})}t(F,"FloatingActionButtons");F.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function j(){return e(k,{get name(){return n.name},examples:[{component:F,title:"Basic FAB"},{title:"Size",component:f}],docsName:"floating-action-button"})}t(j,"FloatingActionButtonPage");export{j as default};
