var r=Object.defineProperty;var n=(t,e)=>r(t,"name",{value:e,configurable:!0});import{j as a,w as i,t as s,d as o}from"./index-2ade038b.js";import{C as p}from"./ComponentInfo-bf8f3e44.js";import"./Link-b969f3af.js";import"./copyText-64309802.js";import"./PaperCode-2146d787.js";import"./_commonjsHelpers-0119a68f.js";const u=s("<span>");function m(){const t=a("(min-width:600px)");return(()=>{const e=u();return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(m,"SimpleMediaQuery");m.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function M(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[m],moreExamples:!1})}n(M,"useMediaQueryPage");export{M as default};
