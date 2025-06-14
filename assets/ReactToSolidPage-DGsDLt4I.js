const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeEditor-CqkLEd2a.js","assets/index-C8Cbba9i.js","assets/useControlled-F8yM6TDl.js","assets/CodeEditor-DIPB3Vbg.css","assets/applyTransforms-d6hx6J0E.js","assets/ts-morph-XaNlJ3rE.js","assets/transformReactSource-9j6LnmrT.js"])))=>i.map(i=>d[i]);
var S=Object.defineProperty;var o=(r,l)=>S(r,"name",{value:l,configurable:!0});import{a,w,h as t,k as s,b,G as i,S as d,x as f,y as T,B as P,z as V,_ as n,A,P as O}from"./index-C8Cbba9i.js";import{A as B}from"./Alert-BeS9aULX.js";import{C as k}from"./CircularProgress-CNYD9_eR.js";import{g as D}from"./getDependencyName-CYjULzfP.js";const L=`import * as React from "react"
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
`,_="react2solid-input-code";function M(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(r){console.error(r)}}o(M,"decodeHash");function W(){const r=localStorage.getItem(_),[l,v]=a(!1),[y,x]=a(!1),[m,p]=a(!1),u=M()??(r?.length?r:L),[h,C]=a(u),[E,I]=a(""),g=T(()=>n(()=>import("./CodeEditor-CqkLEd2a.js").then(e=>e.C),__vite__mapDeps([0,1,2,3])));return w(()=>{setTimeout(()=>{location.hash=window.btoa(u)})}),[t(s,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(s,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(B,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",b(()=>D("@suid/codemod"))]}}),t(i,{container:!0,spacing:2,get children(){return[t(i,{item:!0,xs:12,xl:6,get children(){return[t(s,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!l()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:u,onReady:o(()=>v(!0),"onReady"),onChange:o(e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)},"onChange")})]}}),t(i,{item:!0,xs:12,xl:6,get children(){return[t(s,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return E()},onReady:o(()=>x(!0),"onReady")})]}}),t(i,{item:!0,xs:12,get children(){return t(P,{sx:{textAlign:"center",my:2},get children(){return t(V,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get class(){return m()?A.disabled:""},onMouseEnter:o(()=>{n(()=>import("./applyTransforms-d6hx6J0E.js"),__vite__mapDeps([4,5,1])),n(()=>import("./transformReactSource-9j6LnmrT.js"),__vite__mapDeps([6,5,1]))},"onMouseEnter"),onClick:o(async()=>{let e=h();p(!0);try{const c=await n(()=>import("./applyTransforms-d6hx6J0E.js"),__vite__mapDeps([4,5,1])),R=await n(()=>import("./transformReactSource-9j6LnmrT.js"),__vite__mapDeps([6,5,1]));e=c.default(h(),[R.default])}catch(c){console.error(c)}finally{setTimeout(()=>{I(e),p(!1)},500)}},"onClick"),get children(){return t(d,{get when(){return m()},fallback:"Transform",get children(){return["Transforming",t(k,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(O,{sx:{mt:2}})]}o(W,"ReactToSolidPage");export{W as default};
