var z=Object.defineProperty;var i=(o,a)=>z(o,"name",{value:a,configurable:!0});import{r as y,s as C,v as I,w as u,x as B,ah as A,a4 as N,m as d,d as e,E as b,B as m,c as h,t as s}from"./index.9795753c.js";import{C as R}from"./ComponentInfo.69c4d456.js";import{A as l}from"./Add.4ab7aaf9.js";import{F as k}from"./Favorite.3e07b477.js";import"./Link.2927b89b.js";import"./copyText.9664b0a5.js";import"./PaperCode.55644e03.js";function $(o){return C("MuiFab",o)}i($,"getFabUtilityClass");const g=y("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),c=I()({name:"MuiFab",selfPropNames:["children","classes","color","disabled","disableFocusRipple","disableRipple","href","size","variant"],utilityClass:$,slotClasses:o=>({root:["root",o.variant,`size${u(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),M=B(A,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],a[`size${u(r.size)}`],r.color==="inherit"&&a.colorInherit,a[u(r.size)],a[r.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${g.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${g.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),n=c.defineComponent(i(function(a){const r=c.useThemeProps({props:a}),[,f]=N(r,["children","class","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]),t=d({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"},r),p=d(r,{get color(){return t.color},get component(){return t.component},get disabled(){return t.disabled},get disableFocusRipple(){return t.disableFocusRipple},get size(){return t.size},get variant(){return t.variant}}),x=c.useClasses(p);return e(M,d({get class(){return b(x.root,r.class)},get component(){return t.component},get disabled(){return t.disabled},get focusRipple(){return!t.disableFocusRipple},get focusVisibleClassName(){return b(r.focusVisibleClassName)},ownerState:p},f,{get children(){return r.children}}))},"Fab"));function v(){return e(m,{sx:{"& > :not(style)":{m:1}},get children(){return[e(n,{size:"small",color:"secondary","aria-label":"add",get children(){return e(l,{})}}),e(n,{size:"medium",color:"secondary","aria-label":"add",get children(){return e(l,{})}}),e(n,{color:"secondary","aria-label":"add",get children(){return e(l,{})}})]}})}i(v,"FloatingActionButtonSize");v.code=`import AddIcon from "@suid/icons-material/Add";
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
`;const E=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),P=s('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>',4,!0),V=h(()=>[E.cloneNode(!0),P.cloneNode(!0)],"Edit"),L=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),w=s('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>',4,!0),H=h(()=>[L.cloneNode(!0),w.cloneNode(!0)],"Navigation");function F(){return e(m,{sx:{"& > :not(style)":{m:1}},get children(){return[e(n,{color:"primary","aria-label":"add",get children(){return e(l,{})}}),e(n,{color:"secondary","aria-label":"edit",get children(){return e(V,{})}}),e(n,{variant:"extended",get children(){return[e(H,{sx:{mr:1}}),"Navigate"]}}),e(n,{disabled:!0,"aria-label":"like",get children(){return e(k,{})}})]}})}i(F,"FloatingActionButtons");F.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function J(){return e(R,{get name(){return n.name},examples:[{component:F,title:"Basic FAB"},{title:"Size",component:v}],docsName:"floating-action-button"})}i(J,"FloatingActionButtonPage");export{J as default};
