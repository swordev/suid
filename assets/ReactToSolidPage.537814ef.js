var S=Object.defineProperty;var c=(o,i)=>S(o,"name",{value:i,configurable:!0});import{a as r,o as T,d as t,N as w,_ as n,T as a,n as b,G as s,S as d,O as f,B as V,h as P,Q as A,J as O}from"./index.ad7ec8f2.js";import{A as B}from"./Alert.a8ccadfe.js";import{C as D}from"./CircularProgress.a02d647d.js";import{g as k}from"./getDependencyName.520d31a4.js";const L=`import * as React from "react"
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
`,_="react2solid-input-code";function N(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(o){console.error(o)}}c(N,"decodeHash");function W(){const o=localStorage.getItem(_),[i,v]=r(!1),[y,x]=r(!1),[m,p]=r(!1),l=N()??(o?.length?o:L),[h,C]=r(l),[E,I]=r(""),g=w(()=>n(()=>import("./CodeEditor.5cbe5cd6.js").then(function(e){return e.C}),["assets/CodeEditor.5cbe5cd6.js","assets/CodeEditor.f3e9adee.css","assets/index.ad7ec8f2.js","assets/useControlled.fd4d74b5.js"]));return T(()=>{setTimeout(()=>{location.hash=window.btoa(l)})}),[t(a,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(a,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(B,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",b(()=>k("@suid/codemod"))]}}),t(s,{container:!0,spacing:2,get children(){return[t(s,{item:!0,xs:12,xl:6,get children(){return[t(a,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!i()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:l,onReady:()=>v(!0),onChange:e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)}})]}}),t(s,{item:!0,xs:12,xl:6,get children(){return[t(a,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return E()},onReady:()=>x(!0)})]}}),t(s,{item:!0,xs:12,get children(){return t(V,{sx:{textAlign:"center",my:2},get children(){return t(P,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get className(){return m()?A.disabled:""},onMouseEnter:()=>{n(()=>import("./applyTransforms.2fd00447.js"),[]),n(()=>import("./transformReactSource.7139f288.js"),["assets/transformReactSource.7139f288.js","assets/index.ad7ec8f2.js"])},onClick:async()=>{let e=h();p(!0);try{const u=await n(()=>import("./applyTransforms.2fd00447.js"),[]),R=await n(()=>import("./transformReactSource.7139f288.js"),["assets/transformReactSource.7139f288.js","assets/index.ad7ec8f2.js"]);e=u.default(h(),[R.default])}catch(u){console.error(u)}finally{setTimeout(()=>{I(e),p(!1)},500)}},get children(){return t(d,{get when(){return m()},fallback:"Transform",get children(){return["Transforming",t(D,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(O,{sx:{mt:2}})]}c(W,"ReactToSolidPage");export{W as default};
