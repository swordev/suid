var b=Object.defineProperty;var r=(o,a)=>b(o,"name",{value:a,configurable:!0});import{k as m,l as h,i as v,n as d,s as f,O as F,c,B as x}from"./index.c57144ef.js";import{a as i,m as z,g as u,t as e}from"./vendor.7d03e054.js";import{C}from"./ComponentInfo.f7f7392b.js";import{A as N}from"./Add.9c98d393.js";import"./Link.a158817a.js";import"./copyText.1fa6c8bf.js";import"./PaperCode.71992af9.js";function I(o){return h("MuiFab",o)}r(I,"getFabUtilityClass");const p=m("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),y=v()({name:"MuiFab",propDefaults:({set:o})=>o({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"}),selfPropNames:["children","classes","color","disableFocusRipple","disableRipple","disabled","href","size","variant"],utilityClass:I,slotClasses:o=>({root:["root",o.variant,`size${d(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),$=f(F,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],a[`size${d(t.size)}`],t.color==="inherit"&&a.colorInherit,a[d(t.size)],a[t.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${p.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${p.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),n=y.component(r(function({allProps:a,classes:t,otherProps:s,props:l}){return i($,z({get className(){return u(t.root,s.className)},get disabled(){return l.disabled},get focusRipple(){return!l.disableFocusRipple},get focusVisibleClassName(){return u(l.classes?.focusVisible,s.focusVisibleClassName)},ownerState:a},s,{get children(){return l.children}}))},"Fab")),B=e('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),k=e('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>',4,!0);var M=c(()=>[B.cloneNode(!0),k.cloneNode(!0)],"Edit");const R=e('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),A=e('<svg><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>',4,!0);var L=c(()=>[R.cloneNode(!0),A.cloneNode(!0)],"Favorite");const V=e('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),_=e('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>',4,!0);var E=c(()=>[V.cloneNode(!0),_.cloneNode(!0)],"Navigation");function g(){return i(x,{sx:{"& > :not(style)":{m:1}},get children(){return[i(n,{color:"primary","aria-label":"add",get children(){return i(N,{})}}),i(n,{color:"secondary","aria-label":"edit",get children(){return i(M,{})}}),i(n,{variant:"extended",get children(){return[i(E,{sx:{mr:1}}),"Navigate"]}}),i(n,{disabled:!0,"aria-label":"like",get children(){return i(L,{})}})]}})}r(g,"FloatingActionButtons");g.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function j(){return i(C,{get name(){return n.name},examples:[{component:g,title:"Basic FAB"}],docsName:"floating-action-button"})}r(j,"FloatingActionButtonPage");export{j as default};
