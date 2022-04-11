var b=Object.defineProperty;var r=(o,a)=>b(o,"name",{value:a,configurable:!0});import{q as m,r as h,s as v,v as d,w as f,ac as F,d as i,m as x,A as c,c as g,t as l,B as z}from"./index.cdfdb010.js";import{C}from"./ComponentInfo.d0daa232.js";import{A as I}from"./Add.3bbaab2c.js";import{F as N}from"./Favorite.b27c1cbe.js";import"./Link.7be7d999.js";import"./copyText.0c8ea5ff.js";import"./PaperCode.7a4736ea.js";function y(o){return h("MuiFab",o)}r(y,"getFabUtilityClass");const u=m("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),B=v()({name:"MuiFab",propDefaults:({set:o})=>o({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"}),selfPropNames:["children","classes","color","disableFocusRipple","disableRipple","disabled","href","size","variant"],utilityClass:y,slotClasses:o=>({root:["root",o.variant,`size${d(o.size)}`,o.color==="inherit"?"colorInherit":o.color]})}),k=f(F,{name:"MuiFab",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],a[`size${d(t.size)}`],t.color==="inherit"&&a.colorInherit,a[d(t.size)],a[t.color]]}})(({theme:o,ownerState:a})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"},[`&.${u.focusVisible}`]:{boxShadow:o.shadows[6]},[`&.${u.disabled}`]:{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground},...a.size==="small"&&{width:40,height:40},...a.size==="medium"&&{width:48,height:48},...a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},...a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},...a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},...a.color==="inherit"&&{color:"inherit"}}),({theme:o,ownerState:a})=>({...a.color!=="inherit"&&a.color!=="default"&&o.palette[a.color]!=null&&{color:o.palette[a.color].contrastText,backgroundColor:o.palette[a.color].main,"&:hover":{backgroundColor:o.palette[a.color].dark,"@media (hover: none)":{backgroundColor:o.palette[a.color].main}}}})),e=B.component(r(function({allProps:a,classes:t,otherProps:s,props:n}){return i(k,x({get className(){return c(t.root,s.className)},get disabled(){return n.disabled},get focusRipple(){return!n.disableFocusRipple},get focusVisibleClassName(){return c(n.classes?.focusVisible,s.focusVisibleClassName)},ownerState:a},s,{get children(){return n.children}}))},"Fab")),R=l('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),A=l('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>',4,!0);var $=g(()=>[R.cloneNode(!0),A.cloneNode(!0)],"Edit");const M=l('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),V=l('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>',4,!0);var E=g(()=>[M.cloneNode(!0),V.cloneNode(!0)],"Navigation");function p(){return i(z,{sx:{"& > :not(style)":{m:1}},get children(){return[i(e,{color:"primary","aria-label":"add",get children(){return i(I,{})}}),i(e,{color:"secondary","aria-label":"edit",get children(){return i($,{})}}),i(e,{variant:"extended",get children(){return[i(E,{sx:{mr:1}}),"Navigate"]}}),i(e,{disabled:!0,"aria-label":"like",get children(){return i(N,{})}})]}})}r(p,"FloatingActionButtons");p.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function q(){return i(C,{get name(){return e.name},examples:[{component:p,title:"Basic FAB"}],docsName:"floating-action-button"})}r(q,"FloatingActionButtonPage");export{q as default};
