var f=Object.defineProperty;var n=(o,a)=>f(o,"name",{value:a,configurable:!0});import{q as v,r as F,s as x,v as c,w as z,ah as y,d as i,m as I,A as u,B as m,c as g,t as d}from"./index.bf44a517.js";import{C as B}from"./ComponentInfo.3428de0d.js";import{A as l}from"./Add.37efea77.js";import{F as C}from"./Favorite.56dc649f.js";import"./Link.6e331fd6.js";import"./copyText.aa624b45.js";import"./PaperCode.aa36a556.js";function A(o){return F("MuiFab",o)}n(A,"getFabUtilityClass");const b=v("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),N=x()({name:"MuiFab",propDefaults:({set:o})=>o({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"}),selfPropNames:["children","classes","color","disableFocusRipple","disableRipple","disabled","href","size","variant"],utilityClass:A,slotClasses:o=>({root:["root",o.variant,`size${c(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),k=z(y,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,a[r.variant],a[`size${c(r.size)}`],r.color==="inherit"&&a.colorInherit,a[c(r.size)],a[r.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${b.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${b.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),e=N.component(n(function({allProps:a,classes:r,otherProps:s,props:t}){return i(k,I({get className(){return u(r.root,s.className)},get disabled(){return t.disabled},get focusRipple(){return!t.disableFocusRipple},get focusVisibleClassName(){return u(t.classes?.focusVisible,s.focusVisibleClassName)},ownerState:a},s,{get children(){return t.children}}))},"Fab"));function p(){return i(m,{sx:{"& > :not(style)":{m:1}},get children(){return[i(e,{size:"small",color:"secondary","aria-label":"add",get children(){return i(l,{})}}),i(e,{size:"medium",color:"secondary","aria-label":"add",get children(){return i(l,{})}}),i(e,{color:"secondary","aria-label":"add",get children(){return i(l,{})}})]}})}n(p,"FloatingActionButtonSize");p.code=`import AddIcon from "@suid/icons-material/Add";
import Box from "@suid/material/Box";
import Fab from "@suid/material/Fab";

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
`;const R=d('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),$=d('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>',4,!0);var M=g(()=>[R.cloneNode(!0),$.cloneNode(!0)],"Edit");const V=d('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),E=d('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>',4,!0);var L=g(()=>[V.cloneNode(!0),E.cloneNode(!0)],"Navigation");function h(){return i(m,{sx:{"& > :not(style)":{m:1}},get children(){return[i(e,{color:"primary","aria-label":"add",get children(){return i(l,{})}}),i(e,{color:"secondary","aria-label":"edit",get children(){return i(M,{})}}),i(e,{variant:"extended",get children(){return[i(L,{sx:{mr:1}}),"Navigate"]}}),i(e,{disabled:!0,"aria-label":"like",get children(){return i(C,{})}})]}})}n(h,"FloatingActionButtons");h.code=`import AddIcon from "@suid/icons-material/Add";
import EditIcon from "@suid/icons-material/Edit";
import FavoriteIcon from "@suid/icons-material/Favorite";
import NavigationIcon from "@suid/icons-material/Navigation";
import Box from "@suid/material/Box";
import Fab from "@suid/material/Fab";

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
`;function P(){return i(B,{get name(){return e.name},examples:[{component:h,title:"Basic FAB"},{title:"Size",component:p}],docsName:"floating-action-button"})}n(P,"FloatingActionButtonPage");export{P as default};
