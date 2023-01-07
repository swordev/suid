var S=Object.defineProperty;var c=(o,s)=>S(o,"name",{value:s,configurable:!0});import{_ as r,B as b,b as T,F as w}from"./ListItemText-97540f66.js";import{A as V}from"./Alert-8317057c.js";import{C as P}from"./CircularProgress-0befe465.js";import{a,V as A,c as t,I as O,T as n,b as B,a0 as i,S as d}from"./ErrorPage-7e24a11e.js";import{S as f}from"./Skeleton-2f547679.js";import{P as D}from"./PageNav-9ce4881d.js";import{g as k}from"./getDependencyName-4fd31988.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";const L=`import * as React from "react"
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
`,_="react2solid-input-code";function M(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(o){console.error(o)}}c(M,"decodeHash");function j(){const o=localStorage.getItem(_),[s,v]=a(!1),[y,x]=a(!1),[m,p]=a(!1),l=M()??(o?.length?o:L),[h,C]=a(l),[I,E]=a(""),g=O(()=>r(()=>import("./CodeEditor-5378f9a5.js").then(e=>e.C),["assets/CodeEditor-5378f9a5.js","assets/ListItemText-97540f66.js","assets/ErrorPage-7e24a11e.js","assets/useControlled-4747f91f.js","assets/PageNav-9ce4881d.js","assets/CodeEditor-94a4e33a.css"]));return A(()=>{setTimeout(()=>{location.hash=window.btoa(l)})}),[t(n,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(n,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(V,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",B(()=>k("@suid/codemod"))]}}),t(i,{container:!0,spacing:2,get children(){return[t(i,{item:!0,xs:12,xl:6,get children(){return[t(n,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!s()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:l,onReady:()=>v(!0),onChange:e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)}})]}}),t(i,{item:!0,xs:12,xl:6,get children(){return[t(n,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return I()},onReady:()=>x(!0)})]}}),t(i,{item:!0,xs:12,get children(){return t(b,{sx:{textAlign:"center",my:2},get children(){return t(T,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get class(){return m()?w.disabled:""},onMouseEnter:()=>{r(()=>import("./applyTransforms-6f54875c.js"),[]),r(()=>import("./transformReactSource-1acbe86d.js"),[])},onClick:async()=>{let e=h();p(!0);try{const u=await r(()=>import("./applyTransforms-6f54875c.js"),[]),R=await r(()=>import("./transformReactSource-1acbe86d.js"),[]);e=u.default(h(),[R.default])}catch(u){console.error(u)}finally{setTimeout(()=>{E(e),p(!1)},500)}},get children(){return t(d,{get when(){return m()},fallback:"Transform",get children(){return["Transforming",t(P,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(D,{sx:{mt:2}})]}c(j,"ReactToSolidPage");export{j as default};
