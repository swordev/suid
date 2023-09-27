var S=Object.defineProperty;var c=(o,i)=>S(o,"name",{value:i,configurable:!0});import{a as r,w,h as t,x as b,_ as a,k as n,b as T,G as s,S as d,y as f,B as P,z as V,A,P as O}from"./index-10f92eee.js";import{A as B}from"./Alert-d58e8040.js";import{C as k}from"./CircularProgress-8827161c.js";import{g as D}from"./getDependencyName-adf7af2b.js";const L=`import * as React from "react"
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
`,_="react2solid-input-code";function M(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(o){console.error(o)}}c(M,"decodeHash");function W(){const o=localStorage.getItem(_),[i,v]=r(!1),[y,x]=r(!1),[m,p]=r(!1),l=M()??(o?.length?o:L),[h,C]=r(l),[E,I]=r(""),g=b(()=>a(()=>import("./CodeEditor-28c12ffc.js").then(e=>e.C),["assets/CodeEditor-28c12ffc.js","assets/index-10f92eee.js","assets/useControlled-a21131fa.js","assets/CodeEditor-1862df68.css"]));return w(()=>{setTimeout(()=>{location.hash=window.btoa(l)})}),[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(n,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(B,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",T(()=>D("@suid/codemod"))]}}),t(s,{container:!0,spacing:2,get children(){return[t(s,{item:!0,xs:12,xl:6,get children(){return[t(n,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!i()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:l,onReady:()=>v(!0),onChange:e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)}})]}}),t(s,{item:!0,xs:12,xl:6,get children(){return[t(n,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return E()},onReady:()=>x(!0)})]}}),t(s,{item:!0,xs:12,get children(){return t(P,{sx:{textAlign:"center",my:2},get children(){return t(V,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get class(){return m()?A.disabled:""},onMouseEnter:()=>{a(()=>import("./applyTransforms-ceea628f.js"),["assets/applyTransforms-ceea628f.js","assets/ts-morph-62d95fc3.js","assets/index-10f92eee.js"]),a(()=>import("./transformReactSource-c14e20a8.js"),["assets/transformReactSource-c14e20a8.js","assets/ts-morph-62d95fc3.js","assets/index-10f92eee.js"])},onClick:async()=>{let e=h();p(!0);try{const u=await a(()=>import("./applyTransforms-ceea628f.js"),["assets/applyTransforms-ceea628f.js","assets/ts-morph-62d95fc3.js","assets/index-10f92eee.js"]),R=await a(()=>import("./transformReactSource-c14e20a8.js"),["assets/transformReactSource-c14e20a8.js","assets/ts-morph-62d95fc3.js","assets/index-10f92eee.js"]);e=u.default(h(),[R.default])}catch(u){console.error(u)}finally{setTimeout(()=>{I(e),p(!1)},500)}},get children(){return t(d,{get when(){return m()},fallback:"Transform",get children(){return["Transforming",t(k,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(O,{sx:{mt:2}})]}c(W,"ReactToSolidPage");export{W as default};
