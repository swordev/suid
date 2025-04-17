const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeEditor-K-eAIlTP.js","assets/index-w4oZYh5t.js","assets/useControlled-uAveUVH8.js","assets/CodeEditor-tfmJ_4x4.css","assets/applyTransforms-DszBeO7h.js","assets/ts-morph-z1r4fO1O.js","assets/transformReactSource-DTSfZVxD.js"])))=>i.map(i=>d[i]);
var S=Object.defineProperty;var o=(r,l)=>S(r,"name",{value:l,configurable:!0});import{a,w,h as t,x as b,_ as n,k as s,b as T,G as i,S as d,y as f,B as P,z as V,A,P as O}from"./index-w4oZYh5t.js";import{A as B}from"./Alert-BdoYBJfx.js";import{C as k}from"./CircularProgress-BIvCiVXk.js";import{g as D}from"./getDependencyName-CnEgitlm.js";const L=`import * as React from "react"
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
`,_="react2solid-input-code";function M(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(r){console.error(r)}}o(M,"decodeHash");function W(){const r=localStorage.getItem(_),[l,v]=a(!1),[y,x]=a(!1),[m,p]=a(!1),u=M()??(r?.length?r:L),[h,C]=a(u),[E,I]=a(""),g=b(()=>n(()=>import("./CodeEditor-K-eAIlTP.js").then(e=>e.C),__vite__mapDeps([0,1,2,3])));return w(()=>{setTimeout(()=>{location.hash=window.btoa(u)})}),[t(s,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(s,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(B,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",T(()=>D("@suid/codemod"))]}}),t(i,{container:!0,spacing:2,get children(){return[t(i,{item:!0,xs:12,xl:6,get children(){return[t(s,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!l()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:u,onReady:o(()=>v(!0),"onReady"),onChange:o(e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)},"onChange")})]}}),t(i,{item:!0,xs:12,xl:6,get children(){return[t(s,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return E()},onReady:o(()=>x(!0),"onReady")})]}}),t(i,{item:!0,xs:12,get children(){return t(P,{sx:{textAlign:"center",my:2},get children(){return t(V,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get class(){return m()?A.disabled:""},onMouseEnter:o(()=>{n(()=>import("./applyTransforms-DszBeO7h.js"),__vite__mapDeps([4,5,1])),n(()=>import("./transformReactSource-DTSfZVxD.js"),__vite__mapDeps([6,5,1]))},"onMouseEnter"),onClick:o(async()=>{let e=h();p(!0);try{const c=await n(()=>import("./applyTransforms-DszBeO7h.js"),__vite__mapDeps([4,5,1])),R=await n(()=>import("./transformReactSource-DTSfZVxD.js"),__vite__mapDeps([6,5,1]));e=c.default(h(),[R.default])}catch(c){console.error(c)}finally{setTimeout(()=>{I(e),p(!1)},500)}},"onClick"),get children(){return t(d,{get when(){return m()},fallback:"Transform",get children(){return["Transforming",t(k,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(O,{sx:{mt:2}})]}o(W,"ReactToSolidPage");export{W as default};
