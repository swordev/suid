var W=Object.defineProperty;var u=(e,t)=>W(e,"name",{value:t,configurable:!0});import{aj as N,q as z,r as y,s as x,ak as A,v,w as $,al as I,y as p,m as h,d as l,A as R,a as H,c as f,t as d}from"./index.6d1e395d.js";import{C as L}from"./ComponentInfo.599502bc.js";import"./Link.6b86d802.js";import"./copyText.3b8efda4.js";import"./PaperCode.862f7f59.js";const b=N({});function k(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.indexOf(e)>=0:e===t}u(k,"isValueSelected");function O(e){return y("MuiToggleButton",e)}u(O,"getToggleButtonUtilityClass");const B=z("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),C=x()({name:"MuiToggleButton",selfPropNames:["children","classes","color","disableFocusRipple","disabled","fullWidth","onChange","onClick","selected","size","value"],propDefaults:({set:e})=>{const t=A(b);return e({get color(){return t.color??"standard"},get disabled(){return t.disabled??!1},disableFocusRipple:!1,fullWidth:!1,get size(){return t.size??"medium"}})},autoCallUseClasses:!1,utilityClass:O,slotClasses:e=>({root:["root",!!e.selected&&"selected",e.disabled&&"disabled",e.fullWidth&&"fullWidth",`size${v(e.size)}`,e.color]})}),j=$(I,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`size${v(o.size)}`]]}})(({theme:e,ownerState:t})=>{const o=t.color==="standard"?e.palette.text.primary:e.palette[t.color].main;return{...e.typography.button,borderRadius:e.shape.borderRadius,padding:11,border:`1px solid ${e.palette.divider}`,color:e.palette.action.active,...t.fullWidth&&{width:"100%"},[`&.${B.disabled}`]:{color:e.palette.action.disabled,border:`1px solid ${e.palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:p(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${B.selected}`]:{color:o,backgroundColor:p(o,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:p(o,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:p(o,e.palette.action.selectedOpacity)}}},...t.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},...t.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)}}}),s=C.component(u(function({allProps:t,otherProps:o,props:r}){const n=A(b),i=h(t,{get selected(){return t.selected||k(r.value,n.value)},get fullWidth(){return n.fullWidth},get onChange(){return n.onChange}}),c=C.useClasses(i);return l(j,h({get className(){return R(n.className,c.root,o.className)},get disabled(){return i.disabled},get focusRipple(){return!r.disableFocusRipple},onClick:a=>{typeof r.onClick=="function"&&(r.onClick(a,r.value),a.defaultPrevented)||typeof i.onChange=="function"&&i.onChange(a,r.value)},get onChange(){return i.onChange},get value(){return r.value},ownerState:i,get["aria-pressed"](){return i.selected}},o,{get component(){return o.component},get children(){return r.children}}))},"ToggleButton"));function V(e){return y("MuiToggleButtonGroup",e)}u(V,"getToggleButtonGroupUtilityClass");const g=z("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),_=x()({name:"MuiToggleButtonGroup",selfPropNames:["children","classes","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],propDefaults:({set:e})=>e({color:"standard",disabled:!1,exclusive:!1,fullWidth:!1,orientation:"horizontal",size:"medium"}),utilityClass:V,slotClasses:e=>({root:["root",e.orientation==="vertical"&&"vertical",e.fullWidth&&"fullWidth"],grouped:["grouped",`grouped${v(e.orientation)}`,e.disabled&&"disabled"]})}),J=$("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${g.grouped}`]:t.grouped},{[`& .${g.grouped}`]:t[`grouped${v(o.orientation)}`]},t.root,o.orientation==="vertical"&&t.vertical,o.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>({display:"inline-flex",borderRadius:t.shape.borderRadius,...e.orientation==="vertical"&&{flexDirection:"column"},...e.fullWidth&&{width:"100%"},[`& .${g.grouped}`]:{...e.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${g.selected} + .${g.grouped}.${g.selected}`]:{borderTop:0,marginTop:0}}}})),F=_.component(u(function({allProps:t,classes:o,otherProps:r,props:n}){return l(b.Provider,{value:{get className(){return o.grouped},get value(){return n.value},get size(){return n.size},get fullWidth(){return n.fullWidth},get color(){return n.color},get disabled(){return n.disabled},onChange:(i,c)=>{if(n.onChange){if(n.exclusive){n.onChange(i,n.value===c?null:c);return}}else return;const a=n.value,T=a&&a.indexOf(c);let m;a&&T>=0?(m=a.slice(),m.splice(T,1)):m=a?a.concat(c):[c],n.onChange(i,m)}},get children(){return l(J,h({role:"group",get className(){return R(o.root,r.className)},ownerState:t},r,{get children(){return n.children}}))}})},"ToggleButtonGroup"));function M(){const[e,t]=H("web");return l(F,{color:"primary",get value(){return e()},exclusive:!0,onChange:(o,r)=>{t(r)},get children(){return[l(s,{value:"web",children:"Web"}),l(s,{value:"android",children:"Android"}),l(s,{value:"ios",children:"iOS"})]}})}u(M,"ColorToggleButton");M.code=`import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import { createSignal } from "solid-js";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = createSignal("web");

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment()}
      exclusive
      onChange={(event, newAlignment) => {
        setAlignment(newAlignment);
      }}
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}
`;const S=d('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),U=d('<svg><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></svg>',4,!0);var D=f(()=>[S.cloneNode(!0),U.cloneNode(!0)],"FormatAlignCenter");const P=d('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),w=d('<svg><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></svg>',4,!0);var E=f(()=>[P.cloneNode(!0),w.cloneNode(!0)],"FormatAlignJustify");const q=d('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),K=d('<svg><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></svg>',4,!0);var Q=f(()=>[q.cloneNode(!0),K.cloneNode(!0)],"FormatAlignLeft");const X=d('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Y=d('<svg><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></svg>',4,!0);var Z=f(()=>[X.cloneNode(!0),Y.cloneNode(!0)],"FormatAlignRight");function G(){const[e,t]=H("left");return l(F,{get value(){return e()},exclusive:!0,onChange:(o,r)=>{t(r)},"aria-label":"text alignment",get children(){return[l(s,{value:"left","aria-label":"left aligned",get children(){return l(Q,{})}}),l(s,{value:"center","aria-label":"centered",get children(){return l(D,{})}}),l(s,{value:"right","aria-label":"right aligned",get children(){return l(Z,{})}}),l(s,{value:"justify","aria-label":"justified",disabled:!0,get children(){return l(E,{})}})]}})}u(G,"ExclusiveSelection");G.code=`import FormatAlignCenterIcon from "@suid/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@suid/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@suid/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@suid/icons-material/FormatAlignRight";
import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import { createSignal } from "solid-js";

export default function ExclusiveSelection() {
  const [alignment, setAlignment] = createSignal("left");

  return (
    <ToggleButtonGroup
      value={alignment()}
      exclusive
      onChange={(event, newAlignment) => {
        setAlignment(newAlignment);
      }}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;function ie(){return l(L,{get name(){return s.name},examples:[G,{title:"Color",component:M}]})}u(ie,"ToggleButtonPage");export{ie as default};
