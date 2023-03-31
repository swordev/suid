var r=Object.defineProperty;var n=(t,e)=>r(t,"name",{value:e,configurable:!0});import{j as a,w as i,t as s,d as o}from"./index-308e1143.js";import{C as p}from"./ComponentInfo-957c5db2.js";import"./Link-331b52ef.js";import"./copyText-30030021.js";import"./PaperCode-dee739b3.js";import"./_commonjsHelpers-0119a68f.js";const u=s("<span>");function m(){const t=a("(min-width:600px)");return(()=>{const e=u();return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(m,"SimpleMediaQuery");m.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function M(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[m],moreExamples:!1})}n(M,"useMediaQueryPage");export{M as default};
