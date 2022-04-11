var j=Object.defineProperty;var n=(e,t)=>j(e,"name",{value:t,configurable:!0});import{S as E,F as H}from"./SwitchBase.5dc33be8.js";import{q as L,r as P,s as R,v as c,w as m,y as v,U as O,R as W,K as F,m as i,ab as z,d as r,A as M,a as B,n as $,ae as X,T as x,a6 as b,t as _}from"./index.cd31afdd.js";import{C as q}from"./ComponentInfo.e0618143.js";import{f as K}from"./formControlState.70b2d314.js";import{u as G}from"./useFormControl.3ffc84d1.js";import"./useControlled.18a14554.js";import"./Link.31d00855.js";import"./copyText.a47b39a4.js";import"./PaperCode.801a8a33.js";function J(e){return P("MuiSwitch",e)}n(J,"getSwitchUtilityClass");const l=L("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Q=R()({name:"MuiSwitch",selfPropNames:["checkedIcon","classes","color","disabled","icon","size","value"],propDefaults:({set:e})=>e({color:"primary",size:"medium"}),utilityClass:J,slotClasses:e=>({root:["root",!!e.edge&&`edge${c(e.edge)}`,`size${c(e.size)}`],switchBase:["switchBase",`color${c(e.color)}`,!!e.checked&&"checked",!!e.disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]})}),V=m("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${c(o.edge)}`],t[`size${c(o.size)}`]]}})(({ownerState:e})=>({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},...e.edge==="start"&&{marginLeft:-8},...e.edge==="end"&&{marginRight:-8},...e.size==="small"&&{width:40,height:24,padding:7,[`& .${l.thumb}`]:{width:16,height:16},[`& .${l.switchBase}`]:{padding:4,[`&.${l.checked}`]:{transform:"translateX(16px)"}}}})),Y=m(E,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${l.input}`]:t.input},o.color!=="default"&&t[`color${c(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${l.checked}`]:{transform:"translateX(20px)"},[`&.${l.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${l.checked} + .${l.track}`]:{opacity:.5},[`&.${l.disabled} + .${l.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${l.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>({"&:hover":{backgroundColor:v(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...t.color!=="default"&&{[`&.${l.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:v(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.disabled}`]:{color:e.palette.mode==="light"?O(e.palette[t.color].main,.62):W(e.palette[t.color].main,.55)}},[`&.${l.checked} + .${l.track}`]:{backgroundColor:e.palette[t.color].main}}})),Z=m("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),ee=m("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),d=Q.component(n(function({allProps:t,props:o,classes:a,otherProps:u}){const h=F(()=>r(ee,{get className(){return a.thumb},ownerState:t})),f=i(a,()=>({root:a.switchBase})),[,C]=z(u,["sx"]),k=i(()=>({icon:h(),checkedIcon:h()}),()=>({checkedIcon:o.checkedIcon,disabled:o.disabled,icon:o.icon,value:o.value}),C);return r(V,{get className(){return M(a.root,u.className)},get sx(){return u.sx},ownerState:t,get children(){return[r(Y,i({type:"checkbox",ownerState:t},k,{classes:f})),r(Z,{get className(){return a.track},ownerState:t})]}})},"Switch"));function te(e){return P("MuiFormControlLabel",e)}n(te,"getFormControlLabelUtilityClasses");const p=L("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),y=R()({name:"MuiFormControlLabel",propDefaults:({set:e})=>e({componentsProps:{},labelPlacement:"end"}),selfPropNames:["checked","classes","componentsProps","control","disableTypography","disabled","inputRef","label","labelPlacement","name","onChange","value"],autoCallUseClasses:!1,utilityClass:te,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",`labelPlacement${c(e.labelPlacement)}`,!!e.error&&"error"],label:["label",!!e.disabled&&"disabled"]})}),oe=m("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${p.label}`]:t.label},t.root,t[`labelPlacement${c(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${p.disabled}`]:{cursor:"default"},...t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},...t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},...t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},[`& .${p.label}`]:{[`&.${p.disabled}`]:{color:e.palette.text.disabled}}})),ae=y.component(n(function({allProps:t,otherProps:o,props:a}){const u=G(),[h]=z(a,["checked","name","onChange","value","inputRef","disabled"]),[f,C]=B(a.disabled),k=i(h,{setDisabled:s=>C(s)}),D=K({props:t,muiFormControl:u,states:["error"]}),w=i(t,()=>({error:D.error}),()=>({disabled:f()})),S=y.useClasses(w),U=n(s=>s instanceof HTMLElement&&s.classList.contains(x.toString()),"isTypography"),A=F(()=>{const s=X(()=>a.label)();return U(s)||a.disableTypography?s:r(x,i({component:"span",get className(){return S.label}},()=>a.componentsProps.typography||{},{get children(){return a.label}}))});return r(H.Provider,{value:k,get children(){return r(oe,i(o,{get className(){return M(S.root,o.className)},ownerState:w,get children(){return[$(()=>a.control),$(()=>A())]}}))}})},"FormControlLabel"));function T(){return r(ae,{disabled:!0,get control(){return r(d,{defaultChecked:!0})},label:"Label"})}n(T,"Label");T.code=`import FormControlLabel from "@suid/material/FormControlLabel";
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
