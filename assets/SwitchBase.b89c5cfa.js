var x=Object.defineProperty;var l=(t,o)=>x(t,"name",{value:o,configurable:!0});import{af as w,ag as S,q as I,r as p,s as L,v as q,w as y,ah as v,K as g,f as m,m as h,d as b,A as z,n as N,ai as U}from"./index.0086796b.js";import{u as O}from"./useFormControl.9c02c6c0.js";import{u as D}from"./useControlled.7dd8139f.js";const E=w();function M(){return S(E)}l(M,"useFormControlLabel");function T(t){return p("PrivateSwitchBase",t)}l(T,"getSwitchBaseUtilityClass");I("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const k=L()({name:"MuiSwitchBase",selfPropNames:["autoFocus","checked","checkedIcon","classes","defaultChecked","disableFocusRipple","disableRipple","disabled","edge","icon","id","inputProps","inputRef","name","onChange","readOnly","required","tabIndex","type","value"],autoCallUseClasses:!1,propDefaults:({set:t})=>t({disableFocusRipple:!1,edge:!1}),utilityClass:T,slotClasses:t=>({root:["root",!!t.checked&&"checked",!!t.disabled&&"disabled",t.edge&&`edge${q(t.edge)}`],input:["input"]})}),$=y(v)(({ownerState:t})=>({padding:9,borderRadius:"50%",...t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},...t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}})),A=y("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),H=k.component(l(function({allProps:o,otherProps:i,props:e}){const a=M(),[u,B]=D({controlled:()=>e.checked??a?.checked,default:()=>Boolean(e.defaultChecked),name:"SwitchBase",state:"checked"}),c=O(),s=g(()=>typeof a?.disabled<"u"?a.disabled:c&&typeof e.disabled>"u"?c.disabled:e.disabled);m(()=>{a&&a.setDisabled(!!s())});const F=g(()=>e.type==="checkbox"||e.type==="radio"),r=h(o,()=>({checked:u(),disabled:s()})),C=k.useClasses(r),f=U(()=>e.inputRef),R=g(()=>{if(e.type==="checkbox")return e.value??a?.value});return m(()=>{typeof e.defaultChecked=="boolean"&&(f.ref.defaultChecked=e.defaultChecked)}),m(()=>{const n=u();typeof n=="boolean"&&(f.ref.checked=n)}),b($,h(i,{component:"span",get className(){return z(C.root,i.className)},centerRipple:!0,get focusRipple(){return!e.disableFocusRipple},get disabled(){return s()},tabIndex:null,role:void 0,onFocus:n=>{typeof i.onFocus=="function"&&i.onFocus(n),c?.onFocus?.()},onBlur:n=>{typeof i.onBlur=="function"&&i.onBlur(n),c?.onBlur?.()},ownerState:r,get children(){return[b(A,h({component:"input",get autofocus(){return e.autoFocus},get className(){return C.input},get disabled(){return s()},get id(){return F()?e.id:void 0},get name(){return e.name??a?.name},onClick:n=>{if(n.defaultPrevented)return;const d=n.currentTarget.checked;n.currentTarget.checked=!d,B(d),typeof e.onChange=="function"?e.onChange(n,d):a?.onChange?.(n,d),typeof i.onClick=="function"&&i.onClick(n)},get readOnly(){return e.readOnly},ref:n=>{f(n),e.inputRef||a?.inputRef?.(n)},get required(){return e.required},ownerState:r,get tabIndex(){return e.tabIndex},get type(){return e.type}},()=>({value:R()}),()=>e.inputProps||{})),N(()=>u()?e.checkedIcon:e.icon)]}}))},"SwitchBase"));export{E as F,H as S};