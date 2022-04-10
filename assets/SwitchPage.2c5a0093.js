var j=Object.defineProperty;var n=(e,t)=>j(e,"name",{value:t,configurable:!0});import{S as E,F as H}from"./SwitchBase.9b9fb31b.js";import{q as L,r as P,s as F,v as c,w as m,y as v,V as O,U as W,K as R,m as i,ab as z,d as r,A as M,a as B,n as $,ae as X,T as x,a6 as b,t as _}from"./index.a75878e1.js";import{C as q}from"./ComponentInfo.26f944a3.js";import{f as K}from"./formControlState.66b9c97b.js";import{u as V}from"./useFormControl.e351997b.js";import"./useControlled.ef9e4997.js";import"./Link.2d5ee3c7.js";import"./copyText.4cc28f77.js";import"./PaperCode.c72d4bb9.js";function G(e){return P("MuiSwitch",e)}n(G,"getSwitchUtilityClass");const l=L("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),J=F()({name:"MuiSwitch",selfPropNames:["checkedIcon","classes","color","disabled","icon","size","value"],propDefaults:({set:e})=>e({color:"primary",size:"medium"}),utilityClass:G,slotClasses:e=>({root:["root",!!e.edge&&`edge${c(e.edge)}`,`size${c(e.size)}`],switchBase:["switchBase",`color${c(e.color)}`,!!e.checked&&"checked",!!e.disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]})}),Q=m("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${c(o.edge)}`],t[`size${c(o.size)}`]]}})(({ownerState:e})=>({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},...e.edge==="start"&&{marginLeft:-8},...e.edge==="end"&&{marginRight:-8},...e.size==="small"&&{width:40,height:24,padding:7,[`& .${l.thumb}`]:{width:16,height:16},[`& .${l.switchBase}`]:{padding:4,[`&.${l.checked}`]:{transform:"translateX(16px)"}}}})),Y=m(E,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${l.input}`]:t.input},o.color!=="default"&&t[`color${c(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${l.checked}`]:{transform:"translateX(20px)"},[`&.${l.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${l.checked} + .${l.track}`]:{opacity:.5},[`&.${l.disabled} + .${l.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${l.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>({"&:hover":{backgroundColor:v(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...t.color!=="default"&&{[`&.${l.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:v(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.disabled}`]:{color:e.palette.mode==="light"?O(e.palette[t.color].main,.62):W(e.palette[t.color].main,.55)}},[`&.${l.checked} + .${l.track}`]:{backgroundColor:e.palette[t.color].main}}})),Z=m("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),ee=m("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),d=J.component(n(function({allProps:t,props:o,classes:a,otherProps:u}){const h=R(()=>r(ee,{get className(){return a.thumb},ownerState:t})),f=i(a,()=>({root:a.switchBase})),[,C]=z(u,["sx"]),k=i(()=>({icon:h(),checkedIcon:h()}),()=>({checkedIcon:o.checkedIcon,disabled:o.disabled,icon:o.icon,value:o.value}),C);return r(Q,{get className(){return M(a.root,u.className)},get sx(){return u.sx},ownerState:t,get children(){return[r(Y,i({type:"checkbox",ownerState:t},k,{classes:f})),r(Z,{get className(){return a.track},ownerState:t})]}})},"Switch"));function te(e){return P("MuiFormControlLabel",e)}n(te,"getFormControlLabelUtilityClasses");const p=L("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),y=F()({name:"MuiFormControlLabel",propDefaults:({set:e})=>e({componentsProps:{},labelPlacement:"end"}),selfPropNames:["checked","classes","componentsProps","control","disableTypography","disabled","inputRef","label","labelPlacement","name","onChange","value"],autoCallUseClasses:!1,utilityClass:te,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",`labelPlacement${c(e.labelPlacement)}`,!!e.error&&"error"],label:["label",!!e.disabled&&"disabled"]})}),oe=m("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${p.label}`]:t.label},t.root,t[`labelPlacement${c(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${p.disabled}`]:{cursor:"default"},...t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},...t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},...t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},[`& .${p.label}`]:{[`&.${p.disabled}`]:{color:e.palette.text.disabled}}})),ae=y.component(n(function({allProps:t,otherProps:o,props:a}){const u=V(),[h]=z(a,["checked","name","onChange","value","inputRef","disabled"]),[f,C]=B(a.disabled),k=i(h,{setDisabled:s=>C(s)}),D=K({props:t,muiFormControl:u,states:["error"]}),w=i(t,()=>({error:D.error}),()=>({disabled:f()})),S=y.useClasses(w),U=n(s=>s instanceof HTMLElement&&s.classList.contains(x.toString()),"isTypography"),A=R(()=>{const s=X(()=>a.label)();return U(s)||a.disableTypography?s:r(x,i({component:"span",get className(){return S.label}},()=>a.componentsProps.typography||{},{get children(){return a.label}}))});return r(H.Provider,{value:k,get children(){return r(oe,i(o,{get className(){return M(S.root,o.className)},ownerState:w,get children(){return[$(()=>a.control),$(()=>A())]}}))}})},"FormControlLabel"));function T(){return r(ae,{disabled:!0,get control(){return r(d,{defaultChecked:!0})},label:"Label"})}n(T,"Label");T.code=`import FormControlLabel from "@suid/material/FormControlLabel";
import Switch from "@suid/material/Switch";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const le=_("<div></div>"),g={inputProps:{"aria-label":"Switch demo"}};function N(){return(()=>{const e=le.cloneNode(!0);return b(e,r(d,i(g,{defaultChecked:!0})),null),b(e,r(d,g),null),b(e,r(d,i(g,{disabled:!0,defaultChecked:!0})),null),b(e,r(d,i(g,{disabled:!0})),null),e})()}n(N,"BasicSwitches");N.code=`import Switch from "@suid/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}
`;function I(){const[e,t]=B(!1);return r(d,{get checked(){return e()},onChange:(o,a)=>{t(a)},inputProps:{"aria-label":"controlled"}})}n(I,"ControlledSwitch");I.code=`import Switch from "@suid/material/Switch";
import { createSignal } from "solid-js";

export default function ControlledSwitch() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Switch
      checked={checked()}
      onChange={(event, value) => {
        setChecked(value);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
`;function pe(){return r(q,{get name(){return d.name},docsName:"switches",examples:[N,I,T]})}n(pe,"SwitchPage");export{pe as default};
