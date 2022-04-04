var b=Object.defineProperty;var r=(o,a)=>b(o,"name",{value:a,configurable:!0});import{i as m,j as h,k as v,l as d,s as f,O as F,c as p,B as x}from"./index.90bba7b1.js";import{a as i,m as z,h as c,t as l}from"./vendor.37d14b95.js";import{C}from"./ComponentInfo.5f5b447b.js";import{A as I}from"./Add.a917ab08.js";import{F as N}from"./Favorite.3c2fa95f.js";import"./Link.cc833b14.js";import"./copyText.78cd2380.js";import"./PaperCode.759a44a2.js";function y(o){return h("MuiFab",o)}r(y,"getFabUtilityClass");const u=m("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),B=v()({name:"MuiFab",propDefaults:({set:o})=>o({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"}),selfPropNames:["children","classes","color","disableFocusRipple","disableRipple","disabled","href","size","variant"],utilityClass:y,slotClasses:o=>({root:["root",o.variant,`size${d(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),k=f(F,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],a[`size${d(t.size)}`],t.color==="inherit"&&a.colorInherit,a[d(t.size)],a[t.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${u.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${u.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),e=B.component(r(function({allProps:a,classes:t,otherProps:s,props:n}){return i(k,z({get className(){return c(t.root,s.className)},get disabled(){return n.disabled},get focusRipple(){return!n.disableFocusRipple},get focusVisibleClassName(){return c(n.classes?.focusVisible,s.focusVisibleClassName)},ownerState:a},s,{get children(){return n.children}}))},"Fab")),R=l('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),$=l('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>',4,!0);var A=p(()=>[R.cloneNode(!0),$.cloneNode(!0)],"Edit");const M=l('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),V=l('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>',4,!0);var E=p(()=>[M.cloneNode(!0),V.cloneNode(!0)],"Navigation");function g(){return i(x,{sx:{"& > :not(style)":{m:1}},get children(){return[i(e,{color:"primary","aria-label":"add",get children(){return i(I,{})}}),i(e,{color:"secondary","aria-label":"edit",get children(){return i(A,{})}}),i(e,{variant:"extended",get children(){return[i(E,{sx:{mr:1}}),"Navigate"]}}),i(e,{disabled:!0,"aria-label":"like",get children(){return i(N,{})}})]}})}r(g,"FloatingActionButtons");g.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function O(){return i(C,{get name(){return e.name},examples:[{component:g,title:"Basic FAB"}],docsName:"floating-action-button"})}r(O,"FloatingActionButtonPage");export{O as default};
