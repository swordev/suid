var r=Object.defineProperty;var n=(t,e)=>r(t,"name",{value:e,configurable:!0});import{j as a,H as i,t as s,d as o}from"./index-23102c99.js";import{C as p}from"./ComponentInfo-d72a4890.js";import"./Link-c9724eca.js";import"./copyText-5dc13f81.js";import"./PaperCode-80dd34f9.js";const u=s("<span>");function m(){const t=a("(min-width:600px)");return(()=>{const e=u();return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(m,"SimpleMediaQuery");m.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[m],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
