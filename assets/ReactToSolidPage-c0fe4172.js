var b=Object.defineProperty;var c=(o,i)=>b(o,"name",{value:i,configurable:!0});import{a as r,o as S,d as t,bb as T,bc as a,T as n,p as w,G as s,S as d,a_ as f,B as V,h as P,bd as A,au as O}from"./index-c0a494da.js";import{A as B}from"./Alert-71e73198.js";import{C as D}from"./CircularProgress-77fac542.js";import{g as k}from"./getDependencyName-dc7e06bb.js";const L=`import * as React from "react"
import Button from "@mui/material/Button"

export default function Counter(props: any) {
  const [value, setValue] = React.useState(0);
  const { label = 'Increment', ...otherProps } = props;
  const propsAndValue = { ...props, value };
  const onClick = () => setValue(value + 1);

  React.useEffect(() => {
    console.log("Value: " + propsAndValue.value);
  }, [value]);

  return <div {...otherProps}>
    Value: {value}
    <Button onClick={onClick}>{label}</Button>
  </div>
}
`,_="react2solid-input-code";function M(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(o){console.error(o)}}c(M,"decodeHash");function W(){const o=localStorage.getItem(_),[i,v]=r(!1),[y,x]=r(!1),[p,m]=r(!1),l=M()??(o?.length?o:L),[h,C]=r(l),[E,I]=r(""),g=T(()=>a(()=>import("./CodeEditor-e8203282.js").then(e=>e.C),["assets/CodeEditor-e8203282.js","assets/index-c0a494da.js","assets/useControlled-c404a957.js","assets/CodeEditor-1257780a.css"]));return S(()=>{setTimeout(()=>{location.hash=window.btoa(l)})}),[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(n,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(B,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",w(()=>k("@suid/codemod"))]}}),t(s,{container:!0,spacing:2,get children(){return[t(s,{item:!0,xs:12,xl:6,get children(){return[t(n,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!i()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:l,onReady:()=>v(!0),onChange:e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)}})]}}),t(s,{item:!0,xs:12,xl:6,get children(){return[t(n,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return E()},onReady:()=>x(!0)})]}}),t(s,{item:!0,xs:12,get children(){return t(V,{sx:{textAlign:"center",my:2},get children(){return t(P,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get class(){return p()?A.disabled:""},onMouseEnter:()=>{a(()=>import("./applyTransforms-ec4d9700.js"),["assets/applyTransforms-ec4d9700.js","assets/ts-morph-1ba0ed17.js","assets/index-c0a494da.js"]),a(()=>import("./transformReactSource-4ea1ffa2.js"),["assets/transformReactSource-4ea1ffa2.js","assets/ts-morph-1ba0ed17.js","assets/index-c0a494da.js"])},onClick:async()=>{let e=h();m(!0);try{const u=await a(()=>import("./applyTransforms-ec4d9700.js"),["assets/applyTransforms-ec4d9700.js","assets/ts-morph-1ba0ed17.js","assets/index-c0a494da.js"]),R=await a(()=>import("./transformReactSource-4ea1ffa2.js"),["assets/transformReactSource-4ea1ffa2.js","assets/ts-morph-1ba0ed17.js","assets/index-c0a494da.js"]);e=u.default(h(),[R.default])}catch(u){console.error(u)}finally{setTimeout(()=>{I(e),m(!1)},500)}},get children(){return t(d,{get when(){return p()},fallback:"Transform",get children(){return["Transforming",t(D,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(O,{sx:{mt:2}})]}c(W,"ReactToSolidPage");export{W as default};
