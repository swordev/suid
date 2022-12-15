var r=Object.defineProperty;var n=(t,e)=>r(t,"name",{value:e,configurable:!0});import{j as a,a6 as s,t as i,d as o}from"./index.587a1a49.js";import{C as p}from"./ComponentInfo.4db125cf.js";import"./Link.687f6c0c.js";import"./copyText.f7152695.js";import"./PaperCode.04f8488e.js";const u=i("<span></span>");function m(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return s(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(m,"SimpleMediaQuery");m.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[m],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
